import React from 'react';
import '../../styles/CollabSolu.css';
import Carousel from '../../components/Carousel';
import CollabSoluImage from '../../assets/images/dropdown/ImageSolutionsCollaboratives.png';

function CollabSolu() {
    return (
        <div className="CollabSolu">
            <section className='hero-CollabSolu'>
                <div className="hero-overlay-CollabSolu">
                    <div className="hero-overlay-CollabSolu-text">
                        <h1>Solutions Collaboratives</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CollabSoluImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Améliorez le travail avec vos collaborateurs</h2>
                        <p>
                            Nous vous accompagnons dans l’optimisation du travail collaboratif grâce à notre expertise des outils Microsoft Office 365.
                            Vos équipes accèdent facilement à leurs documents et applications, quel que soit l’endroit où elles se trouvent, tout en
                            collaborant efficacement.
                            <br /><br />
                            Les avantages :
                            <br /><br />
                            <ul>
                                <li> - Une communication fluide avec vos collaborateurs, clients et partenaires.</li>
                                <li>- La possibilité de travailler depuis n’importe où tout en restant connecté aux projets.</li>
                                <li>- Une image de marque professionnelle renforcée grâce à des outils modernes et fiables.</li>
                                <li>- Une utilisation simple et accessible, sans besoin de connaissances techniques approfondies.</li>
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

export default CollabSolu;