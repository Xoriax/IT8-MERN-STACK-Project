import React from 'react';
import '../../styles/IToutsourcing.css';
import Carousel from '../../components/Carousel';
import itOutsourcingImage from '../../assets/images/dropdown/ImageInfogerance.png';
import itoutsourcing360 from '../../assets/images/dropdown/itoutsourcing360.png';
import delegration_perso from '../../assets/images/dropdown/delegration_perso.webp'

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
                    <div className="info-box-text ">
                        <h2>Libérez-vous du poids de l'informatique, et concentrez-vous sur votre cœur de métier. </h2>
                        <p>
                            Avec nos services d’infogérance, vous vous libérez des contraintes liées à la gestion quotidienne de votre parc informatique.
                            Notre équipe de techniciens veille au bon fonctionnement de vos équipements et logiciels, en assurant leur maintenance
                            régulière et en résolvant les éventuels problèmes. Vous pouvez ainsi vous concentrer sur votre cœur de métier, en toute
                            tranquillité, tout en bénéficiant d’une infrastructure fiable et performante.
                        </p>
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-text left">
                        <h2>Libérez-vous du poids de l'informatique, et concentrez-vous sur votre cœur de métier. </h2>
                        <p>
                            Avec notre infogérance informatique 360°, nous prenons en charge l'intégralité de votre système informatique pour une tranquillité d'esprit totale.
                            Plus de soucis à vous faire pour :
                            <ul>
                                <li>¤ La maintenance de vos serveurs, réseaux et postes de travail.</li>
                                <li>¤ La sécurité de vos données et de vos systèmes.</li>
                                <li>¤ La mise à jour de vos logiciels et de vos applications.</li>
                                <li>¤ La résolution de vos problèmes informatiques, 24h/24 et 7j/7.</li>
                            </ul>
                            Nos experts se chargent de tout, pour que vous puissiez vous concentrer sur ce qui compte vraiment : votre réussite.
                            En plus de notre service complet, nous vous offrons :
                            <ul>
                                <li>¤ Un interlocuteur unique pour toutes vos questions.</li>
                                <li>¤ Un reporting régulier pour suivre l'état de votre infrastructure.</li>
                                <li>¤ Des solutions personnalisées pour répondre à vos besoins spécifiques.</li>
                            </ul>
                            Avec notre infogérance informatique 360°, vous bénéficiez d'une solution complète, fiable et performante pour un coût maîtrisé.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={itoutsourcing360} alt="IT Outsourcing 360" />
                    </div>
                </div>
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={delegration_perso} alt="Delegation de personnel" />
                    </div>
                    <div className="info-box-text">
                        <h2>Bénéficiez d'une infogérance informatique sur-mesure avec la délégation de personnel. </h2>
                        <p>
                            En complément de notre offre d'infogérance 360°, nous proposons également un service de délégation de personnel.
                            <br />
                            Ce service vous permet de :
                            <ul>
                                <li>¤ Externaliser la gestion de votre équipe informatique.</li>
                                <li>¤ Bénéficier de l'expertise de nos techniciens certifiés.</li>
                                <li>¤ Réduire vos coûts de personnel.</li>
                            </ul>
                            Avec la délégation de personnel, vous avez accès à :
                            <ul>
                                <li>¤ Une équipe dédiée à votre entreprise.</li>
                                <li>¤ Des techniciens formés aux dernières technologies.</li>
                                <li>¤ Un service flexible et adaptable à vos besoins.</li>
                            </ul>
                            La délégation de personnel est la solution idéale pour les entreprises qui souhaitent externaliser la gestion de leur informatique tout en conservant un contrôle total sur leurs ressources.
                            <br />
                            N'hésitez pas à nous contacter pour en savoir plus sur notre offre de délégation de personnel.
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