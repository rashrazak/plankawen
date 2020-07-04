import React,{useContext, useState, useEffect} from 'react'
import DatePickerReact from 'react-datepicker'
import {BookingMainContext} from '../../context/BookingMainContext'


function DatePicker() {

    const {setMain} = useContext(BookingMainContext)
    const {setBookCtxDate} = setMain

    const [selectDate, setSelectDate] = useState('');

    
    useEffect(() => {
        if (selectDate != new Date()) {
            setBookCtxDate(selectDate)
        }
    }, [selectDate])

    
    const first30Days = () => {

        function subDays(index){
            let today = new Date()
            return today.setDate(today.getDate() + index)
        } 
        let x = [new Date(),subDays(1)]
        for (let index = 0; index < 30; index++) {
           if (index != 0 && index != 1) {
               x = [...x,subDays(index)]
           }

           if (index == 29) {
               console.log(x)
              return x
           }
        }
    }


    return (
        <div className="form-width">
            <label>Pilih tarikh</label>
            <div>
                <DatePickerReact
                    showPopperArrow={false}
                    selected={selectDate}
                    onChange={date => setSelectDate(date)}
                    className="form-control-date"
                    excludeDates={first30Days()}
                    placeholderText="Pilih tarikh sebulan awal"
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
