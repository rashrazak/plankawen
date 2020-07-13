import React from 'react'
import Layout from '../../components/Header'
import SideBarBook from '../../components/booking/SideBar'
import ThankYou from '../../components/booking/ThankYou'

function thankYou() {
    return (
        <Layout>
           <div className="booking-master">
                <div className="booking-container">
                    <ThankYou/>
                </div>
                <SideBarBook step={'05'}/>
            </div>
            <style jsx>{`
                .booking-master { display: flex;}
                .booking-container { width: calc(100vw - 300px); padding: 50px 0 20px 120px; position: relative;}
                h2 { font-style: normal;font-weight: normal;font-size: 1rem;color: #3E3E3E; }
                @media screen and ( max-width: 480px) {
                    .booking-master { flex-wrap: wrap;}
                    .booking-container { width: 100%; padding: 20px;}
                }
            `}</style>
        </Layout>
    )
}

export default thankYou
