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
                        <h2>Boostez votre performance grâce aux solutions collaboratives d'entreprise </h2>
                        <p>
                            Dans un monde professionnel en constante évolution, la collaboration efficace est devenue la clé du succès. 
                            <br />
                            Une solution collaborative d'entreprise, c'est bien plus que de simples outils de communication : 
                            <br />
                            c'est un environnement numérique unifié qui rassemble vos équipes, vos données et vos processus. 
                            <br />
                            Imaginez un espace centralisé où chacun peut accéder aux informations, partager ses idées et collaborer sur des projets en temps réel, 
                            où qu'il se trouve.
                            <br />
                            En optant pour des solutions telles que Teams ou SharePoint, votre entreprise bénéficiera d'avantages considérables : 
                            <br />
                            communication fluide et transparente, gestion de projet simplifiée, partage de documents sécurisé et centralisé, 
                            automatisation des tâches et meilleure prise de décision. Le résultat ? Une productivité accrue, 
                            une meilleure réactivité face aux changements et une collaboration propice à l'innovation.
                            <br />
                            Une solution collaborative d'entreprise présente de nombreux avantages. Tout d'abord, 
                            elle améliore l'efficacité opérationnelle en simplifiant le partage de fichiers et d'informations, 
                            réduisant ainsi le temps consacré à la recherche de données.
                            <br />
                            De plus, ces solutions favorisent une communication transparente et instantanée, 
                            ce qui renforce la cohésion d'équipe et diminue les silos d'information. 
                            <br />
                            La flexibilité offerte par des outils comme Teams et SharePoint permet également de s'adapter aux différents styles de travail, 
                            que ce soit en présentiel ou en télétravail. 
                            <br />
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