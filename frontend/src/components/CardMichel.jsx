import React from 'react';
import '../styles/Card/CardMichel.css';
import WavingHand from '../assets/images/Card/waving-hand.png';
import LinkedinIcon from '../assets/images/Card/LinkedinIcon.png'

function CardMichel() {
    return (
        <div className="container-card">
            <div className="card">
                <div className="card-inner">

                    <div className="front">
                        <h2 className="front-card-h2">MICHEL KHAMXAY</h2>
                        <p className="front-card-p">PRÉSIDENT, <br /> DIRECTEUR TECHNIQUE, <br /> IT8 SOLUTIONS, FRANCE</p>
                        <button className="front-card-btn">MORE INFORMATION</button>
                    </div>

                    <div className="back">

                        <img className="back-card-img" src={WavingHand} alt="Waving hand" />
                        <h1 className="back-card-h1">
                            MICHEL <span className="back-card-span">KHAMXAY</span>
                        </h1>
                        <p className="back-card-p">
                            Texte présentation de la personne pour expliquer qui il est au sein d' <span className="back-card-span">IT8 SOLUTIONS</span>
                        </p>

                        <div className="row">
                            <button>Follow</button>
                        </div>

                        <div className="linkedin-row">
                            <a href="/" target='_blank' rel="noopener noreferrer" className="back-card-link">
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardMichel;
