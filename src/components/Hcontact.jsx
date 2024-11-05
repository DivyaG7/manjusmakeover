import React, { useState } from 'react';

export const Hcontact = () => {
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
                                        />
                                        <input
                                            type="tel"
                                            className="form-control"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            placeholder="Your Phone Number"
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
                                            <option value="">Service Needed</option>
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
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="Your Mail id"
                                        />
                                    </div>

                                    {/* Column 3: Submit Button */}
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        <button type="submit">Get Quote</button>
                                    </div>
                                </div>
                            </form>
                            {message && <p className="mt-3">{message}</p>} {/* Display message */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
