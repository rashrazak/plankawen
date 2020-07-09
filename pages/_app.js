import React from 'react';
import App from 'next/app';
import LSContextProvider from '../context/LSContext'
import BookingExtraContextProvider from '../context/BookingExtraContext'
import BookingMainContextProvider from '../context/BookingMainContext'
import '../css/global.css'
import '../css/index.css'
import 'react-day-picker/lib/style.css';


import 'bootstrap/dist/css/bootstrap.min.css'


const initialState = {
    user: null,
    vendorUser:null,
    isLogin:false,
    vendorDetails:null,
    vendorId:'',
    visibility:'show',
    addServiceAbout:{
      tnc:'',
      extra:'',
      serviceType:'',
      serviceName:'',
      description:'',
      areaCovered:[],
      status:'pending' //pending,active,inactive
    },
    addServiceDetailsVenue:{ // A
      harga:0,
      discount:0,
      hargaDiscount:0,
      lokasi:{
        street:'',
        state:'',
        city:'',
        postcode:''
      },
      alamatPenuh:'',
      waktuOperasi:''
    },
    addServiceDetailsWeddingDress:{ // A
      harga:0,
      discount:0,
      hargaDiscount:0,
      lokasi:{
        street:'',
        state:'',
        city:'',
        postcode:''
      },
      alamatPenuh:'',
      waktuOperasi:'',
      jenisSewa:[],
      jenisMaterial:'',
      maxDesignChanges:0,
      jenisHantar:''
    },
    addServiceDetailsPersembahan:{ // A
      harga:0,
      discount:0,
      hargaDiscount:0,
      namaPersembahan:'',
      kaliPersembahan:''
    },
    addServiceDetailsPhotographer:{ // A
      harga:0,
      discount:0,
      hargaDiscount:0,
      jenisEvent:[],
      waktuTiba:''
    },
    addServiceDetailsVideographer:{ // A
      harga:0,
      discount:0,
      hargaDiscount:0,
      jenisEvent:[],
      waktuTiba:''
    
    },
    addServiceDetailsOthers:{ // A
      harga:0,
      discount:0,
      hargaDiscount:0,
      jenisEvent:'',
      waktuTiba:''
    },
    addServiceDetailsPelamin:{ // A
      harga:0,
      discount:0,
      hargaDiscount:0,
      jenisEvent:[],
      waktuTiba:'',
      jenisMaterial:'',
      maxDesignChanges:0
    
    },
    addServiceDetailsMakeup:{ // C
      hargaTouchup:0,
      discountTouchup:0,
      hargaDiscountTouchup:0,
      hargaFull:0,
      discountFull:0,
      hargaDiscountFull:0,
      jenisMakeup:[],
      jantina:[]
    
    },
    addServiceDetailsKadBanner:{ // B
      hargaPerPerson:0,
      discount:[],
      banner:false,
      bannerDesc:{
        bannerSize:[],
        description:''
      }
    
    },
    addServiceDetailsCaterer:{ // B
      hargaPerPerson:0,
      discount:[],
      senaraiLauk:[],
      changeMenu:'',
      changeVenue:''
    
    },
    addServiceDetailsDoorGift:{ // B
      hargaPerPerson:0,
      discount:[],
      waktuTiba:'',
      jenisMaterial:'',
      maxDesignChanges:0,
      jenisHantar:''
    
    },
    addServiceDetailsHantaran:{ // B
      hargaPerPerson:0,
      discount:[],
      waktuTiba:'',
      jenisMaterial:'',
      maxDesignChanges:0,
      jenisHantar:''
    
    },
    addServiceUpload:{
      serviceType:'',
      serviceId:'',
      vendorId:'',
      images:[] //max 3
    }
  };

class MyApp extends App {
    constructor(props){
        super(props);
        this.state = initialState
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <LSContextProvider>
              <BookingExtraContextProvider>
              <BookingMainContextProvider>
                <Component {...pageProps} />
              </BookingMainContextProvider>
              </BookingExtraContextProvider>
            </LSContextProvider>
        );
    }
}

export default MyApp
