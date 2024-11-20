import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import { useNavigate } from 'react-router-dom';

import Carousel_IMG1 from '../assets/images/HomePage/Carousel/img_1.png';
import Carousel_IMG2 from '../assets/images/HomePage/Carousel/img_2.png';
import Carousel_IMG3 from '../assets/images/HomePage/Carousel/img_3.png';
import Carousel_IMG4 from '../assets/images/HomePage/Carousel/img_4.png';
import Carousel_IMG5 from '../assets/images/HomePage/Carousel/img_5.png';
import Carousel_IMG6 from '../assets/images/HomePage/Carousel/img_6.png';

const images = [
    { id: 1, src: Carousel_IMG1, alt: 'Infogérance', url: '/IToutsourcing' },
    { id: 2, src: Carousel_IMG2, alt: 'Solutions Collaboratives', url: '/CollabSolu' },
    { id: 3, src: Carousel_IMG3, alt: 'Cybersécurité', url: '/Cybersecurity' },
    { id: 4, src: Carousel_IMG4, alt: 'Sauvegarde et Gestions de données', url: '/DBM' },
    { id: 5, src: Carousel_IMG5, alt: 'Matériels/Logiciels', url: '/ML' },
    { id: 6, src: Carousel_IMG6, alt: 'Téléphonie/Teams', url: '/TT' },
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleLinkClick = (url) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(url);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <div className="carousel">
            <div className="carousel-container">
                <div className="carousel-box prev">
                    <img src={images[prevIndex].src} alt={images[prevIndex].alt} className="carousel-image" />
                    <div className="image-title">
                        <p onClick={() => handleLinkClick(images[prevIndex].url)}>
                            {images[prevIndex].alt}
                        </p>
                    </div>
                </div>
                <div className="carousel-box active">
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
                    <div className="image-title">
                        <p onClick={() => handleLinkClick(images[currentIndex].url)}>
                            {images[currentIndex].alt}
                        </p>
                    </div>
                </div>
                <div className="carousel-box next">
                    <img src={images[nextIndex].src} alt={images[nextIndex].alt} className="carousel-image" />
                    <div className="image-title">
                        <p onClick={() => handleLinkClick(images[nextIndex].url)}>
                            {images[nextIndex].alt}
                        </p>
                    </div>
                </div>
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
}

export default Carousel;
