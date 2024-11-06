import React from 'react'
import logo from '../assets/logo.png'

export const Footer = () => {
    return (
        <div>
            <footer className="footer pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        {/* Column 1: Logo */}
                        <div className="col-md-3 mb-3">
                            <a href='/'><img src={logo} alt="Logo" className="footer-logo img-fluid mb-3" /></a>
                            <h5>Manjus Makeover Artist</h5>

                            <h6 className="mt-3">Connect with Chennai’s Trusted Bridal Makeup Artist</h6>
                        </div>


                        {/* Column 2: Services  */}
                        <div className="col-md-3 mb-3">
                            <h5>Services</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Muhurtham Makeup</a></li>
                                <li><a href="/">Reception Makeup</a></li>
                                <li><a href="/">Engagement Makeup</a></li>
                                <li><a href="/">Pre-Wedding Makeup</a></li>
                                <li><a href="/">Post-Wedding Makeup</a></li>
                                <li><a href="/">Party Makeup</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div className="col-md-3 mb-3">
                            <h5>Follow us on</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://www.facebook.com/">Facebook</a></li>
                                <li><a href="https://www.instagram.com/manjus_makeover_artistry/profilecard/?igsh=YmFscjN4dDZmdzB3">Instagram</a></li>
                                <li><a href="https://wa.me/7010957243" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                            </ul>
                        </div>

                        {/*  Column 4: Contact Info  */}
                        <div className="col-md-3 mb-3">
                            <h5>Contact Us</h5>
                            <p><strong>Phone:</strong> +91 7010957243</p>
                            <p className="mt-2"><strong>Email:</strong><a href='mailto:yami.manju@gmail.com' style={{ textDecoration: 'none', color: 'white' }}> yami.manju@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

