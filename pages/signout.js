import React,{useEffect} from 'react'
import firebase from '../config/firebaseConfig'

function signout() {
    useEffect(() => {
        localStorage.removeItem('clientCtx')
        let y = firebase.signOut()
        y.then(()=>{
            window.location.href = "/"
        })
    })
    return (
        <div>
            <h1>Sign Out</h1> 
        </div>
    )
}

export default signout
