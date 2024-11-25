import React from 'react';
import '../styles/Card/CardDavid.css';
import WavingHand from '../assets/images/Card/waving-hand.png';
import LinkedinIcon from '../assets/images/Card/LinkedinIcon.png';

import QRCODEDAVID from '../assets/images/Card/DAVIDQRCODE.png'

function CardDavid() {
    return (
        <div className="container-card-david">
            <div className="card-david">
                <div className="card-inner-david">
                    <div className="front-david">
                        <h2 className="front-card-h2-david">DAVID DO</h2>
                        <p className="front-card-p-david">PRÉSIDENT <br /> DIRECTEUR COMMERCIAL <br /> IT8 SOLUTIONS, FRANCE</p>
                        <button className="front-card-btn-david">MORE INFORMATION</button>
                    </div>

                    <div className="back-david">
                        <img className="back-card-img-david" src={WavingHand} alt="Waving hand" />
                        <h1 className="back-card-h1-david">
                            DAVID <span className="back-card-span-david"><br />DO</span>
                        </h1>
                        <p className="back-card-p-david">
                            Texte présentation de la personne pour expliquer qui il est au sein d' <span className="back-card-span-david">IT8 SOLUTIONS</span>
                        </p>

                        <div className="row-david">
                            <button>Follow</button>
                        </div>

                        <div className="linkedin-row-david">
                            <a href="https://www.linkedin.com/in/david-do-a1590046/" target='_blank' rel="noopener noreferrer" className="back-card-link-david">
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </a>
                        </div>

                        <img className="back-card-qr-david" src={QRCODEDAVID} alt="QR Code" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDavid;
