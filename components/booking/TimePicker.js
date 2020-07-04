import React,{useContext, useState, useEffect} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext'

function TimePicker() {

    const {setMain} = useContext(BookingMainContext)
    const {setBookCtxTime} = setMain

    const [selectTime, setSelectTime] = useState('');

    useEffect(() => {
        if (selectTime) {
            setBookCtxTime(selectTime)
        }
    }, [selectTime])

    return (
        <div className="form-width">
            <div className="">
                <label>Pilih masa</label>
                <select className="form-control form-control-time" name="time" id="time">
                    <option value="5:00 AM" onClick={(e)=>setSelectTime(e.target.value)}>5:00 AM</option>
                    <option value="6:00 AM" onClick={(e)=>setSelectTime(e.target.value)}>6:00 AM</option>
                    <option value="7:00 AM" onClick={(e)=>setSelectTime(e.target.value)}>7:00 AM</option>
                    <option value="8:00 AM" onClick={(e)=>setSelectTime(e.target.value)}>8:00 AM</option>
                    <option value="9:00 AM" onClick={(e)=>setSelectTime(e.target.value)}>9:00 AM</option>
                    <option value="10:00 AM" onClick={(e)=>setSelectTime(e.target.value)}>10:00 AM</option>
                    <option value="11:00 AM" onClick={(e)=>setSelectTime(e.target.value)}>11:00 AM</option>
                    <option value="12:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>12:00 PM</option>
                    <option value="1:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>1:00 PM</option>
                    <option value="2:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>2:00 PM</option>
                    <option value="3:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>3:00 PM</option>
                    <option value="4:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>4:00 PM</option>
                    <option value="5:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>5:00 PM</option>
                    <option value="6:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>6:00 PM</option>
                    <option value="7:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>7:00 PM</option>
                    <option value="8:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>8:00 PM</option>
                    <option value="9:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>9:00 PM</option>
                    <option value="10:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>10:00 PM</option>
                    <option value="11:00 PM" onClick={(e)=>setSelectTime(e.target.value)}>11:00 PM</option>                    
                </select>
            </div>
            <style jsx>{`
                .form-width { max-width: 490px; margin-bottom: 10px;}
                label { font-style: normal;font-weight: normal;font-size: 0.875rem;color: #75848E;}
                .form-control-time {box-shadow: none;-webkit-appearance: none;background-image: url('/images/icon/clock.png');background-repeat: no-repeat;background-position: center right 10px;background-color: #FFF;border: 1px solid #EAEAEA;border-radius: 4px; height: 50px !important; width: 100%;}
            `}</style>
        </div>
    )
}

export default TimePicker
