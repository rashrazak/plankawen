import React, {useState, useEffect, useContext} from 'react'
import firebase from '../../config/firebaseConfig'
import {BookingMainContext} from '../../context/BookingMainContext'
import SearchBox from 'react-search-box'

function SearchPackages({serviceName, returnService}) {

    const {getMain} = useContext(BookingMainContext)
    const {bookCtxNegeri} = getMain


    const [harga, setHarga] = useState(true) //true max,min false
    const [age, setAge] = useState(true) //true baru,lama false
    const [list, setList] = useState([])
    const [vendorList, setVendorList] = useState([])
    const [vendor, setVendor] = useState('')
    const [vendorSearch, setVendorSearch] = useState([])
    const [viewAll, setViewAll] = useState(true)
    const [viewVendorList, setViewVendorList] = useState(null)

    useEffect(() => {
        const getVendorAndService = async () =>{
            setVendorList([])
            setViewVendorList(null)
            setVendorSearch([])
            setList([])
            var totalVendor = [];
            var resultService = await firebase.getPackageByState(bookCtxNegeri);
            // var result1 = await firebase.getVendorUsers(bookCtxNegeri)
            resultService = await resultService.docs
            // console.info(resultService)
            if (resultService.length >= 1) {
                resultService.map(async x =>{
                    let serv = x.data()
                    // console.info(serv)
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
        console.info(bookCtxNegeri)
        console.info(serviceName)
        console.log(vendorList)
        console.log(list)
    }, [serviceName, bookCtxNegeri])

    useEffect(() => {
       console.info(list)
    }, [list])

    useEffect(() => {
        if (vendor == '') {
            setViewAll(true)
        }else if(vendor && list && vendorList && !viewAll){

            let vd = vendor
            let l  = list
            let vl = vendorList
            let vend = vl.filter((v,i)=>v.namaSyarikat == vd)
            let result = l.filter((v,i)=>v.email == vend[0].email)
           
            setViewVendorList(result)
        }
    }, [vendor, viewAll])


    function clickServiceToView(data){
        console.info(vendorList)
        console.info(data)
        let vl = vendorList
        let x = vl.filter((v,i)=>data.email == v.email)
        returnService(data, x[0])
    }

    return (
        <div>
            {
                list && list.length >= 1 &&
                <div className="div-result">
                    {
                        list.map((v,i) => {
                            
                            return (
                                <div key={i} className="div-result-item"  onClick={()=>clickServiceToView(v)}>
                                    <img src={v.images.length >= 1 ? v.images[0].urlStorage : ''} />
                                    <div className="result-item-desc">
                                        <p>{v.title}</p>
                                        <p>{bookCtxNegeri}</p>
                                        <p>Harga dari RM <span>{v.totalPrice }</span></p>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            }
        <style jsx>{`
            .form-width { max-width: 790px; width: 100%;}
            .searc-box-div { display: flex; max-width: 490px; width: 100%;}
            .choose-category { display: flex; }
            .btn-seacrh { background-color: #ED795F; border-radius: 4px; height: 40px;}
            .div-search-sort { display: flex; justify-content: space-between; padding-bottom: 20px;}
            .btn-sort { background-color: #FFF; border: 1px solid #EAEAEA;border-radius: 4px; width: 140px; height: 40px; font-style: normal;font-weight: normal;font-size: 0.75rem;color: #515D65; text-align: left; background-image: url('/images/icon/sort.png'); background-repeat: no-repeat; background-position: center right 10px; }
            .div-result { display: flex; flex-wrap: wrap; justify-content: space-between;}
            .div-result-item { max-width: 250px; margin-bottom: 41px; cursor: pointer;}
            .div-result-item > img { width: 100%; height: 135px; border-radius: 8px; object-fit: cover;}
            .result-item-desc { padding: 10px 0 0 10px;}
            .result-item-desc > p:first-child { color: #2B2B2B;}
            .result-item-desc > p { font-style: normal; font-weight: normal; font-size: 0.875rem; color: #75848E; margin: 0; line-height: 18px;}
            .result-item-desc > p > span { font-weight:bold; color: #3E3E3E;}
            @media screen and ( max-width: 480px) {
                .div-search-sort { flex-wrap: wrap; justify-content: flex-start;}
                .searc-box-div { margin-bottom: 10px;}
                .div-result-item { flex 0 0 48%;}
                
            }
        `}</style>
        </div>
    )
}

export default SearchPackages
