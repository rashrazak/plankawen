import React, {useState, useEffect, useContext} from 'react'
import firebase from '../../config/firebaseConfig'
import {LSContext} from '../../context/LSContext'
import SearchBox from 'react-search-box'


function SearchExtraService({serviceName, returnService}) {

    const {negeri} = useContext(LSContext)

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
            var resultService = await firebase.getServiceByState(negeri,serviceName);
            // var result1 = await firebase.getVendorUsers(negeri)
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
        if (serviceName && negeri) {
            getVendorAndService()
        }

    }, [serviceName, negeri])

    useEffect(() => {
        //sort for price and age
        if (list.length >= 1) {
            if (harga == false) {
                let l = list
                let l1 = l.sort((a,b) =>a.serviceDetails.harga - b.serviceDetails.harga)
                console.log(l1)
                setList(l1)
            }else{
                let l = list
                let l1 = l.sort((a,b) =>b.serviceDetails.harga - a.serviceDetails.harga)
                console.log(l1)
                setList(l1)
            }
    
            
            if (age == false) {
                let l = list
                let l1 = l.sort((a,b) =>a.getTime - b.getTime)
                console.log(l1)
                setList(l1)
            }else{
                let l = list
                let l1 = l.sort((a,b) =>b.getTime - a.getTime)
                console.log(l1)
                setList(l1)
            }         
        }
        
    }, [list, harga, age])


    useEffect(() => {
        console.log(vendor)
        if (vendor == '') {
            setViewAll(true)
        }else if(vendor && list && vendorList && !viewAll){

            let vd = vendor
            let l  = list
            let vl = vendorList
            let vend = vl.filter((v,i)=>v.namaSyarikat == vd)
            let result = l.filter((v,i)=>v.email == vend[0].email)
            console.log(list)
            console.log(vendor)
            console.log(vend)
            console.log(result)
            setViewVendorList(result)
        }
    }, [vendor, viewAll])




    function clickServiceToView(v){
        returnService(v)
    }
    return (
        <div>
            <div style={{margin:'50px'}}>
                <p>Pilihan Servis Tambahan</p>
                {
                    vendorSearch ?
                    <SearchBox
                        placeholder="Cari Vendor Anda"
                        data={vendorSearch}
                        onSelect={record => {
                            console.log(record)
                            setVendor(record.key)
                        }}
                        onFocus={(e) => {
                            console.log(e)
                            setVendor('')
                        }}
                        inputBoxHeight="70px"
                        inputBoxBorderColor="#EAEAEA"
                    />
                    :''
                }
                
                <button onClick={()=>searchVendor()}>SearchVendor</button>
                {
                    viewAll?
                    <div>
                        <div onClick={()=> setHarga(!harga)} >Harga {harga == true?'Max':'Min'}</div>
                        <div onClick={()=> setAge(!age)} >Age {age == true?'Baru':'Lama'}</div>
                    </div>
                    :''
                }
                
                
                {
                    viewAll && list.length >= 1?
                    <div>
                        {
                            list.map((v,i) =>{
                                var places = negeri
                                if (v.serviceDetails.alamatPenuh && v.serviceDetails.alamatPenuh.includes(negeri)) {
                                    let x = v.serviceDetails.alamatPenuh
                                    x = x.split(', ')
                                    let a = x.indexOf(negeri)
                                    places = x[a-1]
                                }
                                return (
                                    <div key={i}>
                                        <img src={v.images.length >= 1 ? v.images[0].urlStorage : ''} />
                                        <p onClick={()=>clickServiceToView(v)}>{v.serviceName}</p>
                                        <p>{places}</p>
                                        <p>Harga dari RM {v.serviceDetails.discount > 0 ? v.serviceDetails.hargaDiscount : v.serviceDetails.harga }</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    : !viewAll && viewVendorList?
                    <div>
                    {
                        viewVendorList.map((v,i) =>{
                                console.log(v)
                                var places = negeri
                                if (v.serviceDetails.alamatPenuh && v.serviceDetails.alamatPenuh.includes(negeri)) {
                                    let x = v.serviceDetails.alamatPenuh
                                    x = x.split(', ')
                                    console.log(x)
                                    let a = x.indexOf(negeri)
                                    places = x[a-1]
                                }
                                return (
                                    <div key={i}>
                                        <img src={v.images.length >= 1 ? v.images[0].urlStorage : ''} />
                                        <p onClick={()=>clickServiceToView(v)}>{v.serviceName}</p>
                                        <p>{places}</p>
                                        <p>Harga dari RM {v.serviceDetails.discount > 0 ? v.serviceDetails.hargaDiscount : v.serviceDetails.harga }</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    :''
                }
            </div>
            
        </div>
    )
}

export default SearchExtraService
