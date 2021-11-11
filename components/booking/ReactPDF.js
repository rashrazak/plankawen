import React,{useState, useEffect} from 'react'
import {PDFViewer, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ReactPDFPackage from './ReactPDFPackage';
function ReactPDF2({pdfData}) {

    

    const stylesHeader = StyleSheet.create({
        body: { 
            display: "flex", 
            margin:"10px 5px 0 5px"
        }, 
        image:{
            width:"100px",
            height:"40px"
        },
        row: { 
            flexDirection: "row" 
        }, 
        headerRight:{
            textAlign:"right",
            position:"absolute",
            right:"0px"
        }
    })

    const stylesProfile = StyleSheet.create({
        table: { 
          display: "table", 
          width: "auto", 
          borderStyle: "solid", 
          borderWidth: 1, 
          borderRightWidth: 0, 
          borderBottomWidth: 0,
          margin:"10px 5px 0 5px"
        }, 
        tableRow: { 
          margin: "auto", 
          flexDirection: "row" 
        }, 
        tableCol: { 
          width: "20%", 
          borderStyle: "solid", 
          borderWidth: 2, 
          borderLeftWidth: 0, 
          borderTopWidth: 0 ,
        },
        tableCol1: { 
            width: "30%", 
            borderStyle: "solid", 
            borderWidth: 1, 
            borderLeftWidth: 0, 
            borderTopWidth: 0,
        },  
        tableCell: { 
          marginLeft: "5px", 
          marginTop: 5, 
          fontSize: 10,
        },
        title: { 
            marginLeft: "5px", 
            marginTop: 20, 
            fontSize: 10,
            textDecoration:"underline"
          },
        tableCell1: { 
            marginLeft: "5px", 
            marginTop: 5, 
            fontSize: 8,
            color:"blue" 
          }
    });

    const stylesBooking = StyleSheet.create({
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderRightWidth: 0, 
        borderBottomWidth: 0,
        margin:"10px 5px 0 5px"
    }, 
    tableRow: { 
        margin: "auto", 
        flexDirection: "row" 
    }, 
    tableCol: { 
        width: "80%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0 ,
    },
    tableCol1: { 
        width: "20%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
    },  
    tableCell: { 
        marginLeft: "5px", 
        marginTop: 5, 
        fontSize: 10,
    },
    title: { 
        marginLeft: "5px", 
        marginTop: 20, 
        fontSize: 10,
        textDecoration:"underline"
        },
    tableCell1: { 
        marginLeft: "5px", 
        marginTop: 5, 
        fontSize: 8,
        }
    });
      
    // Create Document Component
    const MyDocument = () => (
        <PDFViewer width="100%" height="800px" showToolbar={true}>
        <Document>
          <Page>
            <View style={stylesHeader.body}>
                <Image style={stylesHeader.image} src="/images/logo/logo-official.png" />
                <Text style={stylesHeader.headerRight}>INVOICE</Text>
            </View>
            <Text style={stylesProfile.title}>Butiran Pengguna</Text> 
            <View style={stylesProfile.table}> 
            {/* first Row */}
              <View style={stylesProfile.tableRow}> 
                <View style={stylesProfile.tableCol}> 
                  <Text style={stylesProfile.tableCell}>Nama</Text> 
                </View> 
                <View style={stylesProfile.tableCol1}> 
                  <Text style={stylesProfile.tableCell1}>{pdfData.name}</Text> 
                </View>
                <View style={stylesProfile.tableCol}> 
                  <Text style={stylesProfile.tableCell}>Nombor Rujukan</Text> 
                </View> 
                <View style={stylesProfile.tableCol1}> 
                  <Text style={stylesProfile.tableCell1}>{pdfData.id}</Text> 
                </View>  
              </View>
            {/* 2nd row  */}
              <View style={stylesProfile.tableRow}>
                <View style={stylesProfile.tableCol}> 
                  <Text style={stylesProfile.tableCell}>Nombor Telefon</Text> 
                </View> 
                <View style={stylesProfile.tableCol1}> 
                  <Text style={stylesProfile.tableCell1}>{pdfData.phone}</Text> 
                </View>  
                
                <View style={stylesProfile.tableCol}> 
                  <Text style={stylesProfile.tableCell}>Email</Text> 
                </View> 
                <View style={stylesProfile.tableCol1}> 
                  <Text style={stylesProfile.tableCell1}>{pdfData.email}</Text> 
                </View> 
              </View> 
              {/* 3rd row */}
              <View style={stylesProfile.tableRow}> 
                <View style={stylesProfile.tableCol}> 
                  <Text style={stylesProfile.tableCell}>Kawasan Majlis</Text> 
                </View> 
                <View style={stylesProfile.tableCol1}> 
                  <Text style={stylesProfile.tableCell1}>{pdfData.negeri} </Text> 
                </View> 
                <View style={stylesProfile.tableCol}> 
                  <Text style={stylesProfile.tableCell}>Jenis Tempahan</Text> 
                </View> 
                <View style={stylesProfile.tableCol1}> 
                  <Text style={stylesProfile.tableCell1}>{pdfData.type}</Text> 
                </View> 
              </View> 
            </View>
            <Text style={stylesProfile.title}>Butiran Tempahan</Text> 
            {
                pdfData.packageSelection ?
                <View style={stylesBooking.table}> 
                   
                   <View style={stylesBooking.tableRow}> 
                        <View style={stylesBooking.tableCol}> 
                            <Text style={stylesBooking.tableCell}>Description</Text> 
                        </View> 
                        <View style={stylesBooking.tableCol1}> 
                            <Text style={stylesBooking.tableCell}>Harga</Text> 
                        </View>
                    </View>
                    <View style={stylesBooking.tableRow}> 
                        <View style={stylesBooking.tableCol}> 
                            {/* loop */}
                        </View> 
                        <View style={stylesBooking.tableCol1}> 
                            {/* harga */}
                        </View>
                    </View>
                   
                </View>
                :
                <Text style={stylesProfile.title}>Butiran Cart</Text> 
            }
          </Page>
        </Document>
        </PDFViewer>
    );
    
    return (
        <MyDocument />
    )
}

export default ReactPDF2
