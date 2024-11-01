import React from 'react';
import '../styles/Home.css';
import Carousel from '../components/Carousel';

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
        </div>
    );
}

export default Home;
