import Head from 'next/head'
import React, {useEffect, useContext, useState} from 'react'
import ActiveLink from '../components/ActiveLink'
import { LSContext } from '../context/LSContext'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer'
import NavDropdown from 'react-bootstrap/NavDropdown'
import firebase from '../config/firebaseConfig'

const Layout = ({ children, title = 'This is the default title' }) => 
{
	const {loginCtx, clientCtx} = useContext(LSContext)

	// function logout() {
    //     firebase.signOut().then( ()=> {
    //         localStorage.removeItem('user');
    //         router.push('/')
    //       })
    // }
 
	var styles = {
		navBar: {
			backgroundColor: '#FFF',
			boxShadow: '-6px 0px 15px rgba(117, 132, 142, 0.3)',
		},
		nav: {
			alignItems: 'center',
		},
		buttonOrange: {
			backgroundColor: '#ED795F',
			borderRadius: 8,
			fontWeight: 600,
			fontSize: '1rem',
			fontColor: '#FFF',
			border: 'none',
			height: 50,
			width: 165,
		},

	}
	return(
    	<div>
        	<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <script type="module" src="https://unpkg.com/cart-localstorage@1.1.4/dist/cart-localstorage.min.js" type="text/javascript" defer={true}></script>
        	</Head>

        	<header>

			<Navbar expand="lg" style={styles.navBar}>
				<Navbar.Brand href="#"><img src="/images/logo/logo-official.png" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" /> 
				<Navbar.Collapse id="basic-navbar-nav">

					{
						loginCtx == false ?

						<Nav className="ml-auto" style={styles.nav}>
							<Nav.Link href="https://plankawen.wixsite.com/website/tentang-kami">Tentang Kami</Nav.Link>
							<Nav.Link href="https://plankawen.wixsite.com/website/hubungi-kami">Hubungi Kami</Nav.Link>
							<Nav.Link href="https://plankawen.wixsite.com/website/blog">Blog</Nav.Link>
							<Nav.Link href="/login"><Button style={styles.buttonOrange}>Log Masuk</Button></Nav.Link>
						</Nav>
						:
						<Nav className="ml-auto" style={styles.nav}>
							<Nav.Link href="#home"><img className="ico-bell" src="/images/icon/bell.png"/></Nav.Link>
							{/* <Nav.Link href="#link"><img className="user-oval" src="/images/icon/ico-user-placeholder.png"/>{clientCtx.name ? clientCtx.name : 'user'}</Nav.Link> */}
							<NavDropdown title={clientCtx.name ? clientCtx.name : 'user'} id="basic-nav-dropdown dropdown-button-drop-left" className="dropdown-abs">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/signout">Log out</NavDropdown.Item>
							</NavDropdown>
							
						</Nav>
					}
					
				</Navbar.Collapse>
			</Navbar>

        	</header>

        	{children}
			
			<Footer/>
			<style jsx>{`
				.hehe { left: -70px;}
			`}</style>
      </div>
    )
}
export default Layout