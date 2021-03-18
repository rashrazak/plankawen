import React,{useContext, useState, useEffect} from 'react'
import {BookingMainContext} from '../../context/BookingMainContext'


function SelectBookType() {
    
    const {setMain, getMain} = useContext(BookingMainContext)
    const {setBookCtxType} = setMain
    const {bookCtxType} = getMain

    const [selectType, setSelectType] = useState('');

    useEffect(() => {
        if (selectType) {
            setBookCtxType(selectType)
        } else {
            setSelectType(bookCtxType)
        }
    }, [selectType])
    return (
        <div className="form-width">
            <label>Pilihan tempahan</label>
            <div className="div-select-type">
                <div className={selectType == 'venue-services' ?'active':''} onClick={()=>setSelectType('venue-services')} >
                    <img src="/images/backgrounds/pilih-venue-placeholder.jpg"/>
                    <div className="select-type-words">
                        <p>Pilih venue</p>
                    </div>
                </div>
                <div className={selectType == 'package-services' ?'active':''} onClick={()=>setSelectType('package-services')} >
                    <img src="/images/backgrounds/pilih-package-placeholder.jpg"/>
                    <div className="select-type-words">
                        <p>Pilih pakej</p>
                    </div>
                </div>
                <div className={selectType == 'extra-services' ?'active':''} onClick={()=>setSelectType('extra-services')} >
                    <img src="/images/backgrounds/servic-lain-placeholder.jpg"/>
                    <div className="select-type-words">
                        <p>Servis lain-lain</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .form-width { max-width: 500px; margin-bottom: 10px; margin-top: 20px;}
                label { font-style: normal;font-weight: normal;font-size: 1rem;color: #3E3E3E;}
                .div-select-type { display: flex; justify-content: space-between;}
                .div-select-type > div { cursor: pointer; border: 1px solid #F59A86; border-radius: 8px; width: 160px;}
                .div-select-type > div:hover { background-color: #ED795F; transition: .3s all;}
                .div-select-type > div:hover > div > p { color: #FFF;}
                .active    { background-color: #ED795F; transition: .3s all;}  
                .div-select-type > div > img { border-top-right-radius: 8px; border-top-left-radius: 8px;}
                .select-type-words > p { font-style: normal;font-weight: 600;font-size: 0.875rem;text-align: center;color: #ED795F; margin: 0; padding: 15px;}
                .active > div > p { color: #FFF;} 
                @media screen and ( max-width: 480px) {
                    .div-select-type { overflow: scroll;}
                    .div-select-type > div { margin-right: 15px;}
                }
            `}</style>
        </div>
    )
}

export default SelectBookType
