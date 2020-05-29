import React, {useState,useEffect,useContext} from 'react'

function signup() {
    const [email, setEmail] = useState('')
    const [emailFromFirebase, setEmailFromFirebase] = useState(false)
    const [emailNotExist, setEmailNotExist] = useState(false)
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [namaPenuh, setNamaPenuh] = useState('')


    useEffect(() => {
        //not ready
        if (email != '') { //supoosedly from furebase / context
            setEmail('aaaa@aaa')
            setEmailFromFirebase(true)
        }else{
            if (email) {
                //check email if exist
                if (email == true) { //if exist
                    setEmailNotExist(true)
                }
            }
        }
        
    }, [email])

    function seterusnya() {
        //belum lagi
        if (email && password && namaPenuh && phone){
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(mailformat)) {
                throw alert('Invalid email format')
            }
        }
    }

    return (
        <div>
            <h1><b>Daftar masuk</b></h1>

            {
                emailFromFirebase == true ?
                <div>
                    <input type="email" value={email} disabled/>
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
                <input type="password" onBlur={(e)=>setPassword(e.target.value)} placeholder="**********" />
                <br/>
                <button onClick={()=>seterusnya()}>Seterusnya</button>
            </div>
            
        </div>
    )
}

export default signup
