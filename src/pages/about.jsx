import React from 'react'
import aboutImage from '../assets/about-image.png'
import { Link } from 'react-scroll'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'

export const About = () => {
    return (
        <>
            <div className='p-4'>
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
                                    <a className="nav-link active" href="/About">ABOUT US</a>
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
                                <a href="https://facebook.com" className="btn btn-link">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://twitter.com" className="btn btn-link">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="https://instagram.com" className="btn btn-link">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>


                    </div>
                </nav>
            </div>

            <section className='About-section'>
                <img src={aboutImage} alt='aboutImage' className='img-fluid' />

                <div className='mt-5 text-center'>
                    <h1>About <span style={{ color: '#B2984A' }}>Manjus Makeover</span> Artistry</h1>

                    <p className='mt-2'>Renowned Bridal Makeup Artist in Chennai</p>

                    <div className='mt-5'>
                        <ul className='mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
                            <li className="underline"><Link to='/' style={{ textDecoration: 'none', color: '#B2984A' }}>Home</Link></li>
                            <li>{'>'}</li>
                            <li>About us</li>
                        </ul>
                    </div>

                    <div className='d-flex justify-content-center mb-5'>
                        <Link to='fircom'><span className="circle-arrow">v</span></Link>
                    </div>

                    <div id='fircom'>
                        <div className='container mb-5'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <img src={about1} alt='about-page-image' className='img-fluid' />
                                        </div>
                                        <div className='col-md-6 d-flex flex-column'>
                                            <div className=''>
                                                <img src={about2} alt='about-page-image' className='img-fluid' />
                                            </div>
                                            <div className='p-4 d-flex flex-column justify-content-center rounded-4' style={{background: '#17161E'}}>
                                                <strong>10+</strong>
                                                <h6>Years of Experience</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 d-flex flex-column gap-3 p-4 rounded-4' style={{ textAlign: 'left', background: '#656565' }}>
                                    <h3>ABOUT US</h3>

                                    <h6 style={{ lineHeight: '30px' }}>Manjus Makeover Artistry is led by Manju, <span style={{ color: '#B2984A' }}>a professional bridal makeup artist in Chennai</span> with extensive experience in wedding and special event makeup.
                                    </h6>

                                    <h6 style={{ lineHeight: '30px' }}>Our passion is to help brides feel confident and radiant on their big day. Serving <span style={{ color: '#B2984A' }}>clients across Chennai and Tamil Nadu.</span> </h6>

                                    <h6 style={{ lineHeight: '30px' }}>We combine high-quality products and expert techniques to create makeup that is</h6>

                                    <ul>
                                        <li>Beautiful</li>
                                        <li>Long-lasting</li>
                                        <li>Camera-ready</li>
                                    </ul>

                                    <button className='mb-4'>Get Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

