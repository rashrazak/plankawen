import React,{useEffect, useContext} from 'react'
import firebase from '../config/firebaseConfig'
import {LSContext} from '../context/LSContext'

function signout() {
    useEffect(() => {
        localStorage.removeItem('clientCtx')
        localStorage.removeItem('user');
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
