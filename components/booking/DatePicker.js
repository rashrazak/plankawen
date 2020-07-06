import React,{useContext, useState, useEffect} from 'react'
import DatePickerReact from 'react-datepicker'
import {BookingMainContext} from '../../context/BookingMainContext'
import * as ls from 'local-storage'
import parseISO from 'date-fns/parseISO'
import moment from 'moment'


function DatePicker() {

    const {setMain, getMain} = useContext(BookingMainContext)
    const {setBookCtxDate} = setMain
    const {bookCtxDate} = getMain

    const [selectDate, setSelectDate] = useState('');

    
    useEffect(() => {
        
        if (selectDate) {
            if (selectDate != new Date()) {
                let y = moment(selectDate).format('DD/MM/YYYY')
                setBookCtxDate(y)
            }
        }else if (bookCtxDate){
            let x = moment(bookCtxDate).toDate()
            setSelectDate(x)
        }else{
            setSelectDate(new Date())
        }
        console.log(selectDate)
        
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
              return x
           }
        }
    }


    return (
        <div className="form-width">
            <label>Pilih tarikh</label>
            <div>
                <DatePickerReact
                    showPopperArrow={true}
                    selected={selectDate}
                    dateFormat={'dd/MM/yyyy'}
                    onChange={date => setSelectDate(date)}
                    className="form-control-date"
                    excludeDates={first30Days()}
                    minDate={new Date()}
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
