import React, {useState,useEffect,useContext} from 'react'

function signup() {
    const [email, setEmail] = useState('')
    const [kode, setKode] = useState('')

    useEffect(() => {
        //not ready
        if (email != '') { //supoosedly from furebase / context
            setEmail('aaaa@aaa')
        }
    }, [email])

    function daftar() {
        //belum lagi
        if (email && password && namaPenuh && phone){
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(mailformat)) {
                throw alert('Invalid email format')
            }
        }
    }

    function goDaftar() {
        //belum lagi
        if (email) {
            
        }
    }

    return (
        <div>
            <h1>Terima kasih kerana mendaftar!</h1>
            <p>Untuk pengesahan akaun, sila masukkan kod yang telah dihantar ke email</p>
            <br/>
            <h3>{email}</h3>

            <div>
                <input type="text" onBlur={(e)=>setNamaPenuh(e.target.value)} placeholder="8-digit kod" />
                <br/>
                <p>Tidak terima? <span onClick={()=>goHantar()}>Hantar</span> sekali lagi.</p>
                <button onClick={()=>goDaftar()}>Daftar</button>
            </div>
            
        </div>
    )
}

export default signup
