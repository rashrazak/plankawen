import React, {useState, useEffect} from 'react'
import ViewPackageService from './ViewPackageService'
import SearchPackages from './SearchPackages'

function PackageService() {

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

        setName('package')
    }

    const getReturnService = (data,vendor) =>{
        console.info(data)
        setViewData(true)
        setViewService(data)
        setViewVendor(vendor)
    }


    return (
        <div>
            {
                !viewData ? 
                <SearchPackages serviceName={name} returnService={getReturnService}/>
                :
                <ViewPackageService sendData={viewService} sendVendor={viewVendor} closeData={setViewData}/>
            }
           
           
        </div>
    )
}

export default PackageService
