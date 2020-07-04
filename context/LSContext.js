import React,{createContext, useState, useEffect} from 'react'
export const LSContext = createContext();
import firebase from '../config/firebaseConfig'
const LSContextProvider = (props) => {
    
    const [clientCtx, setClientCtx] = useState(null)
    const [loginCtx, setLoginCtx] = useState(false)

    //end butri tempahan
    const signOut = () => {
        localStorage.removeItem('user');
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user == null){
            firebase.isInitialized().then(val => {
                console.log(val)
                if (val) {
                    console.log(val)
                    setClientCtx({
                        name:val.displayName,
                        email:val.email,
                        photoUrl: val.photoURL,
                        emailVerified: val.emailVerified,
                        uid: val.uid
                    })
                    localStorage.setItem('clientCtx', JSON.stringify({
                        name:val.displayName,
                        email:val.email,
                        photoUrl: val.photoURL,
                        emailVerified: val.emailVerified,
                        uid: val.uid
                    }))
                    
                    setLoginCtx(true)
                } else {
                // Router.push('/');
                }
              
            }).catch(err => {
                console.log(err)
            })
        }else if( user != null){
            setLoginCtx(true)
        }
    }, [])

    return (
        <LSContext.Provider value={{loginCtx, setLoginCtx, setClientCtx, clientCtx, signOut}}>
            {props.children}
        </LSContext.Provider>
    )
}

export default LSContextProvider