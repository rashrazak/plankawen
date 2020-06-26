import React, {useState} from 'react'
import DatePickerReact from 'react-datepicker'



function DatePicker() {

    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <div className="form-width">
            <label>Pilih tarikh</label>
            <div>
                <DatePickerReact
                    showPopperArrow={false}
                    selected={selectDate}
                    onChange={date => setSelectDate(date)}
                    className="form-control-date"
                />
            </div>
            <style jsx>{`
                .form-width { max-width: 490px; margin-bottom: 10px;}
                label { font-style: normal;font-weight: normal;font-size: 0.875rem;color: #75848E;}
                .react-datepicker-wrapper { width: 100%;}
            `}</style>
        </div>
    )
}

export default DatePicker
