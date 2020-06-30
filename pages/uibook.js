import React from 'react'
import Layout from '../components/Header'
import SideBarBook from '../components/booking/SideBar'
import SelectState from '../components/booking/SelectState'
import DatePicker from '../components/booking/DatePicker'
import TimePicker from '../components/booking/TimePicker'
import SelectBookType from '../components/booking/SelectBookType'
import MaklumatTempahan from '../components/booking/MaklumatTempahan'
import MaklumatPeribadi from '../components/booking/MaklumatPeribadi'
import Pengesahan from '../components/booking/Pengesahan'
import ThankYou from '../components/booking/ThankYou'
import ButtonNext from '../components/booking/ButtonNext'
import ButtonBack from '../components/booking/ButtonBack'

function uibook() {
    return (
        <Layout>
            <div className="booking-master">
                <div className="booking-container">
                    <ButtonBack/>
                    <h2>Butiran tempahan</h2>
                    <SelectState/>
                    <DatePicker/>
                    <TimePicker/>
                    <SelectBookType/>
                    {/* <MaklumatTempahan/> */}
                    {/* <MaklumatPeribadi/> */}
                    {/* <Pengesahan/> */}
                    {/* <ThankYou/> */}
                    <ButtonNext/>
                </div>
                <SideBarBook/>
            </div>
            <style jsx>{`
                .booking-master { display: flex; display: flex;}
                .booking-container { width: calc(100vw - 300px); padding: 50px 0 20px 120px; position: relative;}
                h2 { font-style: normal;font-weight: normal;font-size: 1rem;color: #3E3E3E; }
            `}</style>
        </Layout>
    )
}

export default uibook
