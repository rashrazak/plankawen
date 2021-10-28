import React from 'react'

function ThankYou() {

    const kembali = () =>{
        window.location.href = "/booking/history"
    }
    return (
        <div className="form-width">
            <div className="div-thankyou">
                <img className="img-responsive" src="/images/backgrounds/500x200.jpg"/>
                <div className="">
                    <h6>Terima Kasih :)</h6>
                    <p>We will inform our Service Provider regarding your request. They will reply with the arrangement of time and date for site visit.</p>
                    <button type="button" className="btn btn-home" onClick={kembali}>Kembali ke Home</button>
                    
                </div>
            </div>
            <style jsx>{`
                .form-width { max-width: 490px; margin-bottom: 20px; margin: auto; }
                .div-thankyou { background-color: #FFF; box-shadow: 0px 6px 15px rgba(117, 132, 142, 0.3); padding: 20px; }
                .div-thankyou > img { width: 100%; }
                .div-thankyou > div { margin: 22px 0 20px 0;}
                h6 { font-style: normal; font-weight: normal;font-size: 1rem; color: #2B2B2B;}
                p { font-style: normal; font-weight: normal; font-size: 1rem; color: #75848E;}
                .btn-home { background-color: #ED795F; border: 2px solid #ED795F ;border-radius: 8px; width: 100%; font-style: normal; font-weight: 600;font-size: 1rem;line-height: 22px;color: #FFF; height: 50px;}
            `}</style>
        </div>
    )
}

export default ThankYou
