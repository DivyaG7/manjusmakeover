import React from 'react'
import home_about_bg from '../assets/home-about_bg.png'

export const Habout = () => {
    return (
        <div>
            <section className="h-about mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right">
                            <img src={home_about_bg} alt="home-about_bg" className="img-fluid" />
                        </div>

                        <div className="col-md-6 h-about-detail"  data-aos="fade-left">
                            <h3>ABOUT US</h3>

                            <p className="mt-4">At Manjus Makeover Artistry, we specialize in bridal makeup in <span
                                style={{color: '#B2984A;'}}>Chennai and across Tamil Nadu,</span>
                                crafting timeless, elegant looks for brides and clients at every celebration. </p>

                            <p className="mt-4">Whether it's your <span style={{color: '#B2984A;'}}>Muhurtham, Reception, Engagement, or
                                a Pre-Wedding shoot,</span> we create a
                                personalized makeup style that enhances your natural beauty.</p>

                            <a href="/About"><button>READ MORE</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

