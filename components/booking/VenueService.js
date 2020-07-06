import React, {useState, useEffect, useContext} from 'react'
import SearchExtraService from '../booking/SearchExtraService'
import ViewExtraService from './ViewExtraService'


function VenueService() {
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
    const [viewVendor, setViewVendor] = useState(null)

    useEffect(() => {
        if (!name) {
            eventSelection()
        }
    }, [name])


    const eventSelection = () => {

        setName('Venue')
    }

    useEffect(() => {
        setSelect(selection)
        setclick(false)
    }, [click])

   

    const getReturnService = (data,vendor) =>{
        console.log(data)
        setViewData(true)
        setViewService(data)
        setViewVendor(vendor)
    }

    return (
        <React.Fragment>
            <div className="">
                {
                    viewData && viewService ?
                    <React.Fragment>
                        <div>
                            <ViewExtraService sendData={viewService} sendVendor={viewVendor} closeData={setViewData}/>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
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

export default VenueService
