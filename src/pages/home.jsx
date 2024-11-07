import React from 'react'
import { Habout } from '../components/Habout'
import { Hservice } from '../components/Hservice'
import { Hgallery } from '../components/Hgallery'
import { Testimonial } from '../components/Testimonial'
import { Hcontact } from '../components/Hcontact'

export const Home = () => {
    return (
        <div>
            <header className="head mb-4">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        {/*  Left: Text Logo  */}
                        <a className="navbar-brand logo-text" href="/">
                            <span style={{ color: '#B2984A' }}>MANJUS</span> MAKEOVER <br></br> ARTISTRY
                        </a>

                        {/* Toggle button for mobile view  */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Center: Navigation Links */}
                        <div className="collapse navbar-collapse justify-content-center gap-5" id="navbarNav">
                            <ul className="navbar-nav mb-2 mb-lg-0 me-2">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/About">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Service">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Gallery">GALLERY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Contact">CONTACT</a>
                                </li>
                            </ul>


                            {/* Right: Social Media Links */}
                            <div className="d-flex">
                                <a href="https://facebook.com" className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://wa.me/7010957243" className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/manjus_makeover_artistry/profilecard/?igsh=YmFscjN4dDZmdzB3" className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>


                    </div>
                </nav>

                <div className="hero-section">
                    <p>Welcome to Manjus Makeover Artistry</p>
                    <h1 style={{ fontWeight: 'bold' }} data-aos="fade-right">Your Trusted</h1>
                    <h1 style={{ fontWeight: 'bold', color: '#B2984A' }} data-aos="fade-right">Bridal Makeup Artist</h1>
                    <h5>In Chennai and all over Tamil Nadu</h5>

                    <h6>Your wedding day is one of the most special moments of your life,
                        and you deserve to look nothing less than perfect.</h6>

                    <a href="/Contact"><button>BOOK NOW</button></a>
                </div>


            </header>


            <Habout />


            <Hservice />

            <Hgallery />

            <Testimonial />

            <Hcontact />
        </div>
    )
}

