import React from 'react';
import '../../styles/TT.css';
import Carousel from '../../components/Carousel';
import TTImage from '../../assets/images/dropdown/ImageTelephonieTeams.png';

function TT() {
    return (
        <div className="TT">
            <section className='hero-TT'>
                <div className="hero-overlay-TT">
                    <div className="hero-overlay-TT-text">
                        <h1>Téléphonie / TEAMS</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={TTImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Simplifiez la communication dans vos équipes</h2>
                        <p>
                            Grâce à l’intégration de la téléphonie Microsoft Teams, vos équipes communiquent de manière fluide, sur tous les supports.
                            Cette solution moderne permet de réduire vos coûts tout en augmentant votre productivité.
                            <br /><br />
                            Les bénéfices :
                            <br /><br />
                            <ul>
                                <li>- Une solution clé en main pour les appels et la collaboration.</li>
                                <li>- Une intégration complète dans votre espace Teams avec contacts et annuaires.</li>
                                <li>- Une disponibilité sur tous vos appareils, que vous soyez au bureau, en télétravail ou en déplacement.</li>
                                <li>- Une sécurité et une fiabilité garanties grâce à une infrastructure certifiée Microsoft.</li>
                            </ul>
                            <br /><br />
                            Disponible dans plus de 70 pays, cette solution évolutive s’adapte à vos besoins sans nécessiter d’investissements matériels lourds.
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

export default TT;