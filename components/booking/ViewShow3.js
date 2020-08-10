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
                        <input type="number" value={paxQty} onChange={(e)=>setPax(e.target.value)}/>
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
        </div>
    )
}

export default viewShow3
