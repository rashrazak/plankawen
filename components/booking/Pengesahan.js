import React from 'react'

function Pengesahan() {
    return (
        <div className="form-width">
            <div className="div-pengesahan">
                <h2>Pengesahan</h2>
                <div className="">
                    <input type="checkbox"/>
                    <p>I hereby give PlanKawen the permission to share my customer data with the Service Provider, its parent company, its franchisor entity and each of their respective affiliates and subsidiaries. I can find detailed information about the customer data sharing here.</p>
                </div>
                <button type="button" className="btn btn-tempah">Tempah</button>
            </div>
            <style jsx>{`
                .form-width { max-width: 490px; margin-bottom: 20px;}
                .div-pengesahan { background-color: #FFF; box-shadow: 0px 6px 15px rgba(117, 132, 142, 0.3); padding: 20px; }
                .div-pengesahan > div { display: flex; justify-content: flex-start; margin-top: 12px;}
                h2 { font-style: normal; font-weight: normal; font-size: 1rem; color: #2B2B2B;}
                .btn-tempah { background-color: #ED795F; border: 2px solid #ED795F ;border-radius: 8px; width: 100%; font-style: normal; font-weight: 600;font-size: 1rem;line-height: 22px;color: #FFF; height: 50px;}
                p { font-style: normal; font-weight: normal;font-size: 0.875rem;color: #75848E; margin-left: 10px;}
            `}</style>
        </div>
    )
}

export default Pengesahan
