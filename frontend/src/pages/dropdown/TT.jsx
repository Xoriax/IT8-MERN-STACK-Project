import React from 'react';
import '../../styles/TT.css';
import Carousel from '../../components/Carousel';
import TTImage from '../../assets/images/dropdown/ImageTelephonieTeams.jpg';
import IPCentrex from '../../assets/images/dropdown/IPCentrex.jpg'
import teams from '../../assets/images/dropdown/teams.jpeg'
import fm from '../../assets/images/dropdown/forfait_mobile.jpg'
import fibre from '../../assets/images/dropdown/fibre.jpg'
import sewanCE from '../../assets/images/dropdown/sewanCE.png'
import GainProd from '../../assets/images/dropdown/GainProd.png'
import IMGPRO from '../../assets/images/dropdown/IMGPRO.png'
import MF from '../../assets/images/dropdown/MF.png'
import FiabiliteQualite from '../../assets/images/dropdown/Fiabilite&Qualite.png'
import tel from '../../assets/images/dropdown/tel.jpg'

function TT() {
    return (
        <div className="TT">
            <section className='hero-TT'>
                <div className="hero-overlay-TT">
                    <div className="hero-overlay-TT-text">
                        <h1>Téléphonie</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={TTImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>La téléphonie pour votre entreprise : Simplifiez et optimisez vos communications </h2>
                        <p>
                            Dans un monde professionnel en constante évolution, une communication fluide et efficace est primordiale.
                            <br />
                            C'est là qu'intervient la téléphonie d'entreprise, bien plus qu'un simple outil pour passer des appels.
                            <br />
                            En intégrant des solutions comme IP Centrex, Teams, Mobile et Fibre, vous accédez à une panoplie d'avantages pour optimiser vos communications internes et externes.
                        </p>
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            Voici ce que la téléphonie d'entreprise peut apporter à votre activité :
                            <br />
                            Gain de productivité et collaboration accrue:
                            <br /><br />
                            ¤ Grâce aux solutions collaboratives comme Teams, vous connectez vos équipes instantanément, où qu'elles soient.
                            <br />
                            ¤ Appels vidéo, partage de documents, messagerie instantanée, tout est centralisé pour un travail d'équipe fluide et performant.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={GainProd} alt="Gain Productivite" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={IMGPRO} alt="imagepro" />
                    </div>
                    <div className="info-box-text">
                        <p>
                            Image professionnelle et communication unifiée:
                            <br /><br />
                            ¤ Avec IP Centrex, profitez d'un standard téléphonique virtuel performant.
                            <br />
                            ¤ Accueil personnalisé, gestion des appels simplifiée, et numérotation non géographique renforcent votre image de marque.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            Mobilité et flexibilité:
                            <br /><br />
                            ¤ Les offres Mobile vous permettent de rester joignable partout, tout le temps.
                            <br />
                            ¤ Vos collaborateurs gèrent leurs appels professionnels en toute liberté, sans contrainte géographique.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={MF} alt="Mobilite et flexibiliter" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={FiabiliteQualite} alt="Fiabilite & Qualite" />
                    </div>
                    <div className="info-box-text">
                        <p>
                            Fiabilité et qualité de service:
                            <br /><br />
                            ¤ ¤ La technologie Fibre garantit une connexion internet ultra-rapide et stable, essentielle pour des communications téléphoniques impeccables, sans interruption ni perte de qualité.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            En résumé, la téléphonie d'entreprise vous permet de :
                            <ul>
                                <li>¤ Améliorer la collaboration interne</li>
                                <li>¤ Renforcer votre image de marque</li>
                                <li>¤ Gagner en flexibilité et en mobilité</li>
                                <li>¤ Profiter d'une communication fiable et de haute qualité</li>
                            </ul>
                            Contactez-nous dès aujourd'hui pour découvrir comment nos offres IP Centrex, Teams, Mobile et Fibre peuvent répondre aux besoins spécifiques de votre entreprise et l'accompagner dans son développement.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={tel} alt="telephonie" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h2>Zoom sur les technologies qui révolutionnent votre téléphonie d'entreprise :</h2>
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-text">

                        <p>
                            <h4>1. IP Centrex</h4>
                            Votre standard téléphonique intelligent dans le Cloud
                            Oubliez les installations complexes et coûteuses d'un standard téléphonique traditionnel. Avec IP Centrex, votre standard téléphonique est hébergé dans le Cloud, accessible partout, tout le temps, via une simple connexion internet.
                            Fonctionnalités clés :
                            <ul>
                                <li>¤ Numérotation non géographique : Choisissez un numéro de téléphone national (01, 02…) ou local pour une image nationale et une accessibilité accrue.</li>
                                <li>¤ Standard virtuel avec accueil personnalisé : Créez des menus vocaux interactifs pour orienter efficacement les appelants vers le bon interlocuteur ou service.</li>
                                <li>¤ Gestion des appels simplifiée : Transfert d'appels, mise en attente musicale, messagerie vocale, etc. : facilitez la vie de vos collaborateurs et de vos clients.</li>
                                <li>¤ Supervision et statistiques : Suivez en temps réel les performances de votre standard et l'activité de vos équipes pour optimiser vos process.</li>
                            </ul>
                            Les + : Coûts réduits, flexibilité maximale, évolutivité et simplicité d'utilisation.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={IPCentrex} alt="IPCentrex" />
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={teams} alt="teams" />
                    </div>
                    <div className="info-box-text">
                        <p>
                            <h4>2. Teams</h4>
                            La collaboration et la communication unifiées
                            Microsoft Teams est bien plus qu'un simple outil de communication. C'est une plateforme collaborative complète qui rassemble vos appels, messages instantanés, vidéoconférences, partages de documents et bien plus encore, le tout au même endroit.
                            Fonctionnalités clés :
                            <ul>
                                <li>¤ Appels audio et vidéo haute définition : Communiquez en face à face avec vos collaborateurs et clients partout dans le monde.</li>
                                <li>¤ Messagerie instantanée et partage de fichiers : Échangez des informations, des documents et des idées en temps réel.</li>
                                <li>¤ Espaces de travail collaboratifs : Organisez des projets, partagez des fichiers et collaborez efficacement en équipe.</li>
                                <li>¤ Intégration avec les applications Microsoft 365 : Accédez à vos emails, calendriers et autres outils Microsoft directement depuis Teams.</li>
                            </ul>
                            Les + : Collaboration optimisée, communication fluide, gain de temps et d'efficacité.
                        </p>
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            <h4>3. Nos offres forfaits Mobile :</h4>
                            Restez joignable partout, tout le temps
                            Avec les forfaits Mobile professionnels, vos collaborateurs restent connectés et joignables où qu'ils soient, transformant leur smartphone en véritable outil de travail mobile.
                            Fonctionnalités clés :
                            <ul>
                                <li>¤ Appels, SMS/MMS illimités : Communiquez sans compter avec vos clients et collègues.</li>
                                <li>¤ Internet mobile en 4G/5G : Accédez à vos emails, applications professionnelles et documents en déplacement avec une connexion internet ultra-rapide.</li>
                                <li>¤ Options de téléphonie mobile avancée : Profitez de fonctionnalités comme le double appel, la messagerie vocale visuelle, le transfert d'appel, etc.</li>
                                <li>¤ Gestion simplifiée des forfaits : Contrôlez facilement les coûts et les usages de vos lignes mobiles professionnelles.</li>
                            </ul>
                            Les + : Mobilité accrue, flexibilité pour vos équipes, réactivité et disponibilité optimales.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={fm} alt="Nos forfait mobile" />
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={fibre} alt="fibre" />
                    </div>
                    <div className="info-box-text">
                        <p>
                            <h4>4. Fibre :</h4>
                            La garantie d'une connexion internet ultra-performante
                            La technologie Fibre optique offre une connexion internet haut débit incomparable, essentielle pour garantir la qualité de vos communications professionnelles.
                            Avantages clés :
                            <ul>
                                <li>¤ Débit internet ultra-rapide : Profitez de téléchargements et transferts de données instantanés pour une communication fluide et sans interruption.</li>
                                <li>¤ Stabilité du réseau : La Fibre est moins sensible aux interférences que l'ADSL, garantissant une connexion stable et fiable, même pour les usages intensifs.</li>
                                <li>¤ Qualité de service optimale : La Fibre assure une qualité audio et vidéo exceptionnelle pour vos appels, vidéoconférences et autres applications professionnelles.</li>
                            </ul>
                            Les + : Fiabilité, rapidité, performance et sérénité pour toutes vos communications professionnelles.
                        </p>
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            <h4>5. Sewan Contact Expérience</h4>
                            Développée par Sewan, Contact Experience rassemble l’ensemble des solutions visant à démocratiser l’accès à des outils (Numéros d’accueil, SVI avancé et Centre d’appels dans le Cloud, etc) simples, intuitifs, puissants et automatisés qui permettent une gestion professionnelle des interactions clients pour tous types d’entreprises.
                            Cette solution s’articule autour de trois grands blocs fonctionnels :
                            <ul>
                                <li>¤ La mise en place de numéros intelligents en France et dans le Monde pour la réception de vos appels</li>
                                <li>¤ Des solutions de réception d’appels avancées, allant du simple menu vocal, en passant par la mise en place d’interactions temps réel avec des systèmes d’information, jusqu’à la mise en place d’intelligence artificielle avec l’utilisation de reconnaissance vocal en langage naturel</li>
                                <li>¤ Des services de centre d’appels et de contacts pour être connecté de façon optimisée à vos clients sur tous les canaux de communications</li>
                            </ul>
                            En combinant ces technologies performantes, vous vous offrez une solution de téléphonie complète et évolutive, adaptée aux besoins de votre entreprise.
                            N'hésitez pas à nous contacter pour évaluer ensemble la meilleure combinaison pour votre activité.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={sewanCE} alt="sewan Contact experience" />
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

export default TT;