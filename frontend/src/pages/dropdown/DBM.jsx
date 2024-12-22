import React from 'react';
import '../../styles/DBM.css';
import Carousel from '../../components/Carousel';
import DBMImage from '../../assets/images/dropdown/ImageSauvegardeGestionDonnees.png';
import Synology from '../../assets/images/dropdown/Synology.png';
import ExpIT8 from '../../assets/images/dropdown/ExpIT8.png';

function DBM() {
    return (
        <div className="DBM">
            <section className='hero-DBM'>
                <div className="hero-overlay-DBM">
                    <div className="hero-overlay-DBM-text">
                        <h1>Sauvegarde et sécurisation des données</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={DBMImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Boostez votre entreprise avec les solutions de sauvegarde et gestion de données IT8-Solutions </h2>
                        <p>
                            Chez IT8-Solutions, nous savons que la gestion efficace de vos données est essentielle pour garantir le succès de vos activités.
                            <br />
                            C'est pourquoi nous nous sommes associés à Synology Inc., le leader incontesté des solutions de cloud et NAS, pour vous offrir des outils de sauvegarde et de gestion de données de pointe.
                            <br />
                            Une technologie au service de vos données avec les solutions Synology Inc.
                            <br />
                            Les produits de Synology Inc. permettent à chaque entreprise de gérer, sécuriser et protéger ses données, quel que soit l'emplacement à partir duquel un accès est requis.
                            <br />
                            De la technologie Flash aux disques traditionnels en passant par les différents types d'architectures Cloud, Synology Inc. offre des solutions flexibles et puissantes, adaptées à la croissance exponentielle des données dans le monde numérique.
                            <br />
                            Ces solutions s'adaptent à toutes les échelles pour accompagner le développement de vos activités.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h2>Pourquoi adopter des solutions de sauvegarde des données de technologies Synology Inc. Et le savoir faire IT8-Solutions ? </h2>
                        <p>
                            <ul>
                                <li>¤ Sécurité renforcée : Protégez vos données sensibles grâce à des systèmes de sauvegarde avancés et une redondance optimale. Avec Synology Inc., vos informations sont à l'abri des cyberattaques et des pertes accidentelles.</li>
                                <li>¤ Accès simplifié : Accédez à vos fichiers en toute sécurité, où que vous soyez, grâce à des solutions cloud intuitives et à une synchronisation en temps réel. </li>
                                <li>¤ Gestion centralisée : Bénéficiez d'une administration simplifiée de vos données avec une interface conviviale qui permet de suivre et gérer efficacement vos répertoires et sauvegardes. </li>
                                <li>¤ Performances élevées : Profitez d'une infrastructure robuste et réactive qui garantit une disponibilité maximale et des temps d'accès ultra-rapides. </li>
                                <li>¤ Scalabilité adaptée : Que vous soyez une petite entreprise ou une organisation en pleine croissance, les solutions Synology Inc. évoluent avec vos besoins. </li>
                            </ul>
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={Synology} alt="Synology Logo" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={ExpIT8} alt="Expertise IT8" />
                    </div>
                    <div className="info-box-text">
                        <h2>L'expertise IT8-Solutions : votre partenaire de confiance </h2>
                        <p>
                            Chez IT8-Solutions, notre mission est de rendre la technologie accessible, fiable et adaptée à vos objectifs. Nos équipes d'experts vous accompagnent à chaque étape, de l'analyse de vos besoins à l'implémentation et au suivi des solutions.
                            <ul>
                                <li>¤ Audit personnalisé : Nous évaluons vos infrastructures existantes pour identifier les solutions qui maximiseront votre productivité. </li>
                                <li>¤ Déploiement sur mesure : Grâce à notre expertise, nous garantissons une intégration sans accroc de la technologie Synology Inc. dans votre écosystème. </li>
                                <li>¤ Formation et support : Nous formons vos équipes pour une prise en main rapide et vous proposons un support technique réactif et disponible. </li>
                            </ul>
                            Avec IT8-Solutions, vous bénéficiez non seulement des meilleurs outils technologiques, mais aussi d'un accompagnement de qualité pour assurer la continuité et l'efficacité de vos opérations.
                            <br />
                            Transformez votre gestion de données avec IT8-Solutions et Synology Inc..
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

export default DBM;