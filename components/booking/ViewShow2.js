import React, {useState, useEffect, useContext} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext' 


function viewShow2({data, show, closeData, view}) {

    const {setMain} = useContext(BookingMainContext)
    const {mainCtxFnSelect} = setMain

    const [full, setFull] = useState(false)
    const [touchup, setTouchup] = useState(false)
    const [kad, setKad] = useState(false)
    const [kadQty, setKadQty] = useState(1000)

    useEffect(() => {
        console.log(data)
    },[data])

    const pilihIniMakeup = () =>{
        if (!full && !touchup) {
            alert('Please tick the Makeup')
        }else{
            let newData = data.serviceDetails
            if (full) {
                newData.selectFull = true
                newData.selectFullPrice = newData.serviceDetails.discountFull ? newData.serviceDetails.hargaDiscountFull : data.serviceDetails.hargaFull
            }else if (!full){
                newData.selectFull = false
                newData.selectFullPrice = 0
            }

            if (touchup) {
                newData.selectTouchup = true
                newData.selectTouchupPrice = newData.serviceDetails.discountTouchup ? newData.serviceDetails.hargaDiscountTouchup : data.serviceDetails.hargaTouchup
            }else if (!touchup){
                newData.selectTouchup = false
                newData.selectTouchupPrice = 0
            }

            mainCtxFnSelect( 'Makeup', newData )

            show(false)
            closeData(false)
            view(false)
        }
    }

    const pilihIniKadBanner = () =>{
        
        show(false)
        closeData(false)
        view(false)
    }



    return (
        <div>
            {
                data.serviceType === 'Makeup'?
                <div>
                    <h3>Makeup</h3>
                    {data.serviceDetails.hargaTouchup != 0 && <div>
                        <input type="checkbox" checked={touchup} onChange={()=>setTouchup(!touchup)} id="makeup1"   />
                        <label for="makeup1"> Harga Touchup Makeup - RM {data.serviceDetails.hargaTouchup} 
                            {data.serviceDetails.discountTouchup?` ( Diskaun ${data.serviceDetails.discountTouchup}% -> RM ${(data.serviceDetails.hargaDiscountTouchup)})`:''}</label><br/>
                    </div>}
                    
                    {data.serviceDetails.hargaFull != 0 && <div>
                        <input type="checkbox" checked={full} onChange={()=>setFull(!full)} id="makeup2"  />
                        <label for="makeup2"> Harga Full Makeup - RM {data.serviceDetails.hargaFull}
                             {data.serviceDetails.discountFull?` ( Diskaun ${data.serviceDetails.discountFull}% -> RM ${(data.serviceDetails.hargaDiscountFull)})`:''}</label><br/>
                    </div>}

                    <div className="button-position">
                        <button className="btn btn-pilih" onClick={()=>pilihIniMakeup()}>Pilih</button>
                    </div>


                </div>
                : data.serviceType === 'KadBanner' ?
                <div>
                    <h3>Kad</h3>
                    {data.serviceDetails.hargaPerPerson != 0 && <div>
                        <input type="checkbox" checked={kad} onChange={()=>setKad(!kad)} id="kad"   />
                        <label for="kad"> Harga Satu Kad - RM {data.serviceDetails.hargaPerPerson} - Sila masukkan quantity </label><br/>
                        {
                            kad == true?
                            <input type="number" value={kadQty} onChange={(e)=>setKad(e.target.value)}/>
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
                    {data.serviceDetails.banner == true ?
                    <div>
                        <h3>Banner</h3>
                        {data.serviceDetails.bannerDesc.bannerSize.map((v,i)=>{
                            return (
                                <div key={i}>
                                    <input type="checkbox" id={`${i}banner`}   />
                                    <label for={`${i}banner`}> Harga Banner  RM {v.harga} - {v.size} </label><br/>
                                </div>
                            )
                        })}
                    </div>
                    :
                    ''
                    

                    }
                    <div className="button-position">
                        <button className="btn btn-pilih" onClick={()=>pilihIniKadBanner()}>Pilih</button>
                    </div>

                </div>
                :''
            }
            
        </div>
    )
}

export default viewShow2
