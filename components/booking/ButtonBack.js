import React from 'react'

function ButtonBack() {
    return (
        <div>
            <button type="button" className="btn-back">Back</button>
            <style jsx>{`             
                div { margin-bottom: 20px;}   
                .btn-back { border: 1px solid #F4F4F4; background-color: #F4F4F4; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #3E3E3E; height: 50px; width: 160px; background-image:url('/images/icon/arrow-left.png'); background-repeat: no-repeat; background-position: center left 10px; background-size: 25px;}
            `}</style>
        </div>
    )
}

export default ButtonBack
