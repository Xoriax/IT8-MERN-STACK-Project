import React from 'react';
import '../styles/WhoWeAre.css';
import CardDavid from '../components/CardDavid';
import CardMichel from '../components/CardMichel';

function WhoWeAre() {
    return (
        <div className="WhoWeAre">
            <section className="hero-WhoWeAre">
                <div className="hero-overlay-WhoWeAre">
                    <div className="hero-overlay-WhoWeAre-text">
                        <h1>Qui sommes-nous ?</h1>
                    </div>
                </div>
            </section>
            <div className="card-container">
                <CardDavid />
                <CardMichel />
            </div>
        </div>
    );
}

export default WhoWeAre;
