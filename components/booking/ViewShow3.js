import React, {useState, useEffect, useContext} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext' 


function viewShow3({data, show, closeData, view}) {

    const {setMain} = useContext(BookingMainContext)
    const {mainCtxFnSelect} = setMain

    const [full, setFull] = useState(false)
    const [touchup, setTouchup] = useState(false)
    const [pax, setPax] = useState(false)
    const [paxQty, setPaxQty] = useState(1000)

    useEffect(() => {
        console.log(data)
    },[data])


    const pilihIniQuantity = () =>{
        let datax = data
        let sd = datax.serviceDetails

        if (pax && paxQty) {
            sd.selectPaxQuantity = paxQty
            sd.selectPaxTotalPrice = paxQty * parseFloat(sd.hargaPerPerson)
        }
        datax.serviceDetails = sd
        mainCtxFnSelect(datax.serviceType, datax )

        show(false)
        closeData(false)
        view(false)
    }


    return (
        <div>
            <div>
                <h3>{data.serviceType}</h3>
                {data.serviceDetails  && <div>
                    <input type="checkbox" checked={pax} onChange={()=>setPax(!pax)} id="pax"   />
                    <label for="pax"> Harga Satu pax - RM {data.serviceDetails.hargaPerPerson} - Sila masukkan quantity </label><br/>
                    {
                        pax == true?
                        <input type="number" value={paxQty} onChange={(e)=>setPaxQty(e.target.value)}/>
                        :
                        <div>
                            <ul>
                                {data.serviceDetails.discount.map((v,i) =>{
                                    return <li key={i}>
                                        Minimum quantity: {v.min} | Discount: {v.discount}%
                                    </li>
                                })}
                            </ul>
                        </div>
                    }
                </div>}
                <div className="button-position">
                    <button className="btn btn-pilih" onClick={()=>pilihIniQuantity()}>Pilih</button>
                </div>
            </div>
            <style jsx>{`
                input[type='checkbox'] { margin-right: 10px;}
                .button-position { text-align: right; margin: 20px auto;}
                .btn-pilih { background-color: #ED795F; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #FFF; height: 50px; width: 160px; background-image:url('/images/icon/arrow-right-white.png'); background-repeat: no-repeat; background-position: center right 10px; background-size: 25px;}
                h3 { font-weight: bold; color: #3E3E3E; font-size: 17px; margin-top: 10px;}
                label {font-weight: normal; color: #3E3E3E; font-size: 14px; margin-top: 10px; }
                li { font-weight: normal; color: #3E3E3E; font-size: 14px;}
                input[type='number'] { height: 50px; border-radius: 4px; background-color: #FFF; border: 1px solid #EAEAEA; padding: .375rem .75rem; width: 100%;}
            `}</style>
        </div>
    )
}

export default viewShow3
