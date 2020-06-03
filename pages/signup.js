import React, {useState,useEffect,useContext} from 'react'
import Router from 'next/router'
import '../css/bootstrap.min.css'
import firebase from '../config/firebaseConfig'
import {LSContext} from '../context/LSContext'

function signup() {
    const [email, setEmail] = useState('')
    const [emailFromFirebase, setEmailFromFirebase] = useState(false)
    const [emailNotExist, setEmailNotExist] = useState(false)
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [namaPenuh, setNamaPenuh] = useState('')

    const {clientCtx, setLoginCtx} = useContext(LSContext)


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
                if (email && emailNotExist == false && emailFromFirebase == false) {
                    //check email if exist
                    let exist = await firebase.check(email)
                    console.log(exist)
                    setEmailFromFirebase(false)
                    setEmailNotExist(true)
                    if (exist.empty == false) { //if exist
                        alert('Account Exist!, Please Login')
                        Router.push('/login');
                    }
                }
            }
        }

        checker()
        
        
    }, [email])

    function seterusnya() {
        if (emailFromFirebase == false) {
            //belum lagi
            if (email && password && namaPenuh && phone){
                let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!email.match(mailformat)) {
                    throw alert('Invalid email format')
                }

                
                setTimeout(() => {
                    let data = {
                        email,
                        phone,
                        dateCreated: new Date(),
                        nama: namaPenuh,
                        clientType: 'normal'
                    }
                    let y = firebase.signUpClient(data)
                    y.then((x) => {
                        console.log(x.id)
                        let yy = firebase.updateClientId(x.id)
                      yy.then(() => {
                        let z = firebase.createClient(email, password)
                        z.then(()=>{
                            // 
                            
                        })
                        
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
        }else{
            if (namaPenuh && phone){
                let data = {
                    nama:namaPenuh,
                    phone,
                    email,
                    dateCreated: new Date(),
                    clientType:'google'
                }
                setTimeout(() => {
                    let y = firebase.signUpClient(data)
                    y.then((x) => {
                      console.log(x.id)
                      let y = firebase.updateClientId(x.id)
                      y.then(() => {
                        alert('success')
                        setLoginCtx(true)
                        window.location.href = "/"
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
            <div className="master-layout bg-grey">
                <div className="container auth-container">
                    <div className="image-container">
                        <img src="/static/images/backgrounds/vendor-bg.png"/>
                    </div>


                    <div className="auth-form-section">
                        <h1>Daftar masuk</h1>

                        {
                            emailFromFirebase == true && email ?
                            <div>
                                <p>{email}</p>
                            </div>
                            :
                            <div>
                                <label>E-mel</label>
                                <input type="email" className="form-control form-custom" onBlur={(e)=>setEmail(e.target.value)} placeholder="E-mel" />
                            </div>
                        
                        }
                        {
                            emailNotExist == true ?
                            <div>
                                <p className="label-error">Maaf, kami tidak mengenalpasti e-mel anda. Daftar masuk sekarang!</p>
                            </div>
                            :''
                        }
                        <div>
                            <label>Nama penuh</label>
                            <input type="text" className="form-control form-custom" onBlur={(e)=>setNamaPenuh(e.target.value)} placeholder="cth: Abu Bakar" />
                            <label>Nombor telefon</label>
                            <input type="number" className="form-control form-custom" onBlur={(e)=>setPhone(e.target.value)} placeholder="+60123456789" />
                           
                            {
                                emailNotExist == true && emailFromFirebase == false ?
                                <div>
                                    <label>Bina kata laluan</label>
                                    <input type="password" className="form-control form-custom" onBlur={(e)=>setPassword(e.target.value)} placeholder="**********" />
                                </div>
                                :''
                                
                            }
                            <div className="next-container">
                                <button className="btn btn-next" onClick={()=>seterusnya()}>Seterusnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .master-layout { height: 100vh; position: relative;}
                h1 { font-style: normal; font-weight: normal;font-size: 2rem;color: #3E3E3E;}
                .bg-grey { background: radial-gradient(178.63% 89.41% at 8.27% 146.36%, #F59A86 0%, #F4F4F4 100%);}
                .auth-container { width: 1140px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); display: flex; }
                .image-container { margin-right: 70px;}
                .auth-form-section { max-width: 490px; margin-top: 20px; width: 100%; }
                label { font-style: normal; font-weight: normal; font-size: 0.875rem; color: #47CBC4; margin-top: 10px;}
                .form-custom { background: #FFF; border-radius: 4px; font-style: normal; font-weight: normal; font-size: 0.875rem; color: #2B2B2B; height: 60px; border: none;}
                ::-webkit-input-placeholder { color: #BABABA; }
                ::-moz-placeholder { color: #BABABA; }
                :-ms-input-placeholder { color: #BABABA; }
                :-moz-placeholder { color: #BABABA; }
                .btn-next { font-style: normal; font-weight: 600; font-size: 0.875rem; color: #FFF; background-color: #ED795F; border-radius: 8px; background-image: url('/static/images/icon/arrow-right-white.png'); background-repeat: no-repeat; background-position: center right 10px; background-size: 20px; width: 165px; height: 45px;}
                .next-container { text-align: right;  margin-top: 44px;}
                .label-error { font-style: normal; font-weight: normal; font-size: 1rem; color: #3E3E3E; margin-top: 10px;}
            `}</style>
        </div>
    )
}

export default signup
