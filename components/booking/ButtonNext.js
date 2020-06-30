import React from 'react'

function ButtonNext() {
    return (
        <div>
            <button type="button" className="btn btn-next">Next</button>
            <style jsx>{`
                div { position: absolute; bottom: 10px; right: 30px;}
                .btn-next { background-color: #ED795F; border-radius: 8px; font-style: normal; font-weight: 600;font-size: 0.875rem;text-align: center;color: #FFF; height: 50px; width: 160px; background-image:url('/images/icon/arrow-right-white.png'); background-repeat: no-repeat; background-position: center right 10px; background-size: 25px;}
            `}</style>
        </div>
    )
}

export default ButtonNext
