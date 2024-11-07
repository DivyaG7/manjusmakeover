import React from 'react';
import '../components/BridalMakeupSection.css';

export const BridalMakeupSection = () => {
    const boxes = [
        {
            id: 'bridal-makeup-1',
            title: 'Muhurtham Bridal Makeup',
            description:
                'Honor the sacred traditions of your Muhurtham ceremony with a classic, timeless look. Our Muhurtham makeup is tailored to reflect the beauty of Tamil Nadu’s cultural heritage while enhancing your natural beauty for this special event.',
            className: 'box-muhurtham',
        },
        {
            id: 'bridal-makeup-2',
            title: 'Reception Bridal Makeup',
            description:
                'From Chennai to other parts of Tamil Nadu, we provide glamorous and long-lasting reception makeup for brides, creating a look that will shine on your reception night.',
            className: 'box-reception',
        },
        {
            id: 'bridal-makeup-3',
            title: 'Engagement Makeup',
            description:
                'Our engagement makeup services are designed to create a soft, romantic look for this milestone event. Start your wedding journey with a flawless look that celebrates love.',
            className: 'box-engagement',
        },
        {
            id: 'bridal-makeup-4',
            title: 'Pre-Wedding Makeup',
            description:
                'Capture your love story with makeup that’s photo-ready for your pre-wedding shoot. We offer pre-wedding makeup sessions throughout Chennai and Tamil Nadu, perfect for those who want a radiant look in every photo.',
            className: 'box-prewedding',
        },
        {
            id: 'bridal-makeup-5',
            title: 'Post-Wedding Makeup',
            description:
                'Keep the glow going with our post-wedding makeup, ideal for gatherings after the wedding day.',
            className: 'box-postwedding',
        },
        {
            id: 'bridal-makeup-6',
            title: 'Party Makeup',
            description:
                'Whether you’re attending a family function, a friend’s wedding, or a special party, we offer party makeup services in Chennai and Tamil Nadu that help you stand out.',
            className: 'box-party',
        },
        // Add more items as needed
    ];

    return (
        <div className="container mt-5">
            <div className="row">
            {boxes.map((box) => (
                    <div className="col-md-6 mb-4" key={box.id} id={box.id} data-aos="flip-left">
                        <div
                            className={`box rounded-4 text-white d-flex flex-column ${box.className}`}
                            style={{
                                height: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '20px',
                                color: 'white',
                            }}
                        >
                            <div className="text-container" style={{ borderRadius: '8px' }}>
                                <h5 style={{ color: '#B2984A', fontWeight: 'bold' }}>{box.title}</h5>
                                <p style={{ fontSize: '13px', fontWeight: '500' }}>{box.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


