import React from 'react';
import '../../styles/IToutsourcing.css';
import Carousel from '../../components/Carousel';
import itOutsourcingImage from '../../assets/images/dropdown/ImageInfogerance.png';

function IToutsourcing() {
    return (
        <div className="IToutsourcing">
            <section className='hero-IToutsourcing'>
                <div className="hero-overlay-IToutsourcing">
                    <div className="hero-overlay-IToutsourcing-text">
                        <h1>infogérance</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={itOutsourcingImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Gagnez en sérénité</h2>
                        <p>
                            Avec nos services d’infogérance, vous vous libérez des contraintes liées à la gestion quotidienne de votre parc informatique.
                            Notre équipe de techniciens veille au bon fonctionnement de vos équipements et logiciels, en assurant leur maintenance
                            régulière et en résolvant les éventuels problèmes. Vous pouvez ainsi vous concentrer sur votre cœur de métier, en toute
                            tranquillité, tout en bénéficiant d’une infrastructure fiable et performante.
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

export default IToutsourcing;