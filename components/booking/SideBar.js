import React from 'react'

function SideBar({step}) {
    return (
        <div className="width">
            <div className="container-sidebar">
                <div className="">
                   <div className="div-langkah">
                        <p>Langkah</p>
                        <h4><span>{step}</span>/05</h4>
                   </div>
                   <div className="div-total">
                        <p>Subtotal <span>MYR 0.00</span></p>
                        <p>Discount <span>MYR 0.00</span></p>
                        <p>Total <span>MYR 0.00</span></p>
                   </div>
                </div>
                <div className="">
                    <button type="button" className="btn btn-review">Review</button>
                </div>
            </div>
            <style jsx>{`
                .container-sidebar { background-color: #F5F7F8; width: 300px; height: calc(100vh - 57px); padding: 30px; margin-left: auto;}
                .div-langkah { text-align: right;}
                .div-langkah > p { font-style: normal;font-weight: normal;font-size: 1rem;color: #9B9B9B; margin: 0;}
                .div-langkah > h4 { margin: 0; font-style: normal;font-weight: normal;font-size: 2rem;color: #9B9B9B;}
                .div-langkah > h4 > span { color: #ED795F;}
                .div-total > p { font-style: normal; font-weight: normal;font-size: 0.875rem;color: #75848E; margin: 0;}
                .div-total > p > span { color: #2B2B2B; float: right;}
                .div-total > p:last-child > span {font-weight: 600;}
                .btn-review { background-color: #ED795F;mborder: 2px solid #ED795F;border-radius: 8px; font-style: normal;font-weight: 600;font-size: 1rem;text-align: center;color: #FFF; height: 50px; width: 100%; margin-top: 31px;}
                @media screen and ( max-width: 480px) {
                    .container-sidebar { height: 100%; width: 100%; padding: 20px;}
                    .width { width: 100%;}
                }
            `}</style>
        </div>
    )
}

export default SideBar
