import React from 'react'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
import gallery5 from '../assets/gallery5.png'
import gallery6 from '../assets/gallery6.png'

export const Hgallery = () => {
    return (
        <div>
            <section className="h-gallery">
                <div className="container text-center mt-5 mb-5">
                    <h3 style={{fontWeight: '700'}} data-aos="fade-right">GALLERY</h3>
                    <p className="mt-4 pe-5 ps-5" style={{fontWeight: 'semibold', color: '#B2984A'}}>Our Portfolio – Chennai’s Best
                        Bridal Makeup Looks!</p>

                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-md-4 mb-4" data-aos="zoom-in">
                            <img src={gallery1} alt="gallery1" className="img-fluid" />
                        </div>
                        <div className="col-md-2 mb-4" data-aos="zoom-in">
                            <img src={gallery2} alt="gallery2" className="img-fluid" />
                        </div>
                        <div className="col-md-2 mb-4" data-aos="zoom-in">
                            <img src={gallery3} alt="gallery3" className="img-fluid" />
                        </div>
                    </div>

                    <div className="row mt-4 d-flex justify-content-center">
                        <div className="col-md-2 mb-4" data-aos="zoom-in">
                            <img src={gallery4} alt="gallery4" className="img-fluid" />
                        </div>
                        <div className="col-md-2 mb-4" data-aos="zoom-in">
                            <img src={gallery5} alt="gallery5" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4" data-aos="zoom-in">
                            <img src={gallery6} alt="gallery6" className="img-fluid" />
                        </div>
                    </div>

                    <a href="/Gallery"><button>View All</button></a>
                </div>
            </section>
        </div>
    )
}

