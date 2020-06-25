import Head from 'next/head'
import React, {useEffect, useContext, useState} from 'react'
import ActiveLink from '../components/ActiveLink'
import { LSContext } from '../context/LSContext'

const Layout = ({ children, title = 'This is the default title' }) => 
{
	const {loginCtx} = useContext(LSContext)

	return(
    	<div>
        	<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
        	</Head>

        	<header>
        		
				{
					loginCtx == true ?

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
							{/* <ActiveLink className="" href='/contact'><img className="ico-bell" src="/images/icon/bell.png"/></ActiveLink>
							<ActiveLink className="" href='/contact'><img className="user-oval" src="/images/icon/ico-user-placeholder.png"/>Tom John</ActiveLink> */}
							<ul className="nav-login">
								<li className="bell-divider"><img className="ico-bell" src="/images/icon/bell.png"/></li>
								<li><img className="user-oval" src="/images/icon/ico-user-placeholder.png"/>Tom John</li>
							</ul>
						</nav>
					</div>

				}
          		
        	</header>

        	{children}

        <footer>
			<div className="footer-first">
				<img src="/images/logo/logo-official.png" />
				<p>@ Copywright Plankawen 2019 Kuala Lumpur, Malaysia</p>
			</div>
			<div className="footer-second">
				<ActiveLink href='/'>Tentang Kami </ActiveLink>{' '}
				<ActiveLink href='/about'>Hubungi Kami</ActiveLink>{' '}
				<ActiveLink href='/contact'>Blog</ActiveLink>
				<a href=""><img src="/images/icon/s-facebook.png"/></a>
				<a href=""><img src="/images/icon/s-instagram.png"/></a>
			</div>
		</footer>
      </div>
    )
}
export default Layout