import React, {useState,useEffect,useContext} from 'react'
import Router from 'next/router'
import firebase from '../config/firebaseConfig'
import {LSContext} from '../context/LSContext'

function signup() {
    const [email, setEmail] = useState('')
    const [emailFromFirebase, setEmailFromFirebase] = useState(false)
    const [emailNotExist, setEmailNotExist] = useState(false)
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [namaPenuh, setNamaPenuh] = useState('')

    const {clientCtx} = useContext(LSContext)


    useEffect(() => {
        async function checker(){
            console.log(clientCtx)
            if (email == '') { //supoosedly from furebase / context
                if (Router.query.email) {
                    // var result = firebase.checkAuth(Router.query.email)
                    // console.log(result)
                    setEmail(Router.query.email)
                    setEmailFromFirebase(true)
                }
            }else{
                if (email && emailNotExist == false) {
                    //check email if exist
                    let exist = await firebase.check(email)
                    console.log(exist)
                    if (exist.empty == true) { //if exist
                        setEmailNotExist(true)
                    }else{
                        alert('Account Exist!, Please Login')
                        Router.push('/login');
                    }
                }
            }
        }

        checker()
        
        
    }, [email])

    function seterusnya() {
        if (!email &&emailFromFirebase == false) {
            //belum lagi
            if (email && password && namaPenuh && phone){
                let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!email.match(mailformat)) {
                    throw alert('Invalid email format')
                }
            }
        }else{
            if (namaPenuh && phone){
                let data = {
                    nama:namaPenuh,
                    phone,
                    email,
                    dateCreated: new Date()
                }
                setTimeout(() => {
                    let y = firebase.signUpWithSocial(data)
                    y.then((x) => {
                      console.log(x.id)
                      let y = firebase.updateClientId(x.id)
                      y.then(() => {
                        alert('success')
                        Router.push(`/`)
                      })
                      .catch((e) => {
                        alert('error')
                        console.log(e)
                      }) 
                    })
                    .catch((e) => {
                      console.log(e)
                    })
              
                  },2000)
            }
        }
        
    }

    return (
        <div>
            <h1><b>Daftar masuk</b></h1>

            {
                emailFromFirebase == true && email ?
                <div>
                    <p>{email}</p>
                </div>
                :
                <div>
                    <input type="email" onBlur={(e)=>setEmail(e.target.value)} placeholder="E-mel" />
                </div>
               
            }
            {
                emailNotExist == true ?
                <div>
                    <h3>Maaf, kami tidak mengenalpasti e-mel anda. <br/>Daftar masuk sekarang!</h3>
                </div>
                :''
            }
            <div>
                <input type="text" onBlur={(e)=>setNamaPenuh(e.target.value)} placeholder="cth: Abu Bakar" />
                <br/>
                <input type="number" onBlur={(e)=>setPhone(e.target.value)} placeholder="+60123456789" />
                <br/>
                {
                    !email && emailFromFirebase == false ?
                    <input type="password" onBlur={(e)=>setPassword(e.target.value)} placeholder="**********" />
                    :''
                    
                }
                <br/>
                <button onClick={()=>seterusnya()}>Seterusnya</button>
            </div>
            
        </div>
    )
}

export default signup
