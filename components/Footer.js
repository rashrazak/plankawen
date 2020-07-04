import React from 'react'
import ActiveLink from '../components/ActiveLink'

function Footer() {
    return (
        <div>
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
            <style jsx>{`
                footer{padding: 10px;display: flex;justify-content: space-between;}
                .footer-first > img, .footer-first > p{display: inline-block;vertical-align: top;}
                .footer-first > p{font-weight: 700;color: #BABABA;font-size: 12px;width: 200px;margin-left: 30px;margin-bottom: 0;margin-top: 5px;}
                .footer-second > a{font-weight: 400;color: #3E3E3E;font-size: 12px;margin: 0 15px;}
                @media screen and ( max-width: 480px) {
                    footer{ flex-wrap: wrap; justify-content: center; margin-top: 30px;}
                    .footer-first { text-align: center;}
                    .footer-first > p { margin: 0;}
                    .footer-second { text-align: center; margin: 20px 0;}
                }
            `}</style>
        </div>
    )
}

export default Footer
