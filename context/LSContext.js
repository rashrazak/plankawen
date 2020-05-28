import React,{createContext, useState, useEffect} from 'react'
export const LSContext = createContext();
import firebase from '../config/firebaseConfig'
const LSContextProvider = (props) => {
    
    const [loginCtx, setLoginCtx] = useState(false)

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user == null){
            firebase.isInitialized().then(val => {
                if (val) {
                console.log(val)
                this.setState({
                    user:{
                        name:val.displayName,
                        email:val.email,
                        photoUrl: val.photoURL,
                        emailVerified: val.emailVerified,
                        uid: val.uid
                    },
                    isLogin:true
                })
                localStorage.setItem('user', JSON.stringify({
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
              
            })
        }else if( user != null){
        setLoginCtx(true)
        
        }
    }, [])

    return (
        <LSContext.Provider value={{loginCtx, setLoginCtx}}>
            {props.children}
        </LSContext.Provider>
    )
}

export default LSContextProvider