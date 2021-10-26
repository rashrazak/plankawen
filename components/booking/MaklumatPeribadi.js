import React, {useState, useEffect, useContext} from 'react'
import firebase from '../../config/firebaseConfig'
import {LSContext} from '../../context/LSContext'
import {BookingMainContext} from '../../context/BookingMainContext'
import Router from 'next/router'
import * as ls from 'local-storage'

function MaklumatPeribadi() {

    const {loginCtx, setLoginCtx, setClientCtx, clientCtx, signOut} = useContext(LSContext)
    const {setMain} = useContext(BookingMainContext)
    const {setBookCtxName, setBookCtxEmail, setBookCtxPhone} = setMain
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        if (loginCtx) {
            let param = ls.get('client') 
            if (param.name && param.email && param.phone) {
                setName(param.name)
                setEmail(param.email)
                setPhone(param.phone)
            }else{
                alert('Sila login')
                Router.push('/login')
            }
            
        }

    },[loginCtx])

    useEffect(() => {
        if (name) {
            setBookCtxName(name)
        }
    },[name])

    useEffect(() => {
        if (phone) {
            setBookCtxPhone(phone)
        }
    },[phone])

    useEffect(() => {
        if (email) {
            setBookCtxEmail(email)
        }
    },[email])


    return (
        <div className="form-width">
            {
                loginCtx == false ?
                <div className="div-maklumat-peribadi">
                    <h2>Sila <span style={{color: 'red', textDecoration:'underline'}} onClick={()=>Router.push('/login')}>Login</span> untuk pengesahan</h2>
                    <div className="div-maklumat">
                        <p><span><img src="/images/icon/user.png"/></span> [Name]</p>
                        <p><span><img src="/images/icon/email.png"/></span> [Email]</p>
                        <p><span><img src="/images/icon/phone.png"/></span> [Phone]</p>
                    </div>
                </div>
                :
                <div className="div-maklumat-peribadi">
                    <h2>Maklumat peribadi</h2>
                    {
                        edit == false ? 
                        <React.Fragment>
                            <div className="div-maklumat">
                                <p><span><img src="/images/icon/user.png"/></span> {name}</p>
                                <p><span><img src="/images/icon/email.png"/></span> {email}</p>
                                <p><span><img src="/images/icon/phone.png"/></span> {phone}</p>
                            </div>
                            <p className="p-edit" onClick={()=>setEdit(!edit)}><span><img src="/images/icon/edit.png"/></span> Edit</p>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="div-maklumat">
                                <p><span><img src="/images/icon/user.png"/></span> <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nama" /></p>
                                <p><span><img src="/images/icon/email.png"/></span><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" /></p>
                                <p><span><img src="/images/icon/phone.png"/></span><input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" /></p>
                            </div>
                            <p className="p-edit" onClick={()=>setEdit(!edit)}><span><img src="/images/icon/edit.png"/></span> Edit</p>
                        </React.Fragment>

                    }
                    
                </div>
            }
            
            <style jsx>{`
                .form-width { max-width: 490px; margin: auto; margin-bottom: 20px; }
                .div-maklumat-peribadi { background-color: #FFF; box-shadow: 0px 6px 15px rgba(117, 132, 142, 0.3); padding: 20px; }
                h2 { font-style: normal; font-weight: normal; font-size: 1rem; color: #2B2B2B;}
                .div-maklumat-peribadi { position: relative; }
                .p-edit { font-style: normal;font-weight: normal;font-size: 0.875rem;color: #2B2B2B; position: absolute; top: 20px; right: 20px; cursor: pointer;}
                .div-maklumat > p { font-style: normal; font-weight: normal;font-size: 1rem ;color: #75848E; margin-bottom: 8px;}
                .div-maklumat { margin-top: 12px;}
            `}</style>
        </div>
    )
}

export default MaklumatPeribadi
