import React,{createContext, useState, useEffect} from 'react'
export const BookingMainContext = createContext();
import firebase from '../config/firebaseConfig'
import * as ls from 'local-storage'
import Router from 'next/router'
import moment from 'moment'
// import { add, total } from 'cart-localstorage'

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

    const [mount, setMount] = useState(false)
    const [cartLS, setCartLS] = useState(null)

    useEffect(() => {
       if (!mount) {
           setMount(true)
       }else{
           setCartLS(window.cartLS)
       }
    }, [mount])

    useEffect(() => {

        async function fetchData() {

            console.log(bookCtxDate)

            
            let date = await moment(bookCtxDate,'DD-MM-YYYY').format( "DD/MM/YYYY") || null

            console.log(date)

            if (bookCtxType && bookCtxNegeri && date && bookCtxTime) {

                console.log('ehhe')

                let params = {
                    type: bookCtxType,
                    negeri: bookCtxNegeri,
                    date: moment(date,'DD-MM-YYYY').format( "DD/MM/YYYY"),
                    time: bookCtxTime
                }
    
                ls.set('booking-main',params)
    
            }else if(ls('booking-main')){

                console.log('haha')
    
                let param = ls.get('booking-main')
                console.log(param.time)
                setBookCtxDate(param?.date)
                setBookCtxTime(param?.time)
                setBookCtxNegeri(param?.negeri)
                setBookCtxType(param?.type)
            }
        }

        fetchData();
    }, [bookCtxType, bookCtxNegeri, bookCtxDate, bookCtxTime])

    const getId = (y = 0) =>{
        let list = cartLS.list()
        let id = list?.length ? list.length + 1 : 1
        id += y
        if (list.some((v)=>v.id == id)) {
           id = getId(10)
        }
        return id
        
    }

    const mainCtxFnSelect = (serviceType, serviceData) =>{
        let id = getId()
        if (serviceType == 'Makeup') {
            let {selectFull, selectFullPrice, selectTouchup, selectTouchupPrice} = serviceData.serviceDetails
            let price = 0
            price = selectFullPrice + selectTouchupPrice 
            console.log({id,...serviceData,price})
            cartLS.add({id,...serviceData,price})

        }else if (serviceType =="KadBanner") {
            let {selectKad, selectKadTotalDiscount, selectBanner, selectBannerArray} = serviceData.serviceDetails
            let priceKad = 0
            priceKad = selectKad ? parseInt(selectKadTotalDiscount) : 0
            let priceBanner = 0 
            priceBanner = selectBanner ? selectBannerArray.reduce((a, b)=>a+parseInt(b.harga),0) : 0
            
            let price = priceBanner + priceKad
            
            cartLS.add({id,...serviceData,price})
        
        }else if (serviceType == 'Hantaran' || serviceType == 'Caterer' || serviceType == 'DoorGift'){
            let {selectPaxTotalPrice} = serviceData.serviceDetails
            cartLS.add({id,...serviceData,price:parseInt(selectPaxTotalPrice)})
        }else{
            let {hargaDiscount, harga}= serviceData.serviceDetails
            cartLS.add({id,...serviceData,price:hargaDiscount? parseInt(hargaDiscount): parseInt(harga)})
        }
    }

    const mainCtxFnDelete = (id) =>{
        cartLS.remove(id)

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
            dateCreated: new Date(),
            status:'pending'
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