import React,{useContext, useState} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext'

function SelectState() {
    const {setMain} = useContext(BookingMainContext)
    const {setBookCtxNegeri} = setMain
    function getState(v){
        setBookCtxNegeri(v)
    }
    return (
        <div className="form-width">
            <label>Pilihan negeri</label>
            <select className="form-control form-control-select-state">
                <option value="Johor" onClick={(e)=>getState(e.target.value)}>Johor</option>
                <option value="Kedah" onClick={(e)=>getState(e.target.value)}>Kedah</option>
                <option value="Kelantan" onClick={(e)=>getState(e.target.value)}>Kelantan</option>
                <option value="Kuala Lumpur" onClick={(e)=>getState(e.target.value)}>Kuala Lumpur</option>
                <option value="Labuan" onClick={(e)=>getState(e.target.value)}>Labuan</option>
                <option value="Malacca" onClick={(e)=>getState(e.target.value)}>Malacca</option>
                <option value="Negeri Sembilan" onClick={(e)=>getState(e.target.value)}>Negeri Sembilan</option>
                <option value="Pahang" onClick={(e)=>getState(e.target.value)}>Pahang</option>
                <option value="Perak" onClick={(e)=>getState(e.target.value)}>Perak</option>
                <option value="Perlis" onClick={(e)=>getState(e.target.value)}>Perlis</option>
                <option value="Penang" onClick={(e)=>getState(e.target.value)}>Penang</option>
                <option value="Sabah" onClick={(e)=>getState(e.target.value)}>Sabah</option>
                <option value="Sarawak" onClick={(e)=>getState(e.target.value)}>Sarawak</option>
                <option value="Selangor" onClick={(e)=>getState(e.target.value)}>Selangor</option>
                <option value="Terengganu" onClick={(e)=>getState(e.target.value)}>Terengganu</option>
            </select>
        <style jsx>{`
            .form-width { max-width: 490px; margin-bottom: 10px;}
            label { font-style: normal;font-weight: normal;font-size: 0.875rem;color: #75848E;}
            .form-control-select-state { box-shadow: none;-webkit-appearance: none;background-image: url('/images/icon/chevron-down.png');background-repeat: no-repeat;background-position: center right 10px;background-color: #FFF;border: 1px solid #EAEAEA;border-radius: 4px; height: 50px !Important;}
        `}</style>
        </div>
    )
}

export default SelectState
