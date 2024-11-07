import React from 'react'
import aboutImage from '../assets/about-image.png'
import { Link } from 'react-scroll'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import downbtn from '../assets/Down Button.png'

export const About = () => {
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
                            <div className="d-flex socialmedia">
                                <a href="https://facebook.com" className="btn btn-link">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://twitter.com" className="btn btn-link">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/manjus_makeover_artistry/profilecard/?igsh=YmFscjN4dDZmdzB3" className="btn btn-link">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>


                    </div>
                </nav>
            </div>

            <section className='About-section'>
                <img src={aboutImage} alt='aboutImage' className='img-fluid' />

                <div className='mt-5 text-center pe-3 ps-3'>
                    <h1 data-aos="fade-up">About <span style={{ color: '#B2984A' }}>Manjus Makeover</span> Artistry</h1>

                    <p className='mt-2' data-aos="fade-up">Renowned Bridal Makeup Artist in Chennai</p>

                    <div className='mt-5'>
                        <ul className='mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
                            <li className="underline"><a href='/' style={{ textDecoration: 'none', color: '#B2984A' }}>Home</a></li>
                            <li>{'>'}</li>
                            <li>About us</li>
                        </ul>
                    </div>

                    <div className='d-flex justify-content-center mb-5 pb-5 pt-2'>
                        <Link to='fircom'><img src={downbtn} alt='Down Button' className='img-fluid w-50 down-arrow-animation' /></Link>
                    </div>

                </div>
            </section>

            <section className='text-center pe-3 ps-3' style={{ color: 'white' }}>
                <div id='fircom'>
                    <div className='container mb-5'>
                        <div className='row about-image'>
                            <div className='col-md-6 d-flex justify-content-center'>
                                <div className='row about-nested'>
                                    <div className='col-md-6 mb-4' data-aos="zoom-in">
                                        <img src={about1} alt='about-page-image' className='img-fluid h-100'/>
                                    </div>
                                    <div className='col-md-6 d-flex flex-column mb-4 gap-4'>
                                        <div data-aos="zoom-in">
                                            <img src={about2} alt='about-page-image' className='img-fluid' />
                                        </div>
                                        <div className='p-4 d-flex flex-column justify-content-center rounded-4 h-100' style={{ background: '#17161E' }} data-aos="flip-left">
                                            <h4 style={{ fontWeight: 'bold' }}>10+</h4>
                                            <h6 className='mt-3'>Years of Experience</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 d-flex flex-column gap-3' data-aos="zoom-in" style={{ textAlign: 'left', justifyContent: 'flex-end' }}>
                                <div className='rounded-4 p-4' style={{ background: '#17161E', marginBottom: '25px' }}>
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


            <section className='whychoose pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 text-white d-flex flex-column justify-content-center gap-4 mb-4'>
                            <div className='makeup rounded-4 p-4' data-aos="fade-right">
                                <h4>Personalized Bridal Makeup :</h4>
                                <p>We create unique, custom looks for each bride to match her vision and cultural style.</p>
                            </div>
                            <div className='makeup rounded-4 p-4' data-aos="fade-right">
                                <h4>Trusted Makeup Expert :</h4>
                                <p>With years of experience in bridal makeup artistry, we know how to enhance every bride’s natural beauty.</p>
                            </div>
                            <div className='makeup rounded-4 p-4' data-aos="fade-right">
                                <h4>Premium Makeup Products :</h4>
                                <p>We use only the best brands to ensure flawless, long-lasting results.</p>
                            </div>
                        </div>
                        <div className='col-md-6 mb-4' data-aos="flip-right">
                            <div className='makeup-img rounded-4 p-4 h-100'>
                                <h2>Why Choose <br></br>
                                    <span style={{ color: '#B2984A' }}>Manjus Makeover Artistry </span><br></br> for Bridal Makeup in <br></br> <span style={{ color: '#B2984A' }}>Chennai and all over</span> <br></br>
                                    <span style={{ color: '#B2984A' }}>Tamil Nadu ?</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-5 d-flex flex-column justify-content-center align-items-center about-last' style={{ color: 'white' }}>
                <h4 className='w-75'>Let Manjus Makeover Artistry make your <span style={{ color: '#B2984A' }}>wedding day as beautiful as you’ve dreamed</span>, wherever you are in Tamil Nadu.</h4>

                <a href="/Contact"><button>Get Quote</button></a>
            </div>
        </>
    )
}

