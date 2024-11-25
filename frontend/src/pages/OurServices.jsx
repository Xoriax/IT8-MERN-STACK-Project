import React, { useState, useEffect } from 'react';
import '../styles/OurServices.css';
import Logo from '../assets/images/Footer/IT8LogoFooter.png';

function OurServices() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 830);

    const titles = [
        'Support et assistance utilisateurs',
        'Administration de la messagerie',
        'Administration du réseau et des serveurs',
        'Sécurité de l’infrastructure',
        'Gestion des sauvegardes',
        'Gestion de la mobilité',
        'Audit et Conseil',
    ];

    const descriptions = [
        'Support utilisateur illimité, à distance et sur site.',
        'Gestion complète de votre messagerie Office 365.',
        'Administration de vos réseaux et serveurs.',
        'Protection de vos infrastructures informatiques.',
        'Solutions de sauvegarde sécurisées sur site et hors site.',
        'Facilitez le travail en mobilité en toute sécurité.',
        'Audits et conseils pour optimiser vos systèmes.',
    ];

    const details_description = [
        'Nous mettons à votre disposition un support utilisateur illimité, disponible à distance ou sur site. Nos experts sont à votre écoute pour résoudre tous vos problèmes techniques rapidement et efficacement, afin d’assurer la continuité de vos activités.',
        'Nous assurons l’administration complète de votre messagerie professionnelle via Office 365. Nous gérons la configuration, la sécurité, ainsi que la maintenance de vos outils de communication pour vous offrir une expérience fluide et sécurisée.',
        'Nos services incluent la gestion et l’administration de votre réseau informatique et de vos serveurs. Nous veillons à leur performance, leur sécurité et leur disponibilité, pour garantir un environnement de travail optimal.',
        'La sécurité de votre infrastructure est primordiale. Nous mettons en place des mesures de protection adaptées pour prévenir toute menace, qu’il s’agisse de cyberattaques ou de défaillances techniques.',
        'Nous gérons vos sauvegardes, tant sur site que hors-site, pour protéger vos données contre toute perte accidentelle. Vous pouvez ainsi bénéficier d’une solution de sauvegarde fiable et sécurisée, accessible à tout moment.',
        'Nous vous accompagnons dans la gestion de la mobilité, en vous permettant de travailler en toute sécurité depuis n’importe où, grâce à des solutions adaptées pour vos collaborateurs en déplacement ou en télétravail.',
        'Nos services incluent des audits complets de vos systèmes informatiques. Nous analysons vos besoins et vous fournissons des recommandations et conseils pour optimiser vos infrastructures et vos processus.',
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 830);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="OurServices">
            <section className="hero-OurServices">
                <div className="hero-overlay-OurServices">
                    <div className="hero-overlay-OurServices-text">
                        <h1>Nos Services</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempore illo voluptates ex asperiores animi commodi, facere magnam aut cumque quisquam nesciunt vel illum enim obcaecati. Veritatis impedit nobis doloremque.
                        </p>
                    </div>
                </div>
            </section>

            {!isMobile ? (
                <section className="hexagon-text-section">
                    <div className="hexagon-container">
                        <div className="nonagone">
                            {activeIndex !== null ? (
                                <p>{descriptions[activeIndex]}</p>
                            ) : (
                                <img src={Logo} alt="Logo" className="center-logo" />
                            )}
                        </div>
                        {titles.map((title, index) => (
                            <div
                                key={index}
                                className="hexagon"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <span>{title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="info-box">
                        <h2>{activeIndex !== null ? titles[activeIndex] : "Sélectionnez un service"}</h2>
                        <p>{activeIndex !== null ? details_description[activeIndex] : "Passez la souris sur un hexagone pour voir plus de détails."}</p>
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
