import React from 'react';
import '../styles/HelpDesk.css';

function Conseils() {

    return (
        <div className="HelpDesk">
            <section className='hero-HelpDesk'>
                <div className="hero-overlay-HelpDesk">
                    <div className="hero-overlay-HelpDesk-text">
                        <h1>Conseil</h1>
                    </div>
                </div>
            </section>

            <div className="HelpDesk-banner">
                <h3>C’est quoi le Helpdesk IT8-Solutions ?</h3>
            </div>

            <div className="text">
                <p>
                    Le Helpdesk IT8-Solutions est une plateforme d’assistance informatique simple et accessible. <br />
                    Il s’agit d’un service centralisé qui permet à nos clients de bénéficier d’un support rapide et efficace pour tous leurs besoins techniques.
                    <br /><br />
                    Ce service est conçu pour répondre aux demandes des clients IT8-Solutions tout en offrant notre expertise à d’autres entreprises. <br />
                    Dans certains cas, nous intervenons en toute discrétion, comme si nous faisions partie de leur propre équipe, grâce à un fonctionnement en "Marque Blanche".
                    <br /><br />
                    Avec le Helpdesk, vous avez un point de contact unique pour résoudre vos problèmes informatiques, améliorer vos outils numériques et garantir la continuité de votre activité.
                </p>
            </div>

        </div >
    );
}

export default Conseils;