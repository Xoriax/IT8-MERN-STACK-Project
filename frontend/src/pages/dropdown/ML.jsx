import React from 'react';
import '../../styles/ML.css';
import Carousel from '../../components/Carousel';
import MLImage from '../../assets/images/dropdown/ImageMaterielsLogiciels.png';
import DLL from '../../assets/images/dropdown/DLL.png';

function ML() {
    return (
        <div className="ML">
            <section className='hero-ML'>
                <div className="hero-overlay-ML">
                    <div className="hero-overlay-ML-text">
                        <h1>Matériels / Logiciels</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={MLImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Optimisez vos investissements technologiques avec IT8-Solutions : Vente de matériel et licences logicielles</h2>
                        <p>
                            Chez IT8-Solutions, nous comprenons que les outils technologiques de pointe sont essentiels à la performance et à la compétitivité de votre entreprise. C'est pourquoi nous vous proposons une large gamme de matériels et de licences logicielles adaptés à vos besoins. En partenariat avec DLL, un leader mondial du financement, nous vous offrons également des solutions de leasing flexibles et avantageuses pour faciliter vos investissements.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h2>Pourquoi choisir IT8-Solutions pour vos besoins en matériel et logiciels ?</h2>
                        <p>
                            <ul>
                                <li>¤ Un catalogue complet et à jour : Nous vous proposons une sélection des meilleurs équipements informatiques et licences logicielles, incluant les dernières innovations pour soutenir la croissance de votre entreprise.</li>
                                <li>¤ Solutions adaptées : Que vous ayez besoin de logiciels de productivité, de solutions de sécurité ou d’équipements réseaux, nos offres sont personnalisées pour répondre précisément à vos exigences.</li>
                                <li>¤ Accompagnement dédié : Nos experts sont à votre écoute pour analyser vos besoins et vous conseiller dans le choix des matériels et logiciels qui maximiseront votre performance.</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={DLL} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Des offres de leasing flexibles avec DLL</h2>
                        <p>
                            Pour vous aider à financer vos projets technologiques sans compromettre votre trésorerie, IT8-Solutions s’appuie sur l’expertise de DLL, un acteur mondial du financement avec plus de 30 milliards d'euros d’actifs gérés.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h2>Qui est DLL ?</h2>
                        <p>
                            Créée en 1969 et siégeant à Eindhoven, aux Pays-Bas, DLL est une entreprise spécialisée dans le financement aux fournisseurs (Vendor Finance). Avec une présence dans plus de 25 pays et des solutions couvrant des secteurs variés tels que la santé, la technologie, la construction et bien d’autres, DLL accompagne les entreprises tout au long du cycle de vie de leurs actifs. En tant que filiale à 100 % de Rabobank Group, DLL est un partenaire de confiance pour des solutions de financement durables.
                            <br />
                            Les avantages du leasing avec IT8-Solutions et DLL
                        </p>
                        <p>
                            <ul>
                                <li>¤ Flexibilité financière : Louez vos équipements et licences sans immobiliser votre capital.</li>
                                <li>¤ Solutions sur mesure : Adaptez les durées et montants de vos contrats à vos besoins.</li>
                                <li>¤ Modernisation continue : Accédez facilement aux dernières technologies et évitez l’obsolescence.</li>
                                <li>¤ Accompagnement global : Bénéficiez d’un support tout au long du cycle de vie de vos actifs.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="info-box-image">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gVBuyfGumZU?si=m-GFzqJJ1VI1yTxN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h2>Pourquoi nous faire confiance ?</h2>
                        <p>
                            Avec IT8-Solutions, vous avez l’assurance d’un service complet, alliant produits de qualité, expertise technique et solutions de financement innovantes. Notre objectif est de rendre la technologie accessible et stratégique pour répondre aux défis actuels et futurs de votre entreprise.
                            <br /><br />
                            Prêts à dynamiser vos activités ? Contactez IT8-Solutions pour une consultation personnalisée et découvrez comment nos offres de matériels, licences logicielles et solutions de leasing peuvent transformer vos opportunités technologiques !
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

export default ML;