import React, {useState, useEffect, useContext} from 'react'
import firebase from '../../config/firebaseConfig'
import {BookingMainContext} from '../../context/BookingMainContext'
import SearchBox from 'react-search-box'

function SearchPackages() {

    const {getMain} = useContext(BookingMainContext)
    const {bookCtxNegeri} = getMain

    const [list, setList] = useState([])
    const [vendorList, setVendorList] = useState([])
    const [vendor, setVendor] = useState('')
    const [vendorSearch, setVendorSearch] = useState([])

    useEffect(() => {
        const getVendorAndService = async () =>{
            setVendorList([])
            setViewVendorList(null)
            setVendorSearch([])
            setList([])
            var totalVendor = [];
            var resultService = await firebase.getPackageByState(bookCtxNegeri);
            console.log(resultService)
            // var result1 = await firebase.getVendorUsers(bookCtxNegeri)
            resultService = await resultService.docs
            if (resultService.length >= 1) {
                resultService.map(async x =>{
                    let serv = x.data()
                    setList(x => [...x,serv])
                    let email = serv.email;
                    //check if exist
                    if (!vendorList.some(e => e.email === email)) {
                        //get vendor
                        var result1 = await firebase.getVendorUser(email)
                        result1 = await result1.docs
                        result1.map(x => {
                            let vend = x.data()
                            setVendorList(x => [...x,vend])
                            setVendorSearch(x => [...x,{key:vend.namaSyarikat,value:vend.namaSyarikat}])
                        })
                    }else{

                    }

                })
            }else{
                alert('Maaf tiada dalam rekod kami')
            }
            

        }
        if (serviceName && bookCtxNegeri) {
            getVendorAndService()
        }
        console.log(bookCtxNegeri)
        console.log(serviceName)
    }, [serviceName, bookCtxNegeri])

    return (
        <div>
            
        </div>
    )
}

export default SearchPackages
