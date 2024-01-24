import React from 'react'
import LogoComplete from './LogoComplete'
import * as Fa from "react-icons/fa";
function Footer() {
  return (
    <section >
        <div className='default-padding top-margin footer'>
        <footer className='default-padding'>
            <div>
                <LogoComplete/>
                <div className="faq-answer footer-p">ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</div>
            </div>
            <div className='linksFooter'>
            <ul>
                    <li className='footer_header'> Products</li>
                    <li>Overview</li>
                    <li>Features</li>
                    <li>Solutions</li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                </ul>
                <ul>
                    <li className='footer_header'> Company</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li className='footer_header'> Resources</li>
                    <li>Blog</li>
                    <li>Events</li>
                    <li>Help center</li>
                    <li>Tutorials</li>
                    <li>Support</li>
                </ul>
                <ul>
                    <li className='footer_header'> Legal</li>
                    <li>Tearms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Licenses</li>
                    <li>Contact</li>
                </ul>
                <div className="getApps">
                    <div className='headerSubtitle'>
                        <div>Get the app</div>
                    </div>
                    <img src={require("../images/appstore.png")} alt="" />
                    <img src={require("../images/playstore.png")} alt="" />
                </div>
            </div>
        </footer>
</div>
        <div className='bg-gray default-padding  top-margin'>
            <div className='default-padding'>
                <div className="default-padding copyright">
                    <p>© 2023 ClearLink. All rights reserved.</p>
                    <ul>
                    <li> <Fa.FaLinkedin/></li>
                    <li> <Fa.FaTwitter/></li>
                        <li> <Fa.FaFacebook/></li>
                        <li> <Fa.FaInstagram/></li>
                        <li> <Fa.FaGithub/></li>
                        <li> <Fa.FaYoutube/></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer
