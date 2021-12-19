import React, {useContext, useState, useEffect} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext' 
import Router  from 'next/router'
import ViewShow2 from './ViewShow2'
import ViewShow3 from './ViewShow3'
import { Modal } from 'react-bootstrap';
function ViewExtraService({sendData, closeData, sendVendor, view}) {

    const {setMain} = useContext(BookingMainContext)
    const {mainCtxFnSelect} = setMain
    
    const [select, setSelect] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const serviceIcon = { Venue: 'ico-venue-active.png', 
    Canopy: 'ico-canopy-active.png', 
    KadBanner: 'ico-cards-active.png',
    WeddingDress: 'ico-dress-active.png',
    Makeup: 'ico-makeup-active.png',
    Photographer: 'ico-photography-active.png', 
    Videographer: 'ico-videography-active.png',
    Pelamin: 'ico-pelamin-active.png', 
    Caterer: 'ico-catering-active.png',
    Hantaran: 'ico-hantaran-active.png',
    Persembahan: 'ico-performance-active.png',
    DoorGift: 'ico-goodiebag-active.png',
    Others: 'ico-others-active.png'}

    const [coverImage, setcoverImage] = useState('')
    const [images, setimages] = useState([])
    const [serviceType, setserviceType] = useState('')
    const [details, setdetails] = useState([])
    const [about, setabout] = useState([])


    useEffect(() => {

        if (sendData) {
            let images = sendData.images;
            if (images.length > 0) {
                setcoverImage(images[0]);
                setimages(images);
            }
           
            let x   = sendData.serviceType;
            setserviceType(x);
            let s   = 'addServiceDetails'+x;
            
            let details = sendData.serviceDetails;
            setdetails(details);
            console.log(details)
    
            setabout(sendData) 
        }
        
    }, [sendData])

    useEffect(() => {
        if (select) {
            
        }
    }, [select])

    const selectService = (x) =>{
        if (x) {
            if (serviceType == 'KadBanner' || serviceType == 'Makeup') {
                setShow2(true)
                
            }else if (serviceType == 'Hantaran' || serviceType == 'Caterer' || serviceType == 'DoorGift'){
                setShow3(true)
            }else{
                mainCtxFnSelect(serviceType,sendData)
                setSelect(true)
                if (serviceType == 'Venue') {
                    Router.push('/booking/venue-services/extra')
                }
                closeData(false)
                view(false)
            }
            
        }else{
            closeData(false)
            view(false)
        }

        
        
    }
      




    return (
        <div className="review-form">
            {
                images && coverImage ? 
                    <div className="hero-review">
                            <img src={coverImage.base64 || coverImage.urlStorage}/>
                        <div className="hero-son-review">
                            {images.map((v,i) => {
                                return (<img key={i} onClick={() =>setcoverImage(v)} src={v.base64 || v.urlStorage}/>)
                            })}
                        </div>
                        
                    </div>
                :
                    <div className="hero-review">
                        <img src="/images/logos/unavailable.png"/>
                        <div className="hero-son-review">
                            <img src="/images/logos/unavailable.png"/>
                            <img src="/images/logos/unavailable.png"/>
                            <img src="/images/logos/unavailable.png"/>
                            <img src="/images/logos/unavailable.png"/>
                        </div>
                    </div>
                   

            }
            
            <div className="review-catergry-and-price">
                <div className="review-category">
                    <p><span><img className="icon-service" src={'/images/icon/white/'+serviceIcon[serviceType]}/></span>{serviceType == 'KadBanner' ? 'Kad Banner' : serviceType == 'WeddingDress' ? 'Baju Pengantin' : serviceType}</p>
                </div>
                {
                    (serviceType == 'KadBanner' || serviceType == 'Caterer' || serviceType == 'DoorGift' || serviceType == 'Hantaran')
                    ? 
                        <React.Fragment>
                            <div className="review-price">
                                <img src="/images/icon/ico-dollar.png"/>
                                <p><span>MYR (Harga Pax)</span> <br></br>{details.hargaPerPerson}</p>
                            </div>
                        </React.Fragment>
                    : serviceType == 'Makeup' ?
                        <React.Fragment>
                            {
                                details.hargaTouchup != false ?
                                <div className="review-price-flex">
                                    <div className="review-price">
                                        <p><span>MYR (Touchup)</span> <br></br>{details.hargaTouchup}</p>
                                    </div>
                                    <div className="review-price">
                                        <p><span>MYR (Diskaun)</span> <br></br>{details.hargaDiscountTouchup}</p>
                                    </div>
                                    <div className="review-price">
                                        <p><span>% (Diskaun)</span> <br></br>{details.discountTouchup}</p>
                                    </div>
                                </div>
                                :''
                            }
                            {
                                details.hargaFull != false ?
                                <div className="review-price-flex">
                                    <div className="review-price">
                                        <p><span>MYR (Full)</span> <br></br>{details.hargaFull}</p>
                                    </div>
                                    <div className="review-price">
                                        <p><span>MYR (Diskaun)</span> <br></br>{details.hargaDiscountFull}</p>
                                    </div>
                                    <div className="review-price">
                                        <p><span>% (Diskaun)</span> <br></br>{details.discountFull}</p>
                                    </div>
                                </div>
                                :''
                            }
                        </React.Fragment>
                    : 
                        <React.Fragment>
                            <div className="review-price">
                                <img src="/images/icon/ico-dollar.png"/>
                                <p><span>MYR (Harga Asal)</span> <br></br>{details.harga}</p>
                            </div>
                            <div className="review-price">
                                <img src="/images/icon/ico-dollar.png"/>
                                <p><span>MYR (Harga Disk)</span> <br></br>{details.hargaDiscount}</p>
                            </div>
                            <div className="review-price">
                                <img src="/images/icon/ico-dollar.png"/>
                                <p><span>% (Diskaun)</span> <br></br>{details.discount}</p>
                            </div>
                        </React.Fragment>

                }
                
            </div>
            {
                ( serviceType == 'WeddingDress' || serviceType == 'Venue') ?
                    <div className="review-name-and-places">
                        <h4> {about.serviceName}</h4>
                        <p><span><img src="/images/icon/ico-location.png"/></span>{details.alamatPenuh}</p>
                        <h4>Waktu Operasi</h4>
                        <p>{details.waktuOperasi}</p>
                    </div>
                :
                    <div className="review-name-and-place">
                        <h4>{about.serviceName}</h4>
                    </div>
            }

            <div className="review-desc">

                <h5>Penerangan:</h5>
                <p>{about.description}</p>
                {   serviceType == "WeddingDress" ?
                    <React.Fragment>
                        <h5>Jenis Baju</h5>
                        <ul>
                            {
                                details.jenisSewa.map((v,i) => {
                                    return(
                                        <li className="list-review-item" key={i}>{v}</li>
                                    )
                                })
                            }
                        </ul>
                        <h5>Perubahan Design Berapa Kali</h5>
                        <p>{details.maxDesignChanges}</p>
                        <h5>Kaedah Hantar</h5>
                        <p>{details.jenisHantar}</p>
                    </React.Fragment>
                    : serviceType == 'Videographer' || serviceType == 'Photographer' || serviceType == 'Others' ? 
                    <React.Fragment>
                        <h5>Jenis Kenduri/Event</h5>
                        <ul>
                            {
                                serviceType != 'Others' ?
                                    details.jenisEvent.map((v,i) => {
                                        return(
                                            <li className="list-review-item" key={i}>{v}</li>
                                        )
                                    })
                                : <li className="list-review-item">{details.jenisEvent}</li>
                            }
                            
                        </ul>
                        <h5>Waktu Tiba</h5>
                        <p>{details.waktuTiba}</p>
                    </React.Fragment>
                    : serviceType == 'KadBanner' ?
                    <React.Fragment>
                        <h5>Bayaran Majlis</h5>
                        <ul>
                            <li className="list-review-item" >Harga Pax: {details.hargaPerPerson}</li>
                            {
                                details.discount.map((v,i) => {
                                    return(
                                        <li className="list-review-item" key={i}>Minimum:{v.min} Maximum:{v.max} Discount:{v.discount}</li>
                                    )
                                })
                            }
                        </ul>
                        <h5>Butiran Banner</h5>
                        <p>{details.bannerDesc.description}</p>
                        {
                            details.bannerDesc.bannerSize.map((v,i) => {
                                return(
                                    <div key={i}>
                                        <ul>
                                            <li className="list-review-item">Harga: RM {v.harga} </li>
                                            <li className="list-review-item">Size: {v.size}</li>
                                        </ul>
                                        <br/>
                                    </div>
                                    
                                )
                            })
                        }
                    </React.Fragment>
                    :   (serviceType == 'DoorGift' || serviceType == 'Hantaran') ?
                        <React.Fragment>
                            <h5>Material</h5>
                            <p>{details.jenisMaterial}</p>
                            <h5>Max Design Changes</h5>
                            <p>{details.maxDesignChanges}</p>
                            <h5>Jenis Hantar</h5>
                            <p>{details.jenisHantar}</p>
                            <h5>Waktu Tiba</h5>
                            <p>details.waktuTiba</p>
                            <h5>Kaedah Hantar</h5>
                            <p>{details.jenisHantar}</p>
                            <h5>Bayaran Majlis</h5>
                            {/* <ul>
                                <li>Harga Pax: {details.hargaPerPerson}</li>
                                {
                                    details.discount.map((v,i) => {
                                        return(
                                            <li key={i}>Minimum:{v.min} Maximum:{v.max} Discount:{v.discount}</li>
                                        )
                                    })
                                }
                            </ul> */}
                        </React.Fragment>
                    : serviceType == 'Pelamin' ?
                        <React.Fragment>
                            <h5>Material</h5>
                            <p>{details.jenisMaterial}</p>
                            <h5>Max Design Changes</h5>
                            <p>{details.maxDesignChanges}</p>
                            <h5>Waktu Tiba</h5>
                            <p>{details.waktuTiba}</p>
                        </React.Fragment>
                   
                    : serviceType == 'Caterer' ?
                    <React.Fragment>
                        <h5>Senarai Lauk</h5>
                        {
                            details.senaraiLauk.map((v,i) => {
                                return(
                                    <li className="list-review-item" key={i}>{v}</li>
                                )
                            })
                        }   
                        <h5>Berapa Kali Tukar Menu</h5>
                        <p>{details.changeMenu}</p>
                        
                        <h5>Berapa Kali Tukar Venue</h5>
                        <p>{details.changeVenue}</p>
                        
                        
                    </React.Fragment>
                    : serviceType == 'Persembahan' ?
                    <React.Fragment>
                        <h5>Nama Persembahan</h5>
                        <p>{details.namaPersembahan}</p>
                        <h5>Berapa Kali Persembahan</h5>
                        <p>{details.kaliPersembahan}</p>
                    </React.Fragment>
                    :
                    
                    ''
                }
                

                <h5> Terma dan Syarat</h5>
                <p>{about.tnc}</p>

                <h5>Extra:</h5>
                <p>{about.extra}</p>
                
                {
                    sendVendor?
                    <div className="profile-vr">
                        <img className="img-responsive img-vendor" src={sendVendor.profileImage ? sendVendor.profileImage :''} alt=""/>
                        <p>{sendVendor.namaSyarikat}</p>
                    </div>
                    :''
                }
                <div className="button-position">
                    <button className="btn btn-batal" onClick={()=>selectService(false)}>Batal</button>
                    <button className="btn btn-pilih" onClick={()=>selectService(true)}>Pilih</button>
                </div>
            </div>
            {
                show2 == true ? 
                <Modal show={show2} onHide={()=>setShow2(!show2)} >
                    <Modal.Header closeButton>
                        <Modal.Title>{sendData.serviceName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewShow2 data={sendData} show={setShow2} closeData={closeData} view={view} closeButton/>
                    </Modal.Body>
                </Modal>
                :
                ''

            }

            {
                show3 == true ?
                <Modal show={show3} onHide={()=>setShow3(!show3)} >
                    <Modal.Header closeButton>
                        <Modal.Title>{sendData.serviceName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewShow3 data={sendData} show={setShow3} closeData={closeData} view={view} closeButton/>
                    </Modal.Body>
                </Modal>
                
                :
                ''

            }
            <style jsx>{`
                .review-form { max-width: 670px; margin: 30px auto; position: relative;}
                .hero-review { position: relative;}
                .hero-review > img { object-fit: cover; width: 100%; max-height: 206px; object-position: top; border-radius: 5px;}
                .hero-son-review { position: absolute; bottom: 15px; left: 15px; display: flex; }
                .hero-son-review > img { width: 40px; height: 40px; object-fit: cover;  border: 2px solid #FFF; border-radius: 4px; margin-right: 6px; cursor: pointer;}
                .form-button-edit { max-width: 490px; margin: auto; display: flex; justify-content: space-between; }
                .checkbox-type { display: flex; justify-content:space-around; align-item: center; }
                p {font-weight:400; color: #3e3e3e; font-size: 14px; }
                .form-section { margin: 20px 0; }
                h4 { font-weight: 400; color: #75848E; font-size: 16px; margin-bottom: 10px; }
                .area-covered-div { display: inline-block; margin-right: 10px; }
                .area-covered-div > label { font-weight: 400; color: #3E3E3E; font-size: 14px;}
                .area-covered-div > label > input { margin-right: 5px; }
                .review-catergry-and-price { display: flex; justify-content: flex-start; margin: 13px 0px 18px 0px; flex-wrap: wrap; gap: 10px;}
                .review-category { background-color: #ED795F; color: #FFF; padding: 20px; border-radius: 5px; flex:0 0 170px;}
                .review-category > p { font-size: 12px; color: #FFF; margin: 0;}
                .review-category > p > span { margin-right: 10px;}
                .review-price-flex { display: flex; gap: 10px; }
                .review-price { padding: 0 20px; display: flex; justify-content: space-between; align-items: center; border-radius: 5px; border: 1px solid #EAEAEA; flex: 0 0 150px;}
                .review-price > p { font-size: 14px; color: #3E3E3E;}
                .review-price > p > span { color: #59D0C9; font-size: 10px;}
                .review-price > img { width: 16px;}
                .review-name-and-places > h4 { font-size: 18px; color: #3E3E3E;}
                .review-name-and-places > h4 > span { font-weight: bold;}
                .review-name-and-places > p { font-size: 12px; color: #3E3E3E;}
                .review-name-and-places > p > span  { margin-right: 10px;}
                .review-desc { background-color: #F5F6FA; padding: 20px; margin-bottom: 22px; border-radius: 4px;}
                .review-desc > p { color:  #75848E; font-size: 14px;}
                .review-user  { background-color: #F5F6FA; padding: 20px; border-radius: 4px; margin-bottom: 22px; display: flex;}
                .review-user-image > img { width: 74px; height: 74px; object-fit: cover; border-radius: 50%;}
                .review-user-image-and-det { display: flex; justify-content: flex-start; align-items: center; width: 400px;}
                .review-user-image-det { margin-left: 10px;}
                .review-user-image-det > p { margin: 0;}
                .review-user-image-det > p:first-child { font-size: 10px; color: #9B9B9B;}
                .review-user-image-det > p:nth-child(2) { font-size: 16px; color: #3E3E3E;}
                .review-user-image-det > p:nth-child(3) { font-size: 12px; color: #47CBC4;}
                h5 { font-weight: bold; color: #3E3E3E; font-size: 17px; margin-top: 10px;}
                .form-button {display: none;}
                .button-edit-position { position: fixed; left: 60px; z-index: 2;}
                .button-edit-position .btn { display: block; width: 100px; height: 50px; border-radius: 25px; margin-bottom: 10px; transition: all 3.s}
                .btn-edit { background-color: #FFF; color: #3e3e3e; font-size: 14px; font-weight: 500; text-align: left;}
                .btn-edit:hover, .btn-edit:focus, .btn-edit:active { box-shadow: none; transition: all 3.s }
                .btn-save { background-color: #22bb33; color: #FFF; font-size: 12px; font-weight: 500;}
                .icon-service{width:20%;}
                .button-position { display: flex; justify-content: space-between; align-items: center; margin: 20px 0;}
                .btn-batal { border: 1px solid #F4F4F4; background-color: #FFF; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #3E3E3E; height: 50px; width: 160px;}
                .btn-pilih { background-color: #ED795F; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #FFF; height: 50px; width: 160px; background-image:url('/images/icon/arrow-right-white.png'); background-repeat: no-repeat; background-position: center right 10px; background-size: 25px;}
                .img-vendor { width: 100%;}
                .profile-vr { display: flex; align-items: center;}
                .profile-vr > img { margin-right: 10px; width: 100px; height: 100px; border-radius: 50%; object-fit: cover;}
                .profile-vr > p { color: #75848E; }
                @media screen and ( max-width: 480px) {
                    .button-position { position: unset; display: flex; justify-content: space-between; margin-top: 20px;}
                    .button-position > button { flex: 0 0 120px;}
                    
                }
            `}</style>
        </div>
    )
}

export default ViewExtraService
