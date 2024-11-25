import React from 'react';
import '../styles/Card/CardMichel.css';
import WavingHand from '../assets/images/Card/waving-hand.png';
import LinkedinIcon from '../assets/images/Card/LinkedinIcon.png';

import QRCODEMICHEL from '../assets/images/Card/MICHELQRCODE.png'

function CardMichel() {
    return (
        <div className="container-card-michel">
            <div className="card-michel">
                <div className="card-inner-michel">
                    <div className="front-michel">
                        <h2 className="front-card-h2-michel">MICHEL KHAMXAY</h2>
                        <p className="front-card-p-michel">PRÉSIDENT, <br /> DIRECTEUR TECHNIQUE, <br /> IT8 SOLUTIONS, FRANCE</p>
                        <button className="front-card-btn-michel">MORE INFORMATION</button>
                    </div>

                    <div className="back-michel">
                        <img className="back-card-img-michel" src={WavingHand} alt="Waving hand" />
                        <h1 className="back-card-h1-michel">
                            MICHEL <span className="back-card-span-michel">KHAMXAY</span>
                        </h1>
                        <p className="back-card-p-michel">
                            Texte présentation de la personne pour expliquer qui il est au sein d' <span className="back-card-span-michel">IT8 SOLUTIONS</span>
                        </p>

                        <div className="row-michel">
                            <button>Follow</button>
                        </div>

                        <div className="linkedin-row-michel">
                            <a href="/" target='_blank' rel="noopener noreferrer" className="back-card-link-michel">
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </a>
                        </div>

                        <img className="back-card-qr-michel" src={QRCODEMICHEL} alt="QR Code" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardMichel;
