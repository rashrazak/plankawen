import React from 'react'
import SelectState from '../../components/booking/SelectState'
import DatePicker from '../../components/booking/DatePicker'
import TimePicker from '../../components/booking/TimePicker'

function MaklumatTempahan() {
    return (
        <div className="form-width">
            <div className="div-maklumat">
                <h2>Maklumat tempahan</h2>
                <SelectState/>
                <DatePicker/>
                <TimePicker/>
            </div>
        <style jsx>{`
            .form-width { max-width: 490px; margin: auto; margin-bottom: 20px; }
            h2 { font-style: normal; font-weight: normal; font-size: 1rem; color: #2B2B2B;}
            .div-maklumat { background-color: #FFF; box-shadow: 0px 6px 15px rgba(117, 132, 142, 0.3); padding: 20px;}
        `}</style>
        </div>
    )
}

export default MaklumatTempahan
