import React, {useEffect, useContext, useState} from 'react'
import Layout from '../components/Header'
import SearchBox from 'react-search-box'
import '../css/index.css'
import { LSContext } from '../context/LSContext'
import Router from 'next/router';
import IndexPackage from '../components/IndexPackage';

function Index(){
    // useEffect(() => {
    //     window.location.href = "https://plankawen.wixsite.com/website"
    // }, [])
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
                </div>
            </div>
            <div className="row">
                <div className="container container-servis">
                    <h2>Antara servis-servis <br/> yang kami sediakan adalah</h2>
                    <div className="available-servis">
                        <div className="">
                            <img src="/static/images/icon/ico-venue.png"/>
                            <p>Lokasi Majlis</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-pelamin.png"/>
                            <p>Pelamin</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-canopy.png"/>
                            <p>Kanopi</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-dress.png"/>
                            <p>Baju Pengantin</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-catering.png"/>
                            <p>Katering</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-makeup.png"/>
                            <p>Make Up</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-camera.png"/>
                            <p>Foto & Video</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-doorgift.png"/>
                            <p>Cenderahati</p>
                        </div>
                        <div className="">
                            <img src="/static/images/icon/ico-card.png"/>
                            <p>Kad Jemputan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-fungsi">
                <div className="box-red-2"></div>
                <div className="container container-fungsi">
                    <h2>Bagaimana kami berfungsi?</h2>
                    <p>Kami percaya merancang majlis kahwin sepatutnya lebih mudah dan teratur. Disini kami nyatakan langkah-langkah mudah dalam mengatur perancangan anda.</p>
                    <div className="fungsi-desc-container">
                        <div className="">
                            <img src="/static/images/backgrounds/home/Howitworks.png"/>
                        </div>
                        <div className="">
                            <div className="fungsi-desc">
                                <div className="">
                                    <span className="bullet-number">1</span>
                                </div>
                                <div className="">
                                    <h3>Daftar masuk</h3>
                                    <p>Masukkan maklumat peribadi diri anda anda mula merancang.</p>
                                </div>
                            </div>
                            <div className="fungsi-desc">
                                <div className="">
                                    <span className="bullet-number">2</span>
                                </div>
                                <div className="">
                                    <h3>Pilih vendor pilihan anda</h3>
                                    <p>PlanKawen akan membanding vendor yang terbaik mengikut bajet dan tema anda.</p>
                                </div>
                            </div>
                            <div className="fungsi-desc">
                                <div className="">
                                    <span className="bullet-number">3</span>
                                </div>
                                <div className="">
                                    <h3>Temujanji bersama vendor</h3>
                                    <p>Vendor akan menghubungi anda dan tetapkan temujanji supaya kedua-dua pihak boleh berbincang.</p>
                                </div>
                            </div>
                            <div className="fungsi-desc">
                                <div className="">
                                    <span className="bullet-number">4</span>
                                </div>
                                <div className="">
                                    <h3>Pembayaran 10%</h3>
                                    <p>Pembayaran hanya dibuat setelah kedua-dua pihak bersetuju dengan servis dan harga dan boleh dibayar secara berperingkat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-comment">
                <div className="container container-2">
                    <div className="">
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
            <style jsx>{`
                h2 { font-style: normal;font-weight: bold;font-size: 22px;text-align: center; color: #47CBC4; }
                .available-servis { display: flex; justify-content: center; align-items: center; flex-wrap: wrap;}
                .available-servis > div {  width: 190px; margin-top: 50px;}
                .available-servis > div > img { width: 75px; height: 75px; margin: auto; display: block; margin-bottom: 20px;}
                .available-servis > div > p { font-style: normal; font-weight: 600;font-size: 1.1875rem ;color: #3E3E3E; text-align: center;}
                .row-fungsi { margin: 100px 0; position: relative;}
                .container-fungsi > p { font-style: normal;font-weight: normal;font-size: 1rem ;text-align: center;color: #3E3E3E; max-width: 524px; margin: 18px auto; }
                .fungsi-desc-container { display: flex; align-items: center; margin-top: 100px;}
                .fungsi-desc-container img { width: 100%;}
                .fungsi-desc-container > div { width: 500px;}
                .fungsi-desc { display: flex;}
                .fungsi-desc h3 { font-style: normal; font-weight: bold; font-size: 1rem; color: #3E3E3E;}
                .fungsi-desc p { font-style: normal; font-weight: normal; font-size: 1rem; color: #515D65;}
                .bullet-number { height: 60px; width: 60px; border-radius: 50%; border: 2px solid #47CBC4; display: block; color: #47CBC4; font-style: normal; font-weight: bold; font-size: 1.5625rem; text-align: center; line-height: 50px; margin-right: 20px;}
                .box-red-2{ background-color: #FED5C4; width: 500px; height: 600px;position: absolute;top: 130px;left: 0;z-index: -1;border-top-right-radius: 10px;border-bottom-right-radius: 10px;}
                .row-comment { margin-top: 300px;}
            `}</style>
        </Layout>
    )
}


export default Index