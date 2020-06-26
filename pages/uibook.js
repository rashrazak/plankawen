import React from 'react'
import Layout from '../components/Header'
import SideBarBook from '../components/book/SideBar'
import SelectState from '../components/book/SelectState'
import DatePicker from '../components/book/DatePicker'
import TimePicker from '../components/book/TimePicker'
import SelectBookType from '../components/book/SelectBookType'

function uibook() {
    return (
        <Layout>
            <div className="booking-master">
                <div className="booking-container">
                    <h2>Butiran tempahan</h2>
                    <SelectState/>
                    <DatePicker/>
                    <TimePicker/>
                    <SelectBookType/>
                </div>
                <SideBarBook/>
            </div>
            <style jsx>{`
                .booking-master { display: flex; }
                .booking-container { width: calc(100vw - 300px); padding: 50px 0 20px 120px;}
                h2 { font-style: normal;font-weight: normal;font-size: 1rem;color: #3E3E3E;}
            `}</style>
        </Layout>
    )
}

export default uibook
