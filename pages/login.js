import React, {useState,useEffect,useContext} from 'react'
import { LSContext } from '../context/LSContext'
import Router from 'next/router';

function login() {
    const [select, setSelect] = useState(true)
    const [url, setUrl] = useState('')
    const [goUrl, setGoUrl] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setClientCtx, setLoginCtx} = useContext(LSContext)

    useEffect(() => {
        if (goUrl == true) {
            if (url == 'login') {
                setSelect(false);
            }else if (url == 'https://vendor.plankawen.com/signup'){
                window.location.href = url;
            }else{
                alert('Sila Pilih Seleksi')
            } 
        }
        
    }, [goUrl])

    function goLupaPassword(){
        //belum lagi
        if (email) {
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(mailformat)) {
                throw alert('Invalid email format')
                return false
            }
        }
    }

    function loginWithSocial() {
        //belum lagi
        //kalau akaun ni tak exist dalam client, pergi signup
    }

    async function seterusnya(){
        if (email && password){
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(mailformat)) {
                throw alert('Invalid email format')
                return false
            }

            try{
                let exist = await firebase.check(email)
                let result = await exist.docs
                console.log(result);
                if (result.length == 1) {
                    try{
                        let result =  await firebase.signIn(email, password);
                        let user = result.user;
                        console.log(user)
                        if (user != null) {
                            setClientCtx({
                                name:user.displayName,
                                email:user.email,
                                photoUrl: user.photoURL,
                                emailVerified: user.emailVerified,
                                uid: user.uid
                                
                            },
                            () =>  {
                                localStorage.setItem('client', JSON.stringify({
                                name:user.displayName,
                                email:user.email,
                                photoUrl: user.photoURL,
                                emailVerified: user.emailVerified,
                                uid: user.uid
                                }))
                                setLoginCtx(true)
                                Router.push('/')
                            });
                        }
                    }catch(error){
                        alert(error.message)
                    }
                    
                }else{
                    alert('Please Signup as client');
                }
            }catch(error){
                throw alert(error.message)
                return false
            
            }

            
        }
    }

    return (
        <div>
            {
                select == true ?
                <div>
                    <h1>Gunakan alamat emel anda untuk <b>log</b> atau <b>daftar masuk</b></h1>

                    <div onClick={()=>setUrl('login')}>
                        <h3>Bakal Pengantin</h3>
                    </div>
                    <div onClick={()=>setUrl('https://vendor.plankawen.com/signup')}>
                        <h3>Vendor Servis</h3>
                    </div>

                    <p>Sudah punya akaun? Klik <span onClick={()=>setGoUrl(true)}>sini</span></p>
                    <button onClick={()=>setGoUrl(true)} />

                </div>
                :
                <div>
                    <h1>Gunakan alamat emel anda untuk <b>log</b> atau <b>daftar masuk</b></h1>
                    <input type="email" onBlur={(e)=>setEmail(e.target.value)} placeholder="E-mel" />
                    <input type="password" onBlur={(e)=>setPassword(e.target.value)} placeholder="Kata Laluan" />
                    <p>Lupa kata laluan? Klik <span onClick={()=>goLupaPassword()}>sini</span></p>
                    <button onClick={()=>seterusnya()}>Seterusnya</button>

                    <span>ATAU</span>

                    <div onClick={()=>loginWithSocial('gmail')}>
                        <h3>Login dengan Google</h3>
                    </div>
                    {/* <div onClick={()=>loginWithSocial('https://vendor.plankawen.com/signup')}>
                        <h3>Vendor Servis</h3>
                    </div> */}
                </div>
            }
            
        </div>
    )
}

export default login
