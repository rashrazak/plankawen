import React from 'react'

function MaklumatPeribadi() {
    return (
        <div className="form-width">
            <div className="div-maklumat-peribadi">
                <h2>Maklumat peribadi</h2>
                <div className="div-maklumat">
                    <p><span><img src="/images/icon/user.png"/></span> [Name]</p>
                    <p><span><img src="/images/icon/email.png"/></span> [Email]</p>
                    <p><span><img src="/images/icon/phone.png"/></span> [Phone]</p>
                </div>
                <p className="p-edit"><span><img src="/images/icon/edit.png"/></span> Edit</p>
            </div>
            <style jsx>{`
                .form-width { max-width: 490px; margin: auto; margin-bottom: 20px; }
                .div-maklumat-peribadi { background-color: #FFF; box-shadow: 0px 6px 15px rgba(117, 132, 142, 0.3); padding: 20px; }
                h2 { font-style: normal; font-weight: normal; font-size: 1rem; color: #2B2B2B;}
                .div-maklumat-peribadi { position: relative; }
                .p-edit { font-style: normal;font-weight: normal;font-size: 0.875rem;color: #2B2B2B; position: absolute; top: 20px; right: 20px; cursor: pointer;}
                .div-maklumat > p { font-style: normal; font-weight: normal;font-size: 1rem ;color: #75848E; margin-bottom: 8px;}
                .div-maklumat { margin-top: 12px;}
            `}</style>
        </div>
    )
}

export default MaklumatPeribadi
