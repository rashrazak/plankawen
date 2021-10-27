import React from 'react'
import Table from 'react-bootstrap/Table'

function History() {
    return (
        <div className="container">
            <h4>Booking History</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date Created</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>10/12/2011</td>
                        <td>RM 40000</td>
                        <td style={{textAlign:'center'}}><button>Download</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>11/12/2011</td>
                        <td>RM 50000</td>
                        <td style={{textAlign:'center'}}><button>Download</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>13/12/2011</td>
                        <td>RM 12000</td>
                        <td style={{textAlign:'center'}}><button>Download</button></td>
                    </tr>
                </tbody>
            </Table>
            <style jsx>{`
                h4 { margin: 30px 0; text-align:center; font-weight:bold;}
            `}</style>
        </div>
    )
}

export default History
