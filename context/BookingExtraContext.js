import React,{createContext, useState, useEffect} from 'react'
export const BookingExtraContext = createContext();
const BookingExtraContextProvider = (props) => {
    
    const [bookingExtra, setBookingExtra] = useState([])
    const [bookingCreated, setBookingCreated] = useState(false)

    useEffect(() => {
        if (bookingCreated) {
            //create booking here
        }
    }, [bookingCreated])

    return (
        <BookingExtraContext.Provider value={{}}>
            {props.children}
        </BookingExtraContext.Provider>
    )
}

export default BookingExtraContextProvider