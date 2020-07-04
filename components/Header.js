import Head from 'next/head'
import React, {useEffect, useContext, useState} from 'react'
import ActiveLink from '../components/ActiveLink'
import { LSContext } from '../context/LSContext'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Layout = ({ children, title = 'This is the default title' }) => 
{
	const {loginCtx} = useContext(LSContext)
 
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
        	</Head>

        	<header>
        		
				{/* {
					loginCtx == false ?

					<div className="header-div header-padding">
						<div className="">
							<img src="/images/logo/logo-official.png" />
						</div>
						<nav>
							<ActiveLink href='/'>Tentang Kami </ActiveLink>{' '}
							<ActiveLink href='/about'>Hubungi Kami</ActiveLink>{' '}
							<ActiveLink href='/contact'>Blog</ActiveLink>
							<a href="/login"><button type="button" className="btn btn-register">Daftar Masuk</button></a>
						</nav>
					</div>
					:
					<div className="header-div header-login">
						<div className="">
							<img src="/images/logo/logo-official.png" />
						</div>
						<nav className="">
							<ActiveLink className="" href='/contact'><img className="ico-bell" src="/images/icon/bell.png"/></ActiveLink>
							<ActiveLink className="" href='/contact'><img className="user-oval" src="/images/icon/ico-user-placeholder.png"/>Tom John</ActiveLink>
							<ul className="nav-login">
								<li className="bell-divider"><img className="ico-bell" src="/images/icon/bell.png"/></li>
								<li><img className="user-oval" src="/images/icon/ico-user-placeholder.png"/>Tom John</li>
							</ul>
						</nav>
					</div>

				} */}

			<Navbar expand="lg" style={styles.navBar}>
				<Navbar.Brand href="#home"><img src="/images/logo/logo-official.png" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">

					{
						loginCtx == true ?
						<Nav className="ml-auto" style={styles.nav}>
							<Nav.Link href="#home">Tentang Kami</Nav.Link>
							<Nav.Link href="#link">Hubungi Kami</Nav.Link>
							<Nav.Link href="#link">Blog</Nav.Link>
							<Nav.Link href="#link"><Button style={styles.buttonOrange}>Daftar Masuk</Button></Nav.Link>
						</Nav>
						:
						<Nav className="ml-auto" style={styles.nav}>
							<Nav.Link href="#home"><img className="ico-bell" src="/images/icon/bell.png"/></Nav.Link>
							<Nav.Link href="#link"><img className="user-oval" src="/images/icon/ico-user-placeholder.png"/>Tom John</Nav.Link>
						</Nav>
					}
					
				</Navbar.Collapse>
			</Navbar>

        	</header>

        	{children}
			
			<Footer/>
      </div>
    )
}
export default Layout