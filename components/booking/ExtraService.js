import React, {useState, useEffect, useContext} from 'react'
import SearchExtraService from '../booking/SearchExtraService'
import ViewExtraService from './ViewExtraService'


function ExtraService() {
    const selection = [
        {name:'Venue',isActive:false},
        {name:'Canopy',isActive:false},
        {name:'KadBanner',isActive:false},
        {name:'WeddingDress',isActive:false},
        {name:'Makeup',isActive:false},
        {name:'Photographer',isActive:false},
        {name:'Videographer',isActive:false},
        {name:'Pelamin',isActive:false},
        {name:'Caterer',isActive:false},
        {name:'Hantaran',isActive:false},
        {name:'Persembahan',isActive:false},
        {name:'DoorGift',isActive:false},
        {name:'Others',isActive:false},
    ]
    const [select, setSelect] = useState(selection)
    const [click, setclick] = useState(false)
    const [name, setName] = useState('')
    const [viewData, setViewData] = useState(false) //switch
    const [viewService, setViewService] = useState(null) //data

    const eventSelection = (index, e) => {
        setSelect(selection)
        e.preventDefault()
        setSelect(select[index].isActive = true) 
        setclick(true)
        setName(select[index].name)
    }

    useEffect(() => {
        setSelect(selection)
        setclick(false)
    }, [click])


    const getReturnService = (data) =>{
        console.log(data)
        setViewData(true)
        setViewService(data)
    }

    return (
        <React.Fragment>
            <div className="">
                {
                    viewData && viewService ?
                    <React.Fragment>
                        <div>
                            <ViewExtraService sendData={viewService} closeData={setViewData}/>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="form-width">
                            <label>Anda memerlukan servis tambahan?</label>
                            <div className="choose-category">
                                {/* <button onClick={(e) => eventSelection(0, e)} className={`btn-category btn-venue Venue `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-venue.png"/>
                                    Lokasi
                                </button>{' '} */}
                            
                                <button onClick={(e) => eventSelection(2, e)} className={`btn-category btn-invitation KadBanner `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-cards.png"/>
                                    Kad & Banner
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(3, e)} className={`btn-category btn-dress WeddingDress `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-dress.png"/>
                                    Baju Pengantin
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(4, e)} className={`btn-category btn-makeup Makeup `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-makeup.png"/>
                                    Make Up
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(5, e)} className={`btn-category btn-photo Photographer `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-photography.png"/>
                                    Photographer
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(6, e)} className={`btn-category btn-video Videographer `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-videography.png"/>
                                    Videographer
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(7, e)} className={`btn-category btn-pelamin Pelamin `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-pelamin.png"/>
                                    Pelamin
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(8, e)} className={`btn-category btn-catering Caterer `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-catering.png"/>
                                    Caterer
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(9, e)} className={`btn-category btn-hantaran Hantaran `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-hantaran.png"/>
                                    Hantaran
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(10, e)} className={`btn-category btn-persembahan Persembahan `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-performance.png"/>
                                    Persembahan
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(11, e)} className={`btn-category btn-doorgift DoorGift `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-goodiebag.png"/>
                                    Door Gift
                                    
                                </button>{' '}
                                <button onClick={(e) => eventSelection(12, e)} className={`btn-category btn-others Others `}>
                                <img className={`icon-service`} src="/images/icon/services-icon/dark/ico-others.png"/>
                                    Others
                                    
                                </button>{' '}
                            </div>
                        </div>
                        <div className="">
                            {
                                name ? 
                                <div className="search-box">
                                    <SearchExtraService serviceName={name} returnService={getReturnService} />
                                </div>
                                :
                                ''
                            }
                        </div>
                    </React.Fragment>

                }
                
            </div>
            <style jsx>{`
                label { font-style: normal;font-weight: normal;font-size: 1rem;color: #3E3E3E;}
                .form-width { max-width: 750px; margin-bottom: 30px;}
                .btn-category { background-color: #FFF; border: 1px solid #EAEAEA;border-radius: 6px; font-style: normal;font-weight: bold;font-size: 0.75rem;color: #3E3E3E; height: 50px; width: 143px; margin-bottom: 10px; cursor: pointer}
                .icon-service{width:15%;height:50%;margin-bottom:5px;margin-right:5px}
                .search-box { width: 100%;}
            `}</style>
        </React.Fragment>
    )
}

export default ExtraService
