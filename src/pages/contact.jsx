import React, { useState } from 'react'

export const Contact = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = { name, phone, service, email };

        try {
            const response = await fetch('https://manjusmakeover.onrender.com/api/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Your request has been received! We’ll be in touch soon.');
            } else {
                setMessage('Failed to send email: ' + data.message);
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        }

        // Clear form fields after submission
        setName('');
        setPhone('');
        setService('');
        setEmail('');
    };

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
                                    <a className="nav-link" href="/Gallery">GALLERY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/Contact">CONTACT</a>
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
            </div>


            <div
            className="container-fluid h-100 contact-section"
        >
            <div className="container py-5" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
                            <div className="card-body p-5">
                                <h2 className="text-center mb-4" style={{color: '#B2984A', fontWeight: 'bold'}}>Get in Touch with Us</h2>
                                <p className="text-center mb-4">Fill in the details below and we’ll get back to you as soon as possible.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* Name & Phone Number Fields */}
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                placeholder="Your Phone Number"
                                            />
                                        </div>

                                        {/* Service & Email Fields */}
                                        <div className="col-md-6 mb-3">
                                            <select
                                                className="form-select"
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                required
                                            >
                                                <option value="">Select Service</option>
                                                <option value="Muhurtham Makeup">Muhurtham Makeup</option>
                                                <option value="Reception Makeup">Reception Makeup</option>
                                                <option value="Engagement Makeup">Engagement Makeup</option>
                                                <option value="Pre-Wedding Makeup">Pre-Wedding Makeup</option>
                                                <option value="Post-Wedding Makeup">Post-Wedding Makeup</option>
                                                <option value="Party Makeup">Party Makeup</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="Your Email"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="col-md-12 text-center">
                                            <button type="submit">
                                                Get Quote
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {/* Displaying success/error message */}
                                {message && (
                                    <div
                                        className={`mt-3 alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

