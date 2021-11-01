import React from 'react'
import MaklumatTempahan from '../../../components/booking/MaklumatTempahan'
import MaklumatPeribadi from '../../../components/booking/MaklumatPeribadi'
import Pengesahan from '../../../components/booking/Pengesahan'
import Layout from '../../../components/Header'
import SideBookBar from '../../../components/booking/SideBar'
import ButtonBack from '../../../components/booking/ButtonBack'
import ButtonNext from '../../../components/booking/ButtonNext'

function tnc() {
    return (
        <Layout>
            <div className="booking-master">
                <div className="booking-container">
                    <ButtonBack />
                    <MaklumatTempahan/>
                    <MaklumatPeribadi/>
                    <Pengesahan/>
                </div>
                <SideBookBar  step={'03'} />
            </div>
            <style jsx>{`
                .booking-master { display: flex; }
                .booking-container { width: calc(100vw - 300px); padding: 50px 0 20px 120px; height: calc(100vh - 57px); overflow-x: scroll;}
            `}</style>
        </Layout>
    )
}

export default tnc
