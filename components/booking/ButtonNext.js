import React,{useContext, useState, useEffect} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext'
import Router from 'next/router'

function ButtonNext() {

    const {getMain} = useContext(BookingMainContext)
    const {bookCtxType} = getMain

    const [switching, setSwitching] = useState(false);

    useEffect(() => {
        if (switching) {
            if (bookCtxType === 'venue-services') {
                Router.push('/booking/venue-services')
            }else if (bookCtxType === 'package-services'){
                Router.push('/booking/package-services')
            }else if (bookCtxType === 'extra-services'){
                Router.push('/booking/extra-services')
            }

            setSwitching(false);

        }
    }, [switching])
    return (
        <div>
            <button type="button" className="btn btn-next" onClick={()=>setSwitching(true)}>Next</button>
            <style jsx>{`
                div { position: absolute; bottom: 10px; right: 30px;}
                .btn-next { background-color: #ED795F; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #FFF; height: 50px; width: 160px; background-image:url('/images/icon/arrow-right-white.png'); background-repeat: no-repeat; background-position: center right 10px; background-size: 25px;}
                @media screen and ( max-width: 480px) {
                    div { position: relative; text-align: right; margin: 30px 0; right: 0; top: 0;}
                }
            `}</style>
        </div>
    )
}

export default ButtonNext
