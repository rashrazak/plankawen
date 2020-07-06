import React, {useState,useEffect,useContext} from 'react'
import { LSContext } from '../context/LSContext'
import Router from 'next/router';
import firebase from '../config/firebaseConfig'

function login() {
    const [select, setSelect] = useState(true)
    const [url, setUrl] = useState('')
    const [goUrl, setGoUrl] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setClientCtx, setLoginCtx} = useContext(LSContext)

    useEffect(() => {
        if (goUrl == true) {
            if (  url == '') {
                setSelect(false);
            }else if (url == 'https://vendor.plankawen.com/signup'){
                window.location.href = url;
            }else if(url == 'login'){
                window.location.href = '/signup'
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

    async function loginWithSocial() {
        var result = await firebase.signInWithSocial();
        var user = result.user;

        try{
            let exist = await firebase.check(user.email)
            let result = await exist.docs
            
            if (result.length == 1) {

                result.map(doc =>{
                    let x = doc.data()
                    if (user != null) {
                        setClientCtx({
                            name:x.nama,
                            email:x.email,
                            photoUrl: user.photoURL,
                            emailVerified: user.emailVerified,
                            uid: user.uid,
                            phone:x.phone,
                            documentId:x.documentId,
                            dateCreated:x.dateCreated,
                            clientType:x.clientType
                            
                        })
    
                        localStorage.setItem('client', JSON.stringify({
                            name:x.nama,
                            email:x.email,
                            photoUrl: user.photoURL,
                            emailVerified: user.emailVerified,
                            uid: user.uid,
                            phone:x.phone,
                            documentId:x.documentId,
                            dateCreated:x.dateCreated,
                            clientType:x.clientType
                            
                        }))
                        setLoginCtx(true)
                        
                    }
                })

                
            }else{
                alert('Please Signup as client');
                Router.push(`/signup?email=${user.email}`)
            }
        }catch(error){
            throw alert(error.message)
            return false
        
        }


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
                                name:x.nama,
                                email:x.email,
                                photoUrl: user.photoURL,
                                emailVerified: user.emailVerified,
                                uid: user.uid,
                                phone:x.phone,
                                documentId:x.documentId,
                                dateCreated:x.dateCreated,
                                clientType:x.clientType
                                
                            })
                            localStorage.setItem('client', JSON.stringify({
                                name:x.nama,
                                email:x.email,
                                photoUrl: user.photoURL,
                                emailVerified: user.emailVerified,
                                uid: user.uid,
                                phone:x.phone,
                                documentId:x.documentId,
                                dateCreated:x.dateCreated,
                                clientType:x.clientType
                                
                            }))
                            setLoginCtx(true)
                            window.location.href = "/"
                        }
                    }catch(error){
                        alert(error.message)
                    }
                    
                }else{
                    alert('Please Signup as client');
                    window.location.href = "/signup"
                }
            }catch(error){
                throw alert(error.message)
                return false
            
            }

            
        }
    }

    return (
        <div>
            <div className="master-layout bg-grey">
                <div className="container auth-container">
                    <div className="image-container">
                        <img src="/images/backgrounds/vendor-bg.png"/>
                    </div>
                {
                    select == true ?
                    <div className="auth-form-section">
                        <h1>Gunakan alamat emel anda untuk <b>log</b> atau <b>daftar masuk</b></h1>

                        <p className="title-p">PILIH AKAUN ANDA (DAFTAR MASUK)</p>
                        <div className="choose-your-fighter">
                            <div onClick={()=>setUrl('login')} className="">
                                <div className="image-bakal-pengantin">
                                    <img src="/images/backgrounds/bakalpengantin.jpg"/>
                                </div> 
                                <h3>Bakal Pengantin</h3>
                            </div>
                            <div onClick={()=>setUrl('https://vendor.plankawen.com/signup')} className="">
                                <div className="image-vendor">
                                    <img src="/images/backgrounds/bakalvendor.jpg"/>
                                </div> 
                                <h3>Vendor Servis</h3>
                            </div>
                        </div>
                        <div className="next-container">
                            <p className="klik-sini">Sudah punya akaun? Klik <span onClick={()=>setGoUrl(true)}>sini</span></p>
                            <button className="btn btn-next" onClick={()=>setGoUrl(true)}>Seterusnya</button>
                        </div>
                    </div>
                    :
                    <div className="auth-form-section">
                        <h1>Gunakan alamat emel anda untuk <b>log</b> atau <b>daftar masuk</b></h1>

                        <div className="">
                            <label>Email</label>
                            <input type="email" className="form-control form-custom" onBlur={(e)=>setEmail(e.target.value)} placeholder="E-mel" />
                            <label>Password</label>
                            <input type="password" className="form-control form-custom" onBlur={(e)=>setPassword(e.target.value)} placeholder="Kata Laluan" />
                        </div>
                       
                        <div className="next-container">
                            <p className="klik-sini">Lupa kata laluan? Klik <span onClick={()=>goLupaPassword()}>sini</span></p>
                            <button className="btn btn-next" onClick={()=>seterusnya()}>Seterusnya</button>
                        </div>

                        <p className="title-p">ATAU</p>

                        <div className="with-google" onClick={()=>loginWithSocial('gmail')}>
                            <button className="btn btn-google">Login dengan Google</button>
                        </div>
                        {/* <div onClick={()=>loginWithSocial('https://vendor.plankawen.com/signup')}>
                            <h3>Vendor Servis</h3>
                        </div> */}
                    </div>
                }

                </div>
            </div>
            <style jsx>{`
                .auth-container { width: 1140px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); display: flex; }
                .image-container { margin-right: 70px;}
                h1 { font-style: normal; font-weight: normal;font-size: 2rem;color: #3E3E3E;}
                .master-layout { height: 100vh; position: relative;}
                .bg-grey { background: radial-gradient(178.63% 89.41% at 8.27% 146.36%, #F59A86 0%, #F4F4F4 100%);}
                .auth-form-section { max-width: 490px; margin-top: 20px; }
                .choose-your-fighter { display: flex; max-width: 400px; margin: auto; justify-content: space-between;}
                .choose-your-fighter > div { width: 197px; }
                .choose-your-fighter h3 { font-style: normal; font-weight: bold; font-size: 0.9375rem; color: #3E3E3E; margin-top: 5px;}
                .choose-your-fighter img { width: 100%; filter: grayscale(100%);}
                .title-p { font-style: normal; font-weight: normal; font-size: 1rem; text-align: center; color: #9B9B9B; margin-top: 28px;}
                .image-bakal-pengantin { cursor: pointer; position: relative;}
                .image-bakal-pengantin:hover::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(245, 154, 134, 0.5); z-index: 2; border-radius: 5px; }
                .image-vendor { cursor: pointer; position: relative;}
                .image-vendor:hover::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(89, 208, 201, 0.5); z-index: 2; border-radius: 5px; }
                .klik-sini { font-style: normal;font-weight: normal;font-size: 1rem;color: #3E3E3E; margin-bottom: 0;}
                .klik-sini > span { color: #ED795F; text-decoration: underline;}
                .btn-next { font-style: normal; font-weight: 600; font-size: 0.875rem; color: #FFF; background-color: #ED795F; border-radius: 8px; background-image: url('/images/icon/arrow-right-white.png'); background-repeat: no-repeat; background-position: center right 10px; background-size: 20px; width: 165px; height: 45px;}
                .next-container { display: flex; justify-content: space-between; align-items: center; margin-top: 44px;}
                .form-custom { background: #FFF; border-radius: 4px; font-style: normal; font-weight: normal; font-size: 0.875rem; color: #2B2B2B; height: 60px; border: none;} 
                label { font-style: normal; font-weight: normal; font-size: 0.875rem; color: #47CBC4; margin-top: 10px;}
                .btn-google { background-color: #3E3E3E; border: 1px solid #979797; box-sizing: border-box; border-radius: 6px; height: 50px; font-style: normal; font-weight: bold; font-size: 0.9375rem; text-align: center;color: #FFF; width: 100%;}
            `}</style>
        </div>
    )
}

export default login
