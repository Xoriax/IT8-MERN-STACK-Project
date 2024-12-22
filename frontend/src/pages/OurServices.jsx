import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/OurServices.css';
import Logo from '../assets/images/Footer/IT8LogoFooter.png';

function OurServices() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 830);

    const titles = [
        'Infogérance',
        'Solution Collaborative',
        'Téléphonie',
        'Sécurité Informatique',
        'Matériels / Logiciels',
        'Sauvegarde et sécurisation des données',
        'Modern Workplace',
    ];

    const details_description = [
        "L'infogérance informatique est un service clé qui vous permet de déléguer la gestion de votre infrastructure informatique à des experts, garantissant ainsi la performance et la sécurité de vos systèmes. Avec notre approche de maintenance 360°, nous offrons un suivi complet incluant la supervision, la mise à jour, le support technique et la sauvegarde de vos données. Notre objectif est de vous permettre de vous concentrer sur votre cœur de métier, en assurant une disponibilité optimale de votre parc informatique. Profitez d’une tranquillité d'esprit grâce à notre expertise, et optimisez votre efficacité opérationnelle avec des solutions sur mesure, adaptées à vos besoins spécifiques. Ensemble, faisons de votre environnement numérique un atout stratégique.",
        "Confiez-nous l'intégration de ces solutions au sein de votre entreprise. Nos experts vous accompagnent à chaque étape, de l'analyse de vos besoins à la mise en place et au paramétrage des outils, en passant par la formation de vos équipes. Nous veillons à ce que la transition se déroule de manière fluide et que vous puissiez exploiter pleinement le potentiel de ces plateformes collaboratives pour optimiser votre organisation et gagner en efficacité. ",
        "Dans un monde professionnel en constante évolution, une communication fluide et efficace est primordiale. C'est là qu'intervient la téléphonie d'entreprise, bien plus qu'un simple outil pour passer des appels. En intégrant des solutions comme IP Centrex, Teams, Mobile et Fibre, vous accédez à une panoplie d'avantages pour optimiser vos communications internes et externes. ",
        "Parce que la sécurité de vos données est primordiale, IT8 Solutions, en partenariat avec Sophos, vous propose une offre complète pour protéger votre parc informatique et garantir la sérénité de votre activité. ",
        'Nous gérons vos sauvegardes, tant sur site que hors-site...',
        'Nous vous accompagnons dans la gestion de la mobilité...',
        'Nos services incluent des audits complets de vos systèmes informatiques...',
    ];

    const links = [
        '/IToutsourcing',
        '/CollabSolu',
        '/TT',
        '/Cybersecurity',
        '/ML',
        '/Conseils',
        '/MW',
    ];

    // Gère la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 830);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fonction pour fermer la description si un clic se produit en dehors de l'écran
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.hexagon-container') && !event.target.closest('.info-box')) {
                setActiveIndex(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="OurServices">
            <section className="hero-OurServices">
                <div className="hero-overlay-OurServices">
                    <div className="hero-overlay-OurServices-text">
                        <h1>Nos Services</h1>
                    </div>
                </div>
            </section>

            {!isMobile ? (
                <section className="hexagon-text-section">
                    <div className="hexagon-container">
                        <div className="nonagone">
                            <img src={Logo} alt="Logo" className="center-logo" />
                        </div>
                        {titles.map((title, index) => (
                            <div
                                key={index}
                                className="hexagon"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => activeIndex === null && setActiveIndex(null)}
                                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                            >
                                <span>{title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="info-box">
                        <h2>{activeIndex !== null ? titles[activeIndex] : "Sélectionnez un service"}</h2>
                        <p>{activeIndex !== null ? details_description[activeIndex] : "Passez la souris sur un hexagone pour voir plus de détails."}</p>
                        {activeIndex !== null && (
                            <Link to={links[activeIndex]}>
                                <button className="btn-detail">En Savoir Plus</button>
                            </Link>
                        )}
                    </div>
                </section>
            ) : (
                <section className="accordion-section">
                    {titles.map((title, index) => (
                        <div key={index} className="accordion-item">
                            <button
                                className="accordion-title"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                {title}
                                <span className={`accordion-arrow ${activeIndex === index ? 'open' : ''}`}>
                                    &#x276F;
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="accordion-content">
                                    <p>{details_description[index]}</p>
                                    <Link to={links[index]}>
                                        <button className="btn-detail">Détail</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}

export default OurServices;
