import React from 'react'
import { GalleryPage } from '../components/GalleryPage'

export const Gallery = () => {
    return (
        <>
            <div className='p-4' style={{ background: '#17161E' }}>
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
                                    <a className="nav-link" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/About">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Service">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/Gallery">GALLERY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Contact">CONTACT</a>
                                </li>
                            </ul>


                            {/* Right: Social Media Links */}
                            <div className="d-flex">
                                <a href="https://www.facebook.com/manjunagaraj21/" className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://wa.me/7010957243" className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/manjus_makeover_artistry/" className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>

            <GalleryPage />
        </>
    )
}

