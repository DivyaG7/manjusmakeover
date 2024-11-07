import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import serviceImage from '../assets/service-image.png'
import downbtn from '../assets/Down Button.png'
import { BridalMakeupSection } from '../components/BridalMakeupSection'
import { useLocation } from 'react-router-dom'

export const Service = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', ''); // Remove the '#' from the hash
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element smoothly
            }
        }
    }, [location]); 

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
                                    <a className="nav-link active" href="/Service">SERVICES</a>
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
                                <a href="https://www.instagram.com/manjus_makeover_artistry/profilecard/?igsh=YmFscjN4dDZmdzB3" className="btn btn-link">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>


                    </div>
                </nav>
            </div>

            <section className='service-section'>
                <img src={serviceImage} alt='serviceImage' className='img-fluid' />

                <div className='mt-5 text-center pe-3 ps-3'>
                    <h1 data-aos="fade-up">Specialized <span style={{ color: '#B2984A' }}>Bridal and Event Makeup</span> Services</h1>

                    <p className='mt-2' data-aos="fade-up">in Chennai and Tamil Nadu</p>

                    <div className='mt-5'>
                        <ul className='mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, listStyle: 'none' }}>
                            <li className="underline"><a href='/' style={{ textDecoration: 'none', color: '#B2984A' }}>Home</a></li>
                            <li>{'>'}</li>
                            <li>Services</li>
                        </ul>
                    </div>

                    <div className='d-flex justify-content-center mb-5 pb-5 pt-2'>
                        <Link to='nextcom'><img src={downbtn} alt='Down Button' className='img-fluid w-50 down-arrow-animation' /></Link>
                    </div>

                </div>
            </section>

            <section id='nextcom' className='text-center nextcom p-4'>
                <h3 data-aos="fade-right">SERVICES</h3>
                <h6 className='mt-4' style={{ color: '#B2984A', fontWeight: '700' }} data-aos="fade-up">At Manjus Makeover Artistry, we offer a variety of services designed <br></br> to make every client look their best. </h6>
                <h6 className='mt-4' style={{ color: 'white', fontWeight: '700' }} data-aos="fade-up">Our expertise in bridal makeup for Tamil Nadu brides means that each service is personalized <br></br> to suit the client’s needs, with careful attention to detail and quality.</h6>

                <BridalMakeupSection />
            </section>

            <div className='text-center p-5 d-flex flex-column justify-content-center align-items-center service-last mb-5' style={{ color: 'white' }}>
                <h4 className='w-75' style={{fontWeight: 'bold'}}>Book Your Bridal Makeup Session in <br></br>
                    <span style={{ color: '#B2984A' }}>Chennai and Tamil Nadu</span></h4>
                <p>Contact us today for a consultation and let’s create the perfect look for your wedding day or any special event.</p>
                <a href="/Contact"><button>Get Quote</button></a>
            </div>
        </>
    )
}

