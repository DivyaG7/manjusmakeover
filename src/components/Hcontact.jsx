import React, { useState } from 'react';

export const Hcontact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;
        if (/^\d*$/.test(phoneValue) && phoneValue.length <= 10) {
            setPhone(phoneValue);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.time("Form Submit Time");

        setIsLoading(true);

        // Validate phone number length
        if (phone.length !== 10) {
            setMessage('Please enter a valid 10-digit phone number.');
            setIsLoading(false);
            console.timeEnd("Form Submit Time");
            return;
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage('Please enter a valid email address.');
            setIsLoading(false);
            console.timeEnd("Form Submit Time");
            return;
        }

        const formData = { name, phone, service, email };

        try {
            console.time("API Request");
            const response = await fetch('https://manjusmakeover.onrender.com/api/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.timeEnd("API Request");

            const data = await response.json();

            if (response.ok) {
                setMessage('Your request has been received! We’ll be in touch soon.');
                setName('');
                setPhone('');
                setService('');
                setEmail('');
            } else {
                setMessage('Failed to send email: ' + (data.message || 'Unknown error.'));
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        } finally {
            setIsLoading(false);
            console.timeEnd("Form Submit Time");
        }
    };


    return (
        <div>
            <section className="h-contact">
                <div className="w-100 p-5" style={{ overflowX: 'hidden' }}>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-8">
                            <p className="mb-4">Connect with Chennai’s Trusted Bridal Makeup Artist</p>
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    {/* Column 1: Name and Phone Number */}
                                    <div className="col-md-4 mb-3 d-flex flex-column gap-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            placeholder="Your Name"
                                            aria-label="Name"
                                        />
                                        <input
                                            type="tel"
                                            className="form-control"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            required
                                            placeholder="Your Phone Number"
                                            aria-label="Phone"
                                        />
                                    </div>

                                    {/* Column 2: Service Needed (Dropdown) and Email */}
                                    <div className="col-md-4 mb-3 d-flex flex-column gap-3">
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
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                            placeholder="Your Email"
                                            aria-label="Email"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                    {isLoading ? 'Submitting...' : 'Submit'}
                                </button>
                                {message && (
                                    <div
                                        className={`mt-3 alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'
                                            }`}
                                        style={{ fontSize: '16px', fontWeight: 'bold' }}
                                    >
                                        {message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
