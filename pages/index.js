import React, {useEffect, useContext, useState} from 'react'
import Layout from '../components/Header'
import SearchBox from 'react-search-box'
import '../css/index.css'
import { LSContext } from '../context/LSContext'
import Router from 'next/router';
import IndexPackage from '../components/IndexPackage';

function Index(){
    const gMapsCities = [
        {key:'Johor', value:'Johor'},
        {key:'Kedah', value:'Kedah'},
        {key:'Kelantan', value:'Kelantan'},
        {key:'Melaka', value:'Melaka'},
        {key:'Negeri Sembilan', value:'Negeri Sembilan'},
        {key:'Pahang', value:'Pahang'},
        {key:'Penang', value:'Penang'},
        {key:'Perak', value:'Perak'},
        {key:'Perlis', value:'Perlis'},
        {key:'Sabah', value:'Sabah'},
        {key:'Sarawak', value:'Sarawak'},
        {key:'Selangor', value:'Selangor'},
        {key:'Kuala Lumpur', value:'Kuala Lumpur'},
        {key:'Terengganu', value:'Terengganu'},
        {key:'Labuan', value:'Labuan'},
        {key:'Putrajaya', value:'Putrajaya'},
    ];
    const [stateMy, setStateMy] = useState('Selangor')
    const {loginCtx} = useContext(LSContext)

    const countryFn = () =>{
        let state = stateMy;
        Router.push('/search?state='+state)
    }

    const redirectPK = (x) =>{
        x == 'login' ? Router.push('/login') : window.location.href="https://vendor.plankawen.com"
    }
    return (
        <Layout title="Selamat Datang ke PlanKawen">
            <div className="row row-1">
                <div className="box-red"></div>
                <div className="container container-1">
                    <div className="">
                        <h1>Plan yang lebih mudah <span> untuk anda</span></h1>
                        <p>Di Plankawen, kami percaya Merancang Majlis Kahwin sepatutnya lebih mudah dan teratur, baik disebelah bakal Pengantin, mahupun Vendor.</p>
                        {
                            loginCtx == false ?
                            <button type="button" className="btn btn-rancang" onClick={()=>countryFn()}>Mula merancang</button>
                            :
                            <div>
                                {/* google npm react-search-box ada css attr */}
                                    <SearchBox
                                        placeholder="Pilih Negeri"
                                        data={gMapsCities}
                                        onSelect={record => {
                                            setStateMy(record.key)
                                        }}
                                        value={stateMy}
                                        autoFocus
                                    />
                                    <button type="button" className="btn btn-rancang" onClick={()=>countryFn()}>Mula merancang</button>
                            </div>
                        }
                    </div>
                    <div className="">
                        <img src="/static/images/backgrounds/home/img-hero-placeholder.png"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container container-2">
                    <div className="">
                        <a href=""><img src="/static/images/icon/s-facebook.png"/></a>
                        <a href=""><img src="/static/images/icon/s-instagram.png"/></a>
                    </div> 
                    <div className="">
                        <p>Dialog di bawah adalah dialog normal bagi bakal pengantin dan juga Vendor. <br></br> Kami faham itu adalah masalah biasa yang dihadapi oleh kedua pihak.</p>
                        <p>Sebab itu, kami memperkenalkan PlanKawen pada anda.</p>
                    </div>
                    <div className="">
                        <div className="">
                            <img src="/static/images/icon/qoute-right.png"/>
                            <h5>“Nak kawin tapi tak tahu mana nak start lah..” “Checklist ada tapi takut masih ada terlepas pandang..” “Dapat contact Vendor dari kawan, tapi masih nak option lain lah</h5>
                            <p>Abg Man</p>
                            <p>Bakal Pengantin</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/qoute-right.png"/>
                            <h5>“Dah buat servis dandanan, tapi klien cuma kenalan sahaja..” “Penat juga buat promosi tapi sales kureeng” “Teringin nak besarkan prospek klien. Ada cara lain tak?”</h5>
                            <p>Kak Sin</p>
                            <p>Vendor Pelamin</p>
                        </div>
                    </div>
                    <div className="">
                        <h4>Sebelum itu, SIAPA ANDA?</h4>
                        <div className="">
                            <div className="">
                                <button type="button" className="btn btn-pengatin" onClick={()=>redirectPK('login')}>Bakal Pengantin</button>
                                <p>Ber-darah manis yang bakal diijabkabul</p>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-vendor" onClick={()=>redirectPK('vendor')}>Vendor Servis</button>
                                <p>Mencari si darah manis untuk menggunakan servis saya.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <IndexPackage/>
            <div className="row">
                <div className="container container-4">
                    <img src="/static/images/logo/logo-official.png"/>
                    <p>Hubungi kami untuk keterangan lanjut</p>
                    <button type="button" className="btn btn-mesej">Mesej</button>
                    <a href="">info@plankawen.com</a>
                </div>
            </div>
        </Layout>
    )
}


export default Index