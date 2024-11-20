import React from 'react';
import '../../styles/ML.css';
import Carousel from '../../components/Carousel';
import MLImage from '../../assets/images/dropdown/ImageMaterielsLogiciels.png';

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
                        <h2>Gagnez du temps et de l’autonomie</h2>
                        <p>
                            Choisir le bon matériel et les bons logiciels peut transformer votre manière de travailler.
                            Nos experts vous guident dans le choix, l’installation et la maintenance des équipements adaptés à vos besoins,
                            qu’il s’agisse de casques, téléphones ou outils de visioconférence.
                            <br /><br />
                            Que vous soyez en télétravail, sur site ou en mode hybride, nous veillons à ce que vos collaborateurs disposent d’outils modernes
                            et performants pour maximiser leur efficacité. Notre accompagnement complet vous permet de rester concentré sur vos priorités,
                            tout en bénéficiant d’une infrastructure adaptée à votre manière de travailler.
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