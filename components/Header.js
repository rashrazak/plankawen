import Head from 'next/head'
import ActiveLink from '../components/ActiveLink'
import '../css/bootstrap.min.css'
import '../css/global.css'
// import Logo from '../images/logo/logo-official.png'


// const Layout = ({ children, title = 'This is the default title' }) => (
const Layout = ({ children, title = 'This is the default title' }) => 
{
	return(
    	<div>
        	<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
        	</Head>

        	<header>
        		<div className="">
					<img src="/static/images/logo/logo-official.png" />
          		</div>
          		<nav>
            		<ActiveLink href='/'>Tentang Kami </ActiveLink>{' '}
            		<ActiveLink href='/about'>Hubungi Kami</ActiveLink>{' '}
            		<ActiveLink href='/contact'>Blog</ActiveLink>
					<a href=""><button type="button" className="btn btn-register">Daftar Masuk</button></a>
          		</nav>
        	</header>

        	{children}

        <footer>
			<div className="footer-first">
				<img src="/static/images/logo/logo-official.png" />
				<p>@ Copywright Plankawen 2019 Kuala Lumpur, Malaysia</p>
			</div>
			<div className="footer-second">
				<ActiveLink href='/'>Tentang Kami </ActiveLink>{' '}
				<ActiveLink href='/about'>Hubungi Kami</ActiveLink>{' '}
				<ActiveLink href='/contact'>Blog</ActiveLink>
				<a href=""><img src="/static/images/icon/s-facebook.png"/></a>
				<a href=""><img src="/static/images/icon/s-instagram.png"/></a>
			</div>
		</footer>
      </div>
    )
}
export default Layout