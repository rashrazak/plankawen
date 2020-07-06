import React,{createContext, useState, useEffect} from 'react'
export const BookingMainContext = createContext();
import firebase from '../config/firebaseConfig'
import * as ls from 'local-storage'
const BookingMainContextProvider = (props) => {

    const [bookCtxType, setBookCtxType] = useState('')
    const [bookCtxNegeri, setBookCtxNegeri] = useState('')
    const [bookCtxDate, setBookCtxDate] = useState('')
    const [bookCtxTime, setBookCtxTime] = useState('')

    const [bookCtxName, setBookCtxName] = useState('')
    const [bookCtxEmail, setBookCtxEmail] = useState('')
    const [bookCtxPhone, setBookCtxPhone] = useState('')

    useEffect(() => {
        if (bookCtxType && bookCtxNegeri && bookCtxDate && bookCtxTime) {

            let params = {
                type: bookCtxType,
                negeri: bookCtxNegeri,
                date: bookCtxDate,
                time: bookCtxTime
            }

            ls.set('booking-main',params)
        }else if(ls('booking-main')){
            let param = ls.get('booking-main')
            setBookCtxDate(param.date)
            setBookCtxTime(param.time)
            setBookCtxNegeri(param.negeri)
            setBookCtxType(param.type)
        }
    }, [bookCtxType, bookCtxNegeri, bookCtxDate, bookCtxTime])

    const mainCtxFnSelect = (serviceType, serviceData) =>{

        var data = [];
        if (ls('service-list')) {
            data = ls.get('service-list')
        }
        data = [...data, {[serviceType]:serviceData}]

        ls.set('service-list', data)
    }

    return (
        <BookingMainContext.Provider value={{getMain:{bookCtxType,bookCtxNegeri,bookCtxDate,bookCtxTime, bookCtxName, bookCtxEmail, bookCtxPhone},
        setMain:{setBookCtxType,setBookCtxNegeri,setBookCtxDate,setBookCtxTime,mainCtxFnSelect, setBookCtxName, setBookCtxEmail, setBookCtxPhone}}}>
            {props.children}
        </BookingMainContext.Provider>
    )
}

export default BookingMainContextProvider