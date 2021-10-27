import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ViewPackageService({sendData, closeData, sendVendor}) {

    const serviceIcon = { Venue: 'ico-venue.png', 
    Canopy: 'ico-canopy.png', 
    KadBanner: 'ico-cards.png',
    WeddingDress: 'ico-dress.png',
    Makeup: 'ico-makeup.png',
    Photographer: 'ico-photography.png', 
    Videographer: 'ico-videography.png',
    Pelamin: 'ico-pelamin.png', 
    Caterer: 'ico-catering.png',
    Hantaran: 'ico-hantaran.png',
    Persembahan: 'ico-performance.png',
    DoorGift: 'ico-goodiebag.png',
    Others: 'ico-others.png'}

    const [coverImage, setcoverImage] = useState('')
    const [images, setimages] = useState([])
    const [serviceType, setserviceType] = useState('')
    const [details, setdetails] = useState([])
    const [about, setabout] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [quantity, setQuantity] = useState(sendData.quantity)

    useEffect(() => {

        if (sendData) {
            let images = sendData.images;
            if (images.length > 0) {
                setcoverImage(images[0]);
                setimages(images);
            }
            setdetails(sendVendor)
            setabout(sendData) 
        }
        // console.info(sendVendor)
        // console.info(sendData)
    }, [sendData])

    const close = () => {
        closeData(false)
    }

    const handleHidePopup = () => {
        setShowPopup(false)
    }

    const handlePilih = () => {

        // if (sendData.selectServices.find(data => data.serviceType === 'KadBanner')) {

        //     setShowPopup(true)

        // } else {
            
        //    alert('Proceed to ...')

        // }

        setShowPopup(true)

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
            <div className="review-name-and-places">
                <div>
                    <h4> {about.title}</h4>
                    <p><span><img src="/images/icon/ico-location.png"/></span> {about?.coveredArea?.join(', ')}</p>
                </div>
                <div className="review-price">
                    <img src="/images/icon/ico-dollar.png"/>
                    <p><span>MYR </span> <br></br>{about.totalPrice}</p>
                </div>
            </div>
            <div className="review-description">
                <span>{about.description}</span>
            </div>
            {
                sendData && sendData.selectServices.map((v,i) => {

                    return (

                        <div className="service-container" key={i}>
                            <div className="image-service">
                                <img src={v.images[0].urlStorage}/>
                                <div className="service-text">
                                    <img src={`/images/icon/dark/${serviceIcon[v.serviceType]}`}/>
                                    <div>
                                        <span className="service-name">{v.serviceName}</span>
                                        <span className="service-type">{v.serviceType}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="details-service">
                                <span>{v.description}</span>
                            </div>
                        </div>

                    )
                })
            }
            <div className="vendor-details">
                <div className="">
                    <img src={details?.profileImage}></img>
                </div>
                <div className="">
                    <span>Provided by</span>
                    <span>{details.namaSyarikat}</span>
                    <span>Verifief</span>
                </div>
                <div className="">
                    <p>{details.companyDesc} </p>
                </div>
            </div>
            <div className="div-button">
                <button className="btn btn-batal" onClick={()=> close()}>Batal</button>
                <button className="btn btn-pilih" onClick={()=> handlePilih()}>Pilih</button>
            </div>

            <Modal show={showPopup} onHide={handleHidePopup}>
            <Modal.Header className="custom-header" closeButton>
                <Modal.Title>{about.title}
                <p className="p-modal"><span><img src="/images/icon/ico-location.png"/></span> {about?.coveredArea?.join(', ')}</p>
                </Modal.Title> 
            </Modal.Header>
            <Modal.Body>
                <div className="div-body">
                    <p>Quantity Pax (min {sendData.quantity})</p>
                    <div className="count-section">
                        <div><img src="/images/icon/circle-minus.png"></img></div>
                        <div>{quantity}</div>
                        <div><img src="/images/icon/circle-plus.png"></img></div>
                    </div>
                    {
                        sendData.selectServices.find(data => data.serviceType === 'KadBanner') &&
                        <div className="section-card">
                            <p>Card</p>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check 
                                        type={type}
                                        name="group1"
                                        id={`default-${type}`}
                                        label={`100%`}
                                    />

                                    <Form.Check
                                        name="group1"
                                        type={type}
                                        label={`50%`}
                                        id={`disabled-default-${type}`}
                                    />
                                    <Form.Check
                                        name="group1"
                                        type={type}
                                        label={`25%`}
                                        id={`disabled-default-${type}`}
                                    />
                                    </div>
                                ))}
                            </Form>
                            <div className="div-jumlah">
                                <p className="title-jum">Jumlah Harga (MYR)</p>
                                <span className="title-jum-bold">XXX</span>
                            </div>
                        </div>
                        
                    }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleHidePopup}>
                Close
                </Button>
                <Button variant="primary">
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
            
            
            {/* <div className="review-catergry-and-price">
                <div className="review-category">
                    <p><span><img className="icon-service" src={'/images/icon/white/'+serviceIcon[serviceType]}/></span>{serviceType}</p>
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
                                <p><span>MYR (Harga Asal) asdasd</span> <br></br>{details.harga}</p>
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
                            <ul>
                                <li>Harga Pax: {details.hargaPerPerson}</li>
                                {
                                    details.discount.map((v,i) => {
                                        return(
                                            <li key={i}>Minimum:{v.min} Maximum:{v.max} Discount:{v.discount}</li>
                                        )
                                    })
                                }
                            </ul>
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
                
                <h5>Description:</h5>
                <p>{about.description}</p>

                <h5>Terms And Condition:</h5>
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

            } */}
            <style jsx>{`
                .review-form { max-width: 670px; margin: 30px auto; position: relative;}
                .hero-review { position: relative; margin-bottom: 21px;}
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
                .review-catergry-and-price { display: flex; justify-content: flex-start; margin: 13px 0px 18px 0px; overflow: scroll;}
                .review-category { background-color: #ED795F; color: #FFF; padding: 20px; border-radius: 5px; flex: 0 0 150px; margin-right: 10px;}
                .review-category > p { font-size: 12px; color: #FFF; margin: 0;}
                .review-category > p > span { margin-right: 10px;}
                .review-price-flex { display: flex; }
                .review-price { padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; border-radius: 5px; flex: 0 0 150px; border: 1px solid #EAEAEA; margin-right: 10px;}
                .review-price > p { font-size: 14px; color: #3E3E3E;}
                .review-price > p > span { color: #59D0C9; font-size: 10px;}
                .review-price > img { width: 16px;}
                .review-name-and-places { display: flex; align-items: center;  justify-content: space-between; margin: 10px 0;}
                .review-name-and-places > div > h4 { font-size: 18px; color: #3E3E3E; font-weight: bold; margin-bottom: 7px;}
                .review-name-and-places > h4 > span { font-weight: bold;}
                .review-name-and-places > div > p { font-size: 12px; color: #3E3E3E; margin-bottom: 0;}
                .review-name-and-places > div > p > span  { margin-right: 10px;}
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
                .btn-batal { border: 1px solid #FFF; background-color: #FFF; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #3E3E3E; height: 50px; width: 160px;}
                .btn-pilih { background-color: #ED795F; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #FFF; height: 50px; width: 160px; background-image:url('/images/icon/arrow-right-white.png'); background-repeat: no-repeat; background-position: center right 10px; background-size: 25px;}
                .img-vendor { width: 100%;}
                .profile-vr { display: flex; align-items: center;}
                .profile-vr > img { margin-right: 10px; width: 100px; height: 100px; border-radius: 50%; object-fit: cover;}
                .profile-vr > p { color: #75848E; }
                .review-description { border-radius: 4px; padding: 20px 30px; color: #75848E; font-size: 14px; background-color: #F5F6FA;}
                .service-container { display: flex; align-items: center; margin 10px 0;}
                .details-service { background-color: #F5F6FA; margin: 10px 0; height: 151px; overflow: hidden; padding: 16px; border-radius: 4px; width: 100%;}
                .details-service > span { font-size: 14px; color: #515D65;}
                .image-service { width: 200px; background: #FFFFFF;border: 1px solid #F4F4F4;box-sizing: border-box;box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);border-radius: 4px; margin-right: 10px;}
                .image-service > img { width: 100%; height: 95px; object-fit: cover;}
                .service-text { background-color: #FFF; display: flex; width: 200px; padding: 10px;}
                .service-text > img { width: 24px; height: 24px; margin-right: 10px;}
                .service-text > div > .service-name { font-size: 12px; font-weight: bold; color: #3e3e3e; display: block; white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 145px;}
                .service-text > div > .service-type { font-size: 11px; color: #75848E; display: block;}
                .vendor-details { display: flex; align-items: center; background-color: #F5F6FA; border-radius: 4px; padding: 10px; overflow: hidden;}
                .vendor-details > div > img { height: 74px; width: 74px; border-radius: 50%; filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.2)); margin-right: 21px;}
                .vendor-details > div > span { display: block;}
                .vendor-details > div > span:first-child { font-style: italic; font-size: 10px; color: #9B9B9B;}
                .vendor-details > div > span:nth-child(2) { color: #3e3e3e; font-size: 16px; font-weight: bold;}
                .vendor-details > div > span:last-child { color: #47CBC4; font-size: 12px; font-weight: normal; font-style: italic;}
                .vendor-details > div > p { font-size: 12px; color: #3e3e3e; font-family: normal; padding: 10px; margin: 0;}
                .div-button { display: flex; align-items: center; justify-content: space-around; margin: 20px 0;}
                .p-modal { display: block; margin: 0;}
                .custom-header { flex-direction:column;}
                .count-section { display:flex; justify-content: space-between; align-items: center; width: 100%; border: 1px solid #EAEAEA; border-radius: 4px; padding: 20px 10px;}
                .count-section > div > img { width: 24px; height: 24px; cursor: pointer;}
                .section-card { padding: 10px; }
                .section-card > p { margin: 0; font-size: 20px; font-weight: bold;}
                .div-jumlah { text-align:center;}
                .div-jumlah > .title-jum { color: #75848E; font-size: 14px; margin:0;}
                .title-jum-bold { color: #2B2B2B; font-size: 18px; font-weight: bold;}
                @media screen and ( max-width: 480px) {
                    .button-position { position: unset; display: flex; justify-content: space-between; margin-top: 20px;}
                    .button-position > button { flex: 0 0 120px;}
                    
                }
            `}</style>
        </div>
    )
}

export default ViewPackageService
