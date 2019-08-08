import Layout from '../components/Header'
import '../css/index.css'

function Index(){
    return (
        <Layout title="Selamat Datang ke PlanKawen">
            <div className="row row-1">
                <div className="box-red"></div>
                <div className="container container-1">
                    <div className="">
                        <h1>Plan yang lebih mudah <span> untuk anda</span></h1>
                        <p>Di Plankawen, kami percaya Merancang Majlis Kahwin sepatutnya lebih mudah dan teratur, baik disebelah bakal Pengantin, mahupun Vendor.</p>
                        <button type="button" className="btn btn-rancang">Mula merancang</button>
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
                                <button type="button" className="btn btn-pengatin">Bakal Pengantin</button>
                                <p>Ber-darah manis yang bakal diijabkabul</p>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-vendor">Vendor Servis</button>
                                <p>Mencari si darah manis untuk menggunakan servis saya.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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