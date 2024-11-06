import React from 'react'
import muhurtham from '../assets/muhurtham-makeup.png'
import reception from '../assets/reception-makeup.png'
import party from '../assets/party-makeup.png'

export const Hservice = () => {
    return (
        <div>
            <section className="h-service">
                <div className="container mt-5 mb-5 text-center p-3">

                    <h3 style={{fontWeight: '700'}} data-aos="fade-right">OUR SERVICES</h3>
                    <p className="mt-4" style={{fontWeight: 'semibold;', color: '#B2984A;'}}>Specialized Bridal and Event Makeup Services
                        in Chennai and Tamil Nadu.</p>
                    <p style={{fontWeight: 'semibold'}}>
                        At Manjus Makeover Artistry, we offer a variety of services designed to make every client look their
                        best.</p>

                    <div className="row m-5 pe-5 ps-5">
                        <div className="col-md-4 mb-4" data-aos="fade-right">
                            <img src={muhurtham} alt="muhurtham-makeup" className="img-fluid" />
                        </div>

                        <div className="col-md-4 mb-4" data-aos="flip-left">
                            <img src={reception} alt="reception-makeup" className="img-fluid" />
                        </div>

                        <div className="col-md-4 mb-4" data-aos="fade-left">
                            <img src={party} alt="party-makeup" className="img-fluid" />
                        </div>
                    </div>

                    <a href="/Service"><button>View Our Services</button></a>
                </div>
            </section>
        </div>
    )
}
