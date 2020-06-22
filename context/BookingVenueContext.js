import React,{createContext, useState, useEffect} from 'react'
export const BookingVenueContext = createContext();
import firebase from '../config/firebaseConfig'
const BookingVenueContextProvider = (props) => {
    
    const [bookingVenue, setBookingVenue] = useState([])
    const [bookingCreated, setBookingCreated] = useState(false)

    useEffect(() => {
        if (bookingCreated) {
            //create booking here
        }
    }, [bookingCreated])

    return (
        <BookingVenueContext.Provider value={{}}>
            {props.children}
        </BookingVenueContext.Provider>
    )
}

export default BookingVenueContextProvider