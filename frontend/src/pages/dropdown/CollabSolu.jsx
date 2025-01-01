import React from 'react';
import '../../styles/CollabSolu.css';
import Carousel from '../../components/Carousel';
import CollabSoluImage from '../../assets/images/dropdown/ImageSolutionsCollaboratives.png';
import SharePoint from '../../assets/images/dropdown/SharePoint.jpg';
import AvantageSoluCallab from '../../assets/images/dropdown/AvantageSoluCallab.jpg';

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
                        <h2>Boostez votre performance grâce aux solutions collaboratives d'entreprise </h2>
                        <p>
                            Dans un monde professionnel en constante évolution, la collaboration efficace est devenue la clé du succès.
                            <br />
                            Une solution collaborative d'entreprise, c'est bien plus que de simples outils de communication :
                            <br /><br />
                            ¤ c'est un environnement numérique unifié qui rassemble vos équipes, vos données et vos processus.
                            <br /><br />
                            Imaginez un espace centralisé où chacun peut accéder aux informations, partager ses idées et collaborer sur des projets en temps réel,
                            où qu'il se trouve.
                            <br />
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <p>
                            En optant pour des solutions telles que Teams ou SharePoint, votre entreprise bénéficiera d'avantages considérables :
                            <ul>
                                <li>¤ Une communication fluide et transparente</li>
                                <li>¤ Une gestion de projet simplifiée</li>
                                <li>¤ Un partage de documents sécurisé et centralisé</li>
                                <li>¤ Une automatisation des tâches</li>
                                <li>¤ Une meilleure prise de décision</li>
                            </ul>
                            Le résultat ?
                            <ul>
                                <li>¤ Une productivité accrue</li>
                                <li>¤ Une meilleure réactivité face aux changements</li>
                                <li>¤ Une collaboration propice à l'innovation</li>
                            </ul>
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={SharePoint} alt="SharePoint" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={AvantageSoluCallab} alt="Avantage Solution Collaborative" />
                    </div>
                    <div className="info-box-text">
                        <p>
                            Une solution collaborative d'entreprise présente de nombreux avantages. 
                            <br />
                            Tout d'abord, elle améliore l'efficacité opérationnelle en simplifiant le partage de fichiers et d'informations, réduisant ainsi le temps consacré à la recherche de données.
                            <br />
                            De plus, ces solutions favorisent une communication transparente et instantanée, ce qui renforce la cohésion d'équipe et diminue les silos d'information.
                            <br />
                            La flexibilité offerte par des outils comme Teams et SharePoint permet également de s'adapter aux différents styles de travail,
                            que ce soit en présentiel ou en télétravail.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text-end">
                        <p>
                            Enfin, en facilitant la gestion de projets et la coordination des tâches, ces solutions contribuent à
                            une prise de décision plus rapide et à un meilleur suivi des performances, tout en garantissant la
                            sécurité des données échangées. Choisir notre expertise, c’est garantir une transformation digitale
                            réussie et un environnement de travail optimisé.
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