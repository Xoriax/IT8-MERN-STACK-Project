import React from 'react';
import '../../styles/DBM.css';
import Carousel from '../../components/Carousel';
import DBMImage from '../../assets/images/dropdown/ImageSauvegardeGestionDonnees.png';

function DBM() {
    return (
        <div className="DBM">
            <section className='hero-DBM'>
                <div className="hero-overlay-DBM">
                    <div className="hero-overlay-DBM-text">
                        <h1>Sauvegarde et Gestion de Données</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={DBMImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Travaillez en toute sécurité</h2>
                        <p>
                            La sauvegarde et la protection des données sont au cœur de notre service. Avec des solutions basées sur Microsoft 365 et Synology,
                            nous garantissons un environnement de travail sécurisé et des sauvegardes fiables, accessibles à tout moment.
                            <br /><br />
                            Les atouts de nos solutions :
                            <ul>
                                <li>- Rapidité : Des sauvegardes effectuées en quelques secondes pour une restauration rapide.</li>
                                <li>- Performance : Des processus automatisés, invisibles pour l’utilisateur, et disponibles en continu.</li>
                                <li>- Économie : Réduction des coûts d’infrastructure et suppression des besoins en matériel spécifique.</li>
                                <li>- Votre tranquillité d’esprit est notre priorité : vos données sont surveillées 24h/24 et 7j/7.</li>
                            </ul>
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