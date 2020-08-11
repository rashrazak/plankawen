import React, {useState,useContext, useEffect} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext'
import * as ls from 'local-storage'
import Router, {useRouter} from 'next/router'

function SideBar({step}) {

    const {getMain, setMain} = useContext(BookingMainContext)
    const {bookCtxNegeri,bookCtxDate,bookCtxTime,bookCtxServiceList} = getMain
    const {mainCtxFnDelete, setBookCtxTotalPrice} = setMain

    const router = useRouter()

    const [serviceList, setServiceList] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (bookCtxServiceList) {
            console.log(bookCtxServiceList)
            getPrice(bookCtxServiceList)
        }
        
    }, [bookCtxServiceList])

    useEffect(() => {
        if (serviceList) {
            console.log(serviceList)
        }
    }, [setServiceList])

    function getPrice(param){
        let price = 0

        if (param.length >=1) {
            param.map((v,i)=>{

                let data = v

                if (v.serviceType == 'Makeup') {
                    price = price + parseFloat(v.serviceDetails.selectFullPrice)

                    price = price + parseFloat(v.serviceDetails.selectTouchupPrice)
                    
                }else if (v.serviceType == 'KadBanner'){

                    price = price + parseFloat(v.serviceDetails.selectKadTotalPrice)

                    if (v.serviceDetails.selectBanner) {
                        v.serviceDetails.selectBannerArray.map((v, i) => {
                            price = price + parseFloat(v.harga)
                        })
                    }

                }else if (v.serviceType == 'Hantaran' || v.serviceType == 'Caterer' || v.serviceType == 'DoorGift'){
                    price = price + parseFloat(v.serviceDetails.selectPaxTotalPrice)
                }else if (v.serviceType == 'Photographer' || v.serviceType == 'Videographer' || v.serviceType == 'WeddingDress' || v.serviceType == 'Pelamin' || v.serviceType == 'Others'){
                    let w = data.serviceDetails.hargaDiscount ? data.serviceDetails.hargaDiscount : data.serviceDetails.harga ;
                    w = parseFloat(w)
                    price = price + w
                }
                
                
                
                
                if (i == param.length - 1) {
                    setTotalPrice(price)
                    setBookCtxTotalPrice(price)
                }
            })
        }
    }

    console.log(router.pathname)

    function openInNewTab(){
        // window.open('/review', '_blank')
    }

    const handleDelete = (index, isTrue) =>{
            mainCtxFnDelete(index)
            if (isTrue) {
                Router.push('/booking/venue-services')
            }
    }

    return (
        <div className="width">
            <div className="container-sidebar">
                <div className="">
                   <div className="div-langkah">
                        <p>Langkah</p>
                        <h4><span>{step}</span>/05</h4>
                   </div>
                   {
                       router.pathname !== '/booking/thank-you' ?
                       <React.Fragment>
                        <div className="div-review-1">
                            <label>Pilihan negeri</label>
                            {
                                bookCtxNegeri ?
                                <p>{bookCtxNegeri}</p>
                                :
                                <p>-</p>
                            }
                            <label>Pilihan tarikh</label>
                            {
                                bookCtxDate ?
                                <p>{bookCtxDate}</p>
                                :
                                <p>-</p>
                            }
                            
                            <label>Pilihan masa</label>
                            {
                                bookCtxTime ?
                                <p>{bookCtxTime}</p>
                                :
                                <p>-</p>
                            }

                            {
                                bookCtxServiceList &&  bookCtxServiceList.length >= 1?
                                    <>
                                        <label>Pilihan Servis</label>
                                        {
                                            bookCtxServiceList.length >= 1 && bookCtxServiceList.map((v,i)=>{
                                                
                                                if (v.serviceType == 'Venue') {
                                                    return(
                                                        <div key={i} className="review-service">
                                                            <label>Pilihan Venue</label>
                                                            <p>{v.serviceName}</p>
                                                            <p className="delete-icon" onClick={()=>handleDelete(i , true)}>x</p>
                                                            <p>{v.serviceDetails.hargaDiscount ? `RM ${v.serviceDetails.hargaDiscount}` : `RM ${v.serviceDetails.harga}`  }</p>
                                                        </div>

                                                    )
                                                }else if (v.serviceType == 'KadBanner') {
                                                    return(
                                                        <div key={i} className="review-service">
                                                            <p>{v.serviceType}</p>
                                                            <p className="delete-icon" onClick={()=>handleDelete(i)}>x</p>
                                                            <label>Kad</label>
                                                            <p>Qty: {v.serviceDetails.selectKadQuantity}</p>
                                                            <p>Price: RM {v.serviceDetails.selectKadTotalPrice}</p>
                                                            {
                                                                v.serviceDetails.selectBanner == true ?
                                                                <div>
                                                                <label>Banner</label>
                                                                {
                                                                    v.serviceDetails.selectBannerArray.map((val,i)=>{
                                                                        return (
                                                                            <p key={i}>Price: RM {val.harga}</p>
                                                                        )
                                                                    })
                                                                }
                                                                </div>

                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                    )
                                                } else if (v.serviceType == 'Makeup'){
                                                    return(
                                                        <div key={i} className="review-service">
                                                            <p>{v.serviceType}</p>
                                                            <p className="delete-icon" onClick={()=>handleDelete(i)}>x</p>
                                                            <label>{v.serviceType}</label>
                                                            {
                                                                v.serviceDetails.selectTouchup == true ?
                                                                <div>
                                                                    <p>Touchup: RM {v.serviceDetails.selectTouchupPrice}</p>
                                                                </div>
                                                                :
                                                                ''
                                                            }

                                                            {
                                                                v.serviceDetails.selectFull == true ?
                                                                <div>
                                                                    <p>Full: RM {v.serviceDetails.selectFullPrice}</p>
                                                                </div>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                    )
                                                }else if (v.serviceType == 'Hantaran' || v.serviceType == 'Caterer' || v.serviceType == 'DoorGift') {
                                                    return(
                                                        <div key={i} className="review-service">
                                                            <p>{v.serviceType}</p>
                                                            <p className="delete-icon" onClick={()=>handleDelete(i)}>x</p>
                                                            <label>{v.serviceType}</label>
                                                            <p>Qty: {v.serviceDetails.selectPaxQuantity}</p>
                                                            <p>Price: RM {v.serviceDetails.selectPaxTotalPrice}</p>
                                                        </div>
                                                    )
                                                }else if (v.serviceType == 'Photographer' || v.serviceType == 'Videographer' || v.serviceType == 'WeddingDress' || v.serviceType == 'Pelamin' || v.serviceType == 'Others'){
                                                    return(
                                                        <div key={i} className="review-service">
                                                            <p>{v.serviceType}</p>
                                                            <p className="delete-icon" onClick={()=>handleDelete(i)}>x</p>
                                                            <p>Price: RM {v.serviceDetails.hargaDiscount ? `RM ${v.serviceDetails.hargaDiscount}` : `RM ${v.serviceDetails.harga}`  }</p>
                                                        </div>
                                                    )
                                                }
                                                
                                            })
                                        }
                                    </>
                                :'-'
                            }

                        </div>
                        <div className="div-total">
                                {/* <p>Subtotal <span>MYR 0.00</span></p> */}
                                {/* <p>Discount <span>MYR 0.00</span></p> */}
                                <p>Total <span>MYR {totalPrice}</span></p>
                        </div>             
                        <div className="">
                            <button type="button" className="btn btn-review" onClick={()=> openInNewTab()}>Review</button>
                        </div>              

                       </React.Fragment>
                       :
                       ''

                   }
                </div>
                
            </div>
            <style jsx>{`
                .container-sidebar { background-color: #F5F7F8; width: 300px; height: calc(100vh - 57px); padding: 30px; margin-left: auto;}
                .div-langkah { text-align: right;}
                .div-langkah > p { font-style: normal;font-weight: normal;font-size: 1rem;color: #9B9B9B; margin: 0;}
                .div-langkah > h4 { margin: 0; font-style: normal;font-weight: normal;font-size: 2rem;color: #9B9B9B;}
                .div-langkah > h4 > span { color: #ED795F;}
                .div-total > p { font-style: normal; font-weight: normal;font-size: 0.875rem;color: #75848E; margin: 0;}
                .div-total > p > span { color: #2B2B2B; float: right;}
                .div-total > p:last-child > span {font-weight: 600;}
                .btn-review { background-color: #ED795F;mborder: 2px solid #ED795F;border-radius: 8px; font-style: normal;font-weight: 600;font-size: 1rem;text-align: center;color: #FFF; height: 50px; width: 100%; margin-top: 31px;}
                label { font-style: normal; font-weight: normal;font-size: 0.75rem; color: #75848E; margin: 0;}
                .div-review-1 > p { font-style: normal; font-weight: normal;font-size: 0.875rem;color: #2B2B2B; margin-bottom: 5px;}
                .review-service { position: relative; margin-bottom: 10px;}
                .delete-icon { position: absolute; left: -15px; top: 0; cursor: pointer; color: red;}
                p { font-style: normal; font-weight: normal;font-size: 0.875rem;color: #2B2B2B; margin: 0;}
                @media screen and ( max-width: 480px) {
                    .container-sidebar { height: 100%; width: 100%; padding: 20px;}
                    .width { width: 100%;}
                }
            `}</style>
        </div>
    )
}

export default SideBar
