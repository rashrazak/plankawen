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
        console.log(vendorList)
        console.log(data)
        let vl = vendorList
        let x = vl.filter((v,i)=>data.email == v.email)
        returnService(data, x[0])
    }

    function searchVendor(){
        setViewAll(false)
    }
    return (
        <div>
            <div className="form-width">
                <p>Pilihan Servis Tambahan</p>
                <div className="div-search-sort">
                    <div className="searc-box-div">                    
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
                            inputBoxHeight="40px"
                            inputBoxBorderColor="#EAEAEA"
                            className="hee"
                        />
                        :''
                    }
                    
                    <button className="btn btn-seacrh" onClick={()=>searchVendor()}><img src="/images/icon/search.png"/></button>
                    </div>

                    {
                        
                        viewAll?
                        <React.Fragment>
                            <button className="btn btn-sort" onClick={()=> setHarga(!harga)} >Harga {harga == true?'Max':'Min'}</button>
                            <button className="btn btn-sort" onClick={()=> setAge(!age)} >Age {age == true?'Baru':'Lama'}</button>
                        </React.Fragment>
                        :''
                    }
                </div>
                
                {
                    viewAll && list.length >= 1?
                    <div className="div-result">
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
                                    <div key={i} className="div-result-item">
                                        <img src={v.images.length >= 1 ? v.images[0].urlStorage : ''} />
                                        <div className="result-item-desc">
                                            <p onClick={()=>clickServiceToView(v)}>{v.serviceName}</p>
                                            <p>{places}</p>
                                            <p>Harga dari RM <span>{v.serviceDetails.discount > 0 ? v.serviceDetails.hargaDiscount : v.serviceDetails.harga }</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    : !viewAll && viewVendorList?
                    <div className="div-result">
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
                                    <div key={i} className="div-result-item">
                                        <img src={v.images.length >= 1 ? v.images[0].urlStorage : ''} />
                                        <div className="result-item-desc">
                                            <p onClick={()=>clickServiceToView(v)}>{v.serviceName}</p>
                                            <p>{places}</p>
                                            <p>Harga dari RM <span>{v.serviceDetails.discount > 0 ? v.serviceDetails.hargaDiscount : v.serviceDetails.harga }</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    :''
                }
            </div>
        <style jsx>{`
            .form-width { max-width: 790px; width: 100%;}
            .searc-box-div { display: flex; max-width: 490px; width: 100%;}
            .choose-category { display: flex; }
            .btn-seacrh { background-color: #ED795F; border-radius: 4px; height: 40px;}
            .div-search-sort { display: flex; justify-content: space-between; padding-bottom: 20px;}
            .btn-sort { background-color: #FFF; border: 1px solid #EAEAEA;border-radius: 4px; width: 140px; height: 40px; font-style: normal;font-weight: normal;font-size: 0.75rem;color: #515D65; text-align: left; background-image: url('/images/icon/sort.png'); background-repeat: no-repeat; background-position: center right 10px; }
            .div-result { display: flex; flex-wrap: wrap; justify-content: space-between;}
            .div-result-item { max-width: 250px; margin-bottom: 41px;}
            .div-result-item > img { width: 100%; height: 135px; border-radius: 8px; object-fit: cover;}
            .result-item-desc { padding: 10px 0 0 10px;}
            .result-item-desc > p:first-child { color: #2B2B2B;}
            .result-item-desc > p { font-style: normal; font-weight: normal; font-size: 0.875rem; color: #75848E; margin: 0; line-height: 18px;}
            .result-item-desc > p > span { font-weight:bold; color: #3E3E3E;}
        `}</style>
        </div>
    )
}

export default SearchExtraService
