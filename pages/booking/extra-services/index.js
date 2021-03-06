import React, {useState} from 'react'
import ExtraService from '../../../components/booking/ExtraService'
import Layout from '../../../components/Header'
import SideBookBar from '../../../components/booking/SideBar'
import ButtonBack from '../../../components/booking/ButtonBack'
import ButtonNext from '../../../components/booking/ButtonNext'

function index() {

    const [view, setView] = useState(false)
    return (
        <Layout>
            <div className="booking-master">
                <div className="booking-container">
                    <ButtonBack />
                    <ExtraService view={setView} />
                    {!view && <ButtonNext />}
                </div>
                <SideBookBar step={'02'}/>
            </div>
            <style jsx>{`
                .booking-master { display: flex; }
                .booking-container { width: calc(100vw - 300px); padding: 50px 0 20px 120px; height: calc(100vh - 57px); overflow-x: scroll; position: relative;}
                @media screen and ( max-width: 480px) {
                    .booking-master { flex-wrap: wrap;}
                    .booking-container { width: 100%; padding: 20px; height: 100%;}
                }}
            `}</style>
        </Layout>
    )
}

export default index
