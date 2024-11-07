import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../components/GalleryPage.css'; // Import your custom CSS for any styling adjustments

// Import your images
import img1 from '../assets/Muhurtham Bridal Makeup.png';
import img2 from '../assets/Engagement Makeup.png';
import img3 from '../assets/Reception Bridal Makeup.png';
import img4 from '../assets/Pre-Wedding Makeup.png';
import img5 from '../assets/Post-Wedding Makeup.png';
import img6 from '../assets/Party Makeup.png';

const galleryImages = [
    { id: 1, src: img1, alt: 'Gallery Image 1' },
    { id: 2, src: img2, alt: 'Gallery Image 2' },
    { id: 3, src: img3, alt: 'Gallery Image 3' },
    { id: 4, src: img4, alt: 'Gallery Image 4' },
    { id: 5, src: img5, alt: 'Gallery Image 5' },
    { id: 6, src: img6, alt: 'Gallery Image 6' },
];


export const GalleryPage = () => {
    // Initialize AOS for animation
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-out', // Easing style
            every: true, // Animation happens only once
        });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5" data-aos="fade-up" style={{color: 'white'}}>Our Gallery</h2>

            <div className="row">
                {galleryImages.map((image) => (
                    <div className="col-md-4 mb-4" key={image.id} data-aos="zoom-in">
                        <div className="gallery-item">
                            <img src={image.src} alt={image.alt} className="img-fluid" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


