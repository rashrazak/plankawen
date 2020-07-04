import React from 'react'
import ExtraService from '../../../components/booking/ExtraService'
import Layout from '../../../components/Header'
import SideBookBar from '../../../components/booking/SideBar'

function index() {
    return (
        <Layout>
            <div className="booking-master">
                <div className="booking-container">
                    <ExtraService />
                </div>
                <SideBookBar/>
            </div>
            <style jsx>{`
                .booking-master { display: flex; }
                .booking-container { width: calc(100vw - 300px); padding: 50px 0 20px 120px; height: calc(100vh - 57px); overflow-x: scroll;}
            `}</style>
        </Layout>
    )
}

export default index
