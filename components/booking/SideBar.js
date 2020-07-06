import React, {useState,useContext, useEffect} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext'
import * as ls from 'local-storage'
import Router from 'next/router'

function SideBar({step}) {

    const {getMain} = useContext(BookingMainContext)
    const {bookCtxNegeri,bookCtxDate,bookCtxTime} = getMain

    const [allService, setAllService] = useState(null)
    
    const [serviceList, setServiceList] = useState(null)
    const [venue, setVenue] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)

    // useEffect(() => {
    //     if (!allService && ls('service-list')) {
    //         getPrice(ls.get('service-list'))
    //         getVenue(ls.get('service-list'))
    //         getExtraService(ls.get('service-list'))
    //         setAllService(ls.get('service-list'))
    //     }else if(allService !== ls.get('service-list')){
    //         // setAllService(null)
    //     }
        
    // }, [allService])

    function getPrice(param){
        let price = 0

        if (param.length >=1) {
            param.map((v,i)=>{
                let x = Object.keys(v)
                x = x[0]
                let data = v[x]
                let w = data.serviceDetails.hargaDiscount ? data.serviceDetails.hargaDiscount : data.serviceDetails.harga ;
                w = parseInt(w)
                price = price + w
                
                if (i == param.length - 1) {
                    setTotalPrice(price)
                }
            
            })
        }

        
    }

    function getVenue(param){
        param.map((v,i)=>{
            let x = Object.keys(v)
            x = x[0]
            let data = v[x]

            if (x =='Venue') {
                setVenue(data)
            }
        })
    }

    function getExtraService(param){
        let arr = []

        param.map((v,i)=>{
            let x = Object.keys(v)
            x = x[0]
            let data = v[x]

            if (x !='Venue') {
                arr = [...arr,data]
            }

            if (i == param.length - 1) {
                if (data.length >= 1) {
                    setServiceList(arr)
                }
            }
        })
    }

    function openInNewTab(){
        window.open('/review', '_blank')
    }

    return (
        <div className="width">
            <div className="container-sidebar">
                <div className="">
                   <div className="div-langkah">
                        <p>Langkah</p>
                        <h4><span>{step}</span>/05</h4>
                   </div>
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

                        venue ? 
                            <div>
                                <label>Pilih Venue</label>
                                <p>{venue.serviceName}</p>
                                <p>{venue.serviceDetails.hargaDiscount ? `RM ${venue.serviceDetails.hargaDiscount}` : `RM ${venue.serviceDetails.harga}`  }</p>
                            </div>

                        :''
                       }

                       {
                        serviceList ?
                            <>
                                <label>Servis tambahan</label>
                                {
                                    serviceList.map((v,i)=>{
                                        let x = Object.keys(v)
                                        x = x[0]
                                        let data = v[x]
                                        if (x != 'Venue') {
                                            return(
                                                <div key={i}>
                                                    <p>{data.serviceType}</p>
                                                    <p>{data.serviceDetails.hargaDiscount ? `RM ${data.serviceDetails.hargaDiscount}` : `RM ${data.serviceDetails.harga}`  }</p>
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
                </div>
                <div className="">
                    <button type="button" className="btn btn-review" onClick={()=> openInNewTab()}>Review</button>
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
                @media screen and ( max-width: 480px) {
                    .container-sidebar { height: 100%; width: 100%; padding: 20px;}
                    .width { width: 100%;}
                }
            `}</style>
        </div>
    )
}

export default SideBar
