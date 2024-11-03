import React from 'react';
import '../styles/Home.css';
import Carousel from '../components/Carousel';

import CollabIcon from '../assets/images/HomePage/Banner/CollabIcon.png';
import ClientsIcon from '../assets/images/HomePage/Banner/ClientsIcon.png';
import PartenairesIcon from '../assets/images/HomePage/Banner/PartenairesIcon.png';
import DotCheckdIcon from '../assets/images/HomePage/DotCheckedIcon.png';
import HomePageContent from '../assets/images/HomePage/HomePageContent.png';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-overlay">
                    <div className='hero-overlay-text'>
                        <h1>Expertise et proximité au service de votre infrastructure informatique</h1>
                        <p>Confiez-nous la maintenance de votre parc informatique et concentrez-vous sur la réussite de vos domaines d'activités.</p>
                    </div>
                </div>
            </section>
            <h2 className="page-title">Nos Prestations</h2>
            <p className="description">Nous avons une solution pour chacune de vos problématiques, que ce soit en délégation de personnel ou en régie externalisée.</p>
            <Carousel />
            <div className="banner">
                <div className="banner-box">
                    <img src={CollabIcon} alt="Collaborateurs" className="banner-icon" />
                    <span>19 Collaborateurs</span>
                </div>
                <div className="banner-box">
                    <img src={ClientsIcon} alt="Clients" className="banner-icon" />
                    <span>+50 clients</span>
                </div>
                <div className="banner-box">
                    <img src={PartenairesIcon} alt="Partenaires" className="banner-icon" />
                    <span>+600 partenaires partout en France</span>
                </div>
            </div>
            <div className="content-section">
                <div className="left-box">
                    <h3>Les atouts d'une maintenance informatique externalisée</h3>
                    <ul>
                        <li><img src={DotCheckdIcon} alt="Dot Check" className="dot-icon" /> Un support disponible à distance pour plus d'efficacité</li>
                        <li><img src={DotCheckdIcon} alt="Dot Check" className="dot-icon" /> Un interlocuteur proche de vous et de vos employés</li>
                        <li><img src={DotCheckdIcon} alt="Dot Check" className="dot-icon" /> Une technologie de pointe, au service de la simplicité</li>
                        <li><img src={DotCheckdIcon} alt="Dot Check" className="dot-icon" /> Services clés en main: adaptables et évolutifs</li>
                    </ul>
                    <a href="mailto:contact@it8-solutions.com?subject=Objet%20Demande%20de%20Renseignement">
                        <button className="contact-button">Contacter un Commercial</button>
                    </a>
                </div>
                <div className="right-box">
                    <img src={HomePageContent} alt="Contenu de la page" className="content-image" />
                </div>
            </div>
        </div>
    );
}

export default Home;
