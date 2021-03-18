import React,{useContext, useState, useEffect} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext'
import * as ls from 'local-storage'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment'
import MomentLocaleUtils, {
    formatDate,
    parseDate
  } from "react-day-picker/moment";


function DatePicker2() {

    const {setMain, getMain} = useContext(BookingMainContext)
    const {setBookCtxDate} = setMain
    const {bookCtxDate} = getMain

    const [selectDate, setSelectDate] = useState('');

    
    useEffect(() => {

        async function fetchData() {

            let date = await moment(bookCtxDate,'DD-MM-YYYY').format( "DD/MM/YYYY") || ''

            if (selectDate) {

                if (selectDate != new Date()) {
                
                    let y = moment(selectDate,'DD-MM-YYYY').format( "DD/MM/YYYY")
                    setBookCtxDate(y)
    
                }

            } else if ( bookCtxDate) {

                // setBookCtxDate( moment(new Date()).format('DD/MM/YYYY') )
                setSelectDate(date)
            }
        }

      fetchData();
      return () => {
        console.log("This will be logged on unmount");
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
              return x
           }
        }
    }


    return (
        <div className="form-width">
            <label>Pilih tarikh</label>
            <div>
                {/* <DatePickerReact
                    showPopperArrow={true}
                    selected={selectDate}
                    dateFormat={'dd/MM/yyyy'}
                    onChange={date => setSelectDate(date)}
                    className="form-control-date"
                    excludeDates={first30Days()}
                    minDate={new Date()}
                    placeholderText="Pilih tarikh sebulan awal"
                /> */}
                <DayPickerInput 
                    value={selectDate}
                    format="DD/MM/YYYY"
                    onDayChange={(day)=>setSelectDate(day)}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    placeholder={'Pilih tarikh'}
                    inputProps={{ className: `form-control-date` }}
                />
            </div>
            <style jsx>{`
                .form-width { max-width: 490px; margin-bottom: 10px;}
                label { font-style: normal;font-weight: normal;font-size: 0.875rem;color: #75848E;}
                .react-datepicker-wrapper { width: 100%;}
                .DayPickerInput { width: 100%; !important;}
                .form-control-date { box-shadow: none;-webkit-appearance: none;background-image: url('/images/icon/calendar.png');background-repeat: no-repeat;background-position: center right 10px;background-color: #FFF;border: 1px solid #EAEAEA;border-radius: 4px; height: 50px !Important; width: 100%;}
            `}</style>
        </div>
    )
}

export default DatePicker2
