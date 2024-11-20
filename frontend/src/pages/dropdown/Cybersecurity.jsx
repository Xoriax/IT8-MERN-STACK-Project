import React from 'react';
import '../../styles/Cybersecurity.css';
import Carousel from '../../components/Carousel';
import CybersecurityImage from '../../assets/images/dropdown/ImageCybersecurite.png';

function Cybersecurity() {
    return (
        <div className="Cybersecurity">
            <section className='hero-Cybersecurity'>
                <div className="hero-overlay-Cybersecurity">
                    <div className="hero-overlay-Cybersecurity-text">
                        <h1>Cybersécurité</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Protégez votre entreprise des attaques</h2>
                        <p>
                            Face à l’augmentation des cybermenaces, il est essentiel de protéger vos données sensibles.
                            Nos techniciens mettent en place des solutions de sécurité adaptées à vos besoins, en partenariat avec Sophos,
                            un leader dans la sécurisation des données.
                            <br /><br />
                            Saviez-vous que 80 % des entreprises victimes de piratages entraînant des pertes de données ferment leurs portes ?
                            Avec notre accompagnement, nous minimisons ce risque grâce à des systèmes robustes et une assistance continue en cas d’incident.
                        </p>
                    </div>
                </div>
            </section>

            <div className="IToutsourcing-banner">
                <h3>Nos Autres Prestation</h3>
            </div>

            <Carousel />
        </div>
    );
}

export default Cybersecurity;