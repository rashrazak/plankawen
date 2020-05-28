import React, {useState,useEffect,useContext} from 'react'

function login() {
    const [select, setSelect] = useState(true)
    const [url, setUrl] = useState('')

    const goSignup = () =>{
        if (url == 'login') {
            setSelect(false);
        }else{
            window.location.href = url;
        }
    }
    return (
        <div>
            {
                select == true ?
                <div>
                    <h1>Gunakan alamat emel anda untuk <b>log</b> atau <b>daftar masuk</b></h1>

                    <div onClick={setUrl('login')}>
                        <h3>Bakal Pengantin</h3>
                    </div>
                    <div onClick={setUrl('https://vendor.plankawen.com/signup')}>
                        <h3>Vendor Servis</h3>
                    </div>

                    <p>Sudah punya akaun? Klik <span onClick={window.location.href="/login"}>sini</span></p>
                    <button onClick={goSignup()} />

                </div>
                :
                <div>
                    <h1>Gunakan alamat emel anda untuk <b>log</b> atau <b>daftar masuk</b></h1>

                    <div onClick={setUrl('/login')}>
                        <h3>Bakal Pengantin</h3>
                    </div>
                    <div onClick={setUrl('https://vendor.plankawen.com/signup')}>
                        <h3>Vendor Servis</h3>
                    </div>

                    <p>Sudah punya akaun? Klik <span onClick={window.location.href="/login"}>sini</span></p>
                    <button onClick={goSignup()} />

                </div>
            }
            
        </div>
    )
}

export default login
