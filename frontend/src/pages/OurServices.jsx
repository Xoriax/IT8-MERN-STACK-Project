import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/OurServices.css';
import Logo from '../assets/images/Footer/IT8LogoFooter.png';

function OurServices() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 830);
    const navigate = useNavigate();

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
        "Chez IT8-Solutions, nous comprenons que les outils technologiques de pointe sont essentiels à la performance et à la compétitivité de votre entreprise. C'est pourquoi nous vous proposons une large gamme de matériels et de licences logicielles adaptés à vos besoins. En partenariat avec DLL, un leader mondial du financement, nous vous offrons également des solutions de leasing flexibles et avantageuses pour faciliter vos investissements",
        "Chez IT8-Solutions, nous savons que la gestion efficace de vos données est essentielle pour garantir le succès de vos activités. C'est pourquoi nous nous sommes associés à Synology Inc., le leader incontesté des solutions de cloud et NAS, pour vous offrir des outils de sauvegarde et de gestion de données de pointe. Une technologie au service de vos données avec les solutions Synology Inc.",
        "Chez IT8-Solutions, nous vous aidons à transformer vos espaces de travail en environnements collaboratifs et technologiques. Grâce à des solutions modernes et intuitives, nous proposons des installations complètes de salles de réunion, équipées des technologies des marques leaders telles que Logitech, Yealink, Barco et Polycom. Offrez à vos équipes des outils performants pour réinventer vos réunions.",
    ];

    const links = [
        '/IToutsourcing',
        '/CollabSolu',
        '/TT',
        '/Cybersecurity',
        '/ML',
        '/DBM',
        '/MW',
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 830);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fonction pour scroller en haut de la page avant la navigation
    const handleScrollAndNavigate = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolle en haut de la page
        navigate(path); // Navigue vers la nouvelle page
    };

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
                                className={`hexagon ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                            >
                                <span>{title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="info-box">
                        <h2>{activeIndex !== null ? titles[activeIndex] : "Sélectionnez un service"}</h2>
                        <p>{activeIndex !== null ? details_description[activeIndex] : "Cliquez sur un hexagone pour voir plus de détails."}</p>
                        {activeIndex !== null && (
                            <button
                                className="btn-detail"
                                onClick={() => handleScrollAndNavigate(links[activeIndex])}
                            >
                                En Savoir Plus
                            </button>
                        )}
                    </div>
                </section>
            ) : (
                <section className="accordion-section">
                    {titles.map((title, index) => (
                        <div key={index} className="accordion-item">
                            <button
                                className="accordion-title"
                                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                            >
                                {title}
                                <span className={`accordion-arrow-service ${activeIndex === index ? 'open' : ''}`}></span>
                            </button>
                            {activeIndex === index && (
                                <div className="accordion-content">
                                    <p>{details_description[index]}</p>
                                    <button
                                        className="btn-detail"
                                        onClick={() => handleScrollAndNavigate(links[index])}
                                    >
                                        Détail
                                    </button>
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