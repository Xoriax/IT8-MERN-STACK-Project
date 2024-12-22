import React from 'react';
import '../../styles/MW.css';
import Carousel from '../../components/Carousel';
import MoW from '../../assets/images/dropdown/MW.jpg';
import logitech from '../../assets/images/dropdown/logitech.png';
import Yealink from '../../assets/images/dropdown/Yealink.webp';
import barvo from '../../assets/images/dropdown/barvo.png';
import Polycom from '../../assets/images/dropdown/Poly.png';
import PKMW from '../../assets/images/dropdown/PKMW.jpg';

function MW() {
    return (
        <div className="MW">
            <section className='hero-MW'>
                <div className="hero-overlay-MW">
                    <div className="hero-overlay-MW-text">
                        <h1>Modern Workspace</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={MoW} alt="Modern Workspace" />
                    </div>
                    <div className="info-box-text">
                        <h2>Créez un espace de travail moderne avec IT8-Solutions : Votre partenaire pour des salles de réunion connectées</h2>
                        <p>
                            Chez IT8-Solutions, nous vous aidons à transformer vos espaces de travail en environnements collaboratifs et technologiques.
                            <br />
                            Grâce à des solutions modernes et intuitives, nous proposons des installations complètes de salles de réunion, équipées des technologies des marques leaders telles que Logitech, Yealink, Barco et Polycom.
                            <br />
                            Offrez à vos équipes des outils performants pour réinventer vos réunions.
                            <br />
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            <h2>Des technologies de pointe pour vos salles de réunion</h2>
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            <h4>Logitech – Simplifiez vos vidéoconférences</h4>
                            Logitech propose des solutions de collaboration efficaces et accessibles.
                            <br />
                            Parmi ses produits phares, la Logitech Rally Plus est un système de vidéoconférence haut de gamme qui offre une qualité audio et vidéo exceptionnelle.
                            <br />
                            Avec une gestion avancée des câbles et une installation adaptée aux différentes tailles de salles, la Logitech Rally Plus est idéale pour des réunions fluides et productives.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={logitech} alt="logitech Logo" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={Yealink} alt="Yealink logo" />
                    </div>
                    <div className="info-box-text">
                        <p>
                            <h4>Yealink – Connectivité optimale et design intuitif </h4>
                            Yealink est reconnu pour ses solutions de collaboration intégrées.
                            <br />
                            Le Yealink MeetingBar A20, une barre de collaboration tout-en-un, transforme vos salles de petite et moyenne taille en espaces de réunion intelligents.
                            <br />
                            Avec des capacités de vidéo 4K, un audio cristallin et une compatibilité avec les principales plateformes comme Zoom ou Teams, cet équipement garantit des réunions sans encombre.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            <h4>Barco – Partagez vos idées en un clic</h4>
                            Barco facilite la collaboration grâce à ses solutions de présentation sans fil.
                            <br />
                            Le Barco ClickShare CX-30 est l’outil parfait pour les salles de réunion modernes.
                            <br />
                            Ce dispositif permet de partager des présentations, des vidéos et d’autres contenus en toute simplicité, sans configurations complexes.
                            <br />
                            Compatible avec tous les systèmes d’exploitation, il favorise une expérience collaborative instantanée.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={barvo} alt="barvo logo" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={Polycom} alt="Poly logo" />
                    </div>
                    <div className="info-box-text">
                        <p>
                            <h4>Polycom – Une expérience audio immersive</h4>
                            Polycom, désormais Poly, excelle dans la conception de technologies audio et vidéo immersives.
                            <br />
                            Le Poly Studio X50, une barre de vidéoconférence tout-en-un, offre un son riche et une vidéo de haute qualité pour les salles de taille moyenne.
                            <br />
                            Avec des fonctions de suivi vocal intelligent et une intégration fluide avec les plateformes de réunion, elle garantit une expérience collaborative exceptionnelle.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            <h2>Pourquoi choisir IT8-Solutions pour vos espaces de travail modernes ? </h2>

                            <ul>
                                <li>¤ Installation sur mesure : Nos experts conçoivent et mettent en place des solutions adaptées à vos besoins et à vos espaces. </li>
                                <li>¤ Technologies leaders : En travaillant avec les meilleures marques du secteur, nous garantissons des outils fiables et performants. </li>
                                <li>¤ Support continu : Bénéficiez d’un accompagnement technique complet, de l’analyse de vos besoins à la maintenance. </li>
                                <li>¤ Formation dédiée : Nous formons vos équipes pour une prise en main rapide et efficace des nouveaux équipements. </li>
                            </ul>
                            <br /><br />
                            Investissez dans la collaboration de demain
                            <br />
                            Avec IT8-Solutions, transformez vos réunions en expériences collaboratives enrichies.
                            <br />
                            Nous combinons expertise, technologies de pointe et accompagnement personnalisé pour vous offrir des solutions à la hauteur de vos ambitions.
                            <br />
                            Contactez-nous dès aujourd’hui pour une consultation gratuite et découvrez comment nos solutions Modern Workplace peuvent révolutionner vos espaces de travail !
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={PKMW} alt="IT Outsourcing" />
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

export default MW;