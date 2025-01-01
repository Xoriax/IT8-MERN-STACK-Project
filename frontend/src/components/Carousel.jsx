import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import { useNavigate } from 'react-router-dom';

import Carousel_IMG1 from '../assets/images/HomePage/Carousel/img_1.png';
import Carousel_IMG2 from '../assets/images/HomePage/Carousel/img_2.png';
import Carousel_IMG3 from '../assets/images/HomePage/Carousel/img_3.png';
import Carousel_IMG4 from '../assets/images/HomePage/Carousel/img_4.png';
import Carousel_IMG5 from '../assets/images/HomePage/Carousel/img_5.png';
import Carousel_IMG6 from '../assets/images/HomePage/Carousel/img_6.png';
import Carousel_IMG7 from '../assets/images/HomePage/Carousel/img_7.png';

const images = [
    { id: 1, src: Carousel_IMG1, alt: 'Infogérance', url: '/IToutsourcing' },
    { id: 2, src: Carousel_IMG2, alt: 'Solutions Collaboratives', url: '/CollabSolu' },
    { id: 3, src: Carousel_IMG3, alt: 'Sécurité Informatique', url: '/Cybersecurity' },
    { id: 4, src: Carousel_IMG4, alt: 'Sauvegarde et Sécurisation des données', url: '/DBM' },
    { id: 5, src: Carousel_IMG5, alt: 'Matériels / Logiciels', url: '/ML' },
    { id: 6, src: Carousel_IMG6, alt: 'Téléphonie', url: '/TT' },
    { id: 7, src: Carousel_IMG7, alt: 'Modern Workspace', url: '/MW' },
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
                    <a href={images[prevIndex].url} className="carousel-link" onClick={(e) => { e.preventDefault(); handleLinkClick(images[prevIndex].url); }}>
                        <img src={images[prevIndex].src} alt={images[prevIndex].alt} className="carousel-image" />
                        <div className="image-title">
                            <p>{images[prevIndex].alt}</p>
                        </div>
                    </a>
                </div>
                <div className="carousel-box active">
                    <a href={images[currentIndex].url} className="carousel-link" onClick={(e) => { e.preventDefault(); handleLinkClick(images[currentIndex].url); }}>
                        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
                        <div className="image-title">
                            <p>{images[currentIndex].alt}</p>
                        </div>
                    </a>
                </div>
                <div className="carousel-box next">
                    <a href={images[nextIndex].url} className="carousel-link" onClick={(e) => { e.preventDefault(); handleLinkClick(images[nextIndex].url); }}>
                        <img src={images[nextIndex].src} alt={images[nextIndex].alt} className="carousel-image" />
                        <div className="image-title">
                            <p>{images[nextIndex].alt}</p>
                        </div>
                    </a>
                </div>
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
}

export default Carousel;
