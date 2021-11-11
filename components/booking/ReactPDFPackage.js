import React,{useState, useEffect} from 'react'
import {PDFViewer, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

function ReactPDFPackage({pdfData}) {

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
            marginTop: 5, 
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
      
    // Create Document Component
    const MyDocument = () => (
        <PDFViewer width="100%" height="800px" showToolbar={true}>
        <Document>
          <Page>
            
            <Text style={stylesProfile.title}>Butiran Tempahan</Text> 
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
           
          </Page>
        </Document>
        </PDFViewer>
    );
    
    return (
        <MyDocument />
    )
}

export default ReactPDFPackage
