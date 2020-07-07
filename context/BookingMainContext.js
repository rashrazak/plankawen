import React,{createContext, useState, useEffect} from 'react'
export const BookingMainContext = createContext();
import firebase from '../config/firebaseConfig'
import * as ls from 'local-storage'
import Router from 'next/router'
const BookingMainContextProvider = (props) => {

    const [bookCtxType, setBookCtxType] = useState('')
    const [bookCtxNegeri, setBookCtxNegeri] = useState('')
    const [bookCtxDate, setBookCtxDate] = useState('')
    const [bookCtxTime, setBookCtxTime] = useState('')

    const [bookCtxName, setBookCtxName] = useState('')
    const [bookCtxEmail, setBookCtxEmail] = useState('')
    const [bookCtxPhone, setBookCtxPhone] = useState('')
    const [bookCtxTotalPrice, setBookCtxTotalPrice] = useState(0)

    const [bookCtxServiceList, setBookCtxServiceList] = useState(null)

    useEffect(() => {
        if (!bookCtxServiceList) {
            setBookCtxServiceList(ls.get('service-list'))
        }
    },[bookCtxServiceList])

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
        data = [...data, serviceData]

        ls.set('service-list', data)
        setBookCtxServiceList(data)
    }

    const mainCtxFnDelete = (index) =>{
        let im = bookCtxServiceList;
        im.splice(index, 1);
        setBookCtxServiceList([...im])
        ls.set('service-list', im)

    }

    const mainCtxFnSubmit = async ()  =>{
        //do validation
        let user = ls.get('booking-main')
        let params = {
            type:user.type,
            date:user.date,
            negeri:user.negeri,
            time:user.time,
            name:bookCtxName,
            email:bookCtxEmail,
            phone:bookCtxPhone,
            services:bookCtxServiceList,
            dateCreated: new Date()
        }

        let x = await firebase.createBooking(`book-${user.type}`, params)
        let id = x.id

        params.id = id
        params.dateUpdated = new Date()

        await firebase.updateBooking(`book-${user.type}`,params, id)
        ls.remove('service-list')
        Router.push('/booking/thank-you')
    }

    return (
        <BookingMainContext.Provider value={{getMain:{bookCtxType,bookCtxNegeri,bookCtxDate,bookCtxTime, bookCtxName, bookCtxEmail, bookCtxPhone, bookCtxServiceList},
        setMain:{setBookCtxType,setBookCtxNegeri,setBookCtxDate,setBookCtxTime,mainCtxFnSelect, setBookCtxName, setBookCtxEmail, setBookCtxPhone, mainCtxFnDelete, setBookCtxTotalPrice, mainCtxFnSubmit}}}>
            {props.children}
        </BookingMainContext.Provider>
    )
}

export default BookingMainContextProvider