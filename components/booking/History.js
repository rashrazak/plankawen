import React,{useContext, useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import ReactPDF2 from './ReactPDF'
import { LSContext } from '../../context/LSContext'
import firebase from '../../config/firebaseConfig'
import * as ls from 'local-storage'

function History() {
    const bookTypes = ['book-extra-services','book-package-services','book-venue-services']
    const {email} = ls.get('client') || {}
    const {Download} = useContext(LSContext)
    // useEffect(() => {
    //     ReactPDF.renderToStream()
    // }, [])
    const [flick, setFlick] = useState(false)
    const [viewData, setViewData] = useState(null)
    const [pdfData, setPdfData] = useState([])
    

    useEffect(() => {
        const getQueries = () =>{
            if (email) {
                bookTypes.map(async (v)=>{
                    var x = await firebase.checkBookingType(v,email)
                    await x.forEach(function(doc) {
                        let x = doc.id;
                        let y = doc.data()
                        console.log(y)
                        let data = {...y, id:x}
                        setPdfData((old) => [...old, data])
                    })
                })        
            }
        }    
        getQueries()
        
    }, [email])

    useEffect(() => {
        console.log(pdfData)
    }, [pdfData])

    const clickView = (v)=>{
        setViewData(null)
        setFlick(false)
        setViewData(v)
        setFlick(true)
    }

    
    
    return (
        <div className="container">
            <h4>Booking History</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date Created</th>
                        <th>Total Price</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pdfData.length > 0 && pdfData.map((v,i)=>{
                      return (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{v.dateCreated.toDate().toDateString()}</td>
                            <td>RM {v.totalPrice}</td>
                            <td>{v.type}</td>
                            <td>{v.status}</td>
                            <td style={{textAlign:'center'}}><button onClick={()=>clickView(v)}>View PDF</button></td>
                        </tr>
                      )  
                    })}
                    <tr>
                        <td>1</td>
                        <td>10/12/2011</td>
                        <td>RM 40000</td>
                        <td>RM 40000</td>
                        <td>RM 40000</td>
                        <td style={{textAlign:'center'}}><button onClick={()=>clickView()}>View PDF</button></td>
                    </tr>
                </tbody>
            </Table>
            {
                flick && viewData && <ReactPDF2 pdfData={viewData} />
            
            }
            
            <style jsx>{`
                h4 { margin: 30px 0; text-align:center; font-weight:bold;}
            `}</style>
        </div>
    )
}
import firebaseConfig from '../../config/firebaseConfig'

export default History
