import React from 'react';
import '../styles/WhoWeAre.css';
import CardDavid from '../components/CardDavid';
import CardMichel from '../components/CardMichel';
import ArrowIcon from '../assets/images/WhoWeAre/ArrowIcon.png';

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

            <section className='WhoWeAreText'>
                <div className="presentation-text">
                    <p>
                        <strong>IT8 SOLUTIONS, votre partenaire d’infogérance IT de proximité, sur-mesure, depuis 2021</strong><br />
                        Depuis sa création en 2021, IT-8 Solutions est fièrement engagée dans l’offre de services d’infogérance IT
                        hautement personnalisés. Nous mettons un point d'honneur à comprendre en profondeur les besoins uniques
                        de chaque client afin de leur fournir des solutions adaptées et efficaces. Notre approche sur-mesure nous
                        permet de répondre aux défis technologiques avec agilité et réactivité, en offrant un accompagnement de
                        qualité qui garantit la continuité et la performance de vos infrastructures informatiques.
                        <br /><br />
                        Grâce à notre expertise et notre proximité, IT-8 Solutions est devenu un partenaire de confiance pour de nombreuses entreprises,
                        assurant un suivi rigoureux, une assistance technique rapide et un engagement constant pour la satisfaction de nos clients.
                        Que vous ayez besoin de gestion de parc informatique, de sécurité réseau ou de support technique, notre équipe de spécialistes est
                        là pour vous accompagner à chaque étape.
                        <br /><br />
                        <strong>IT-8 Solutions, Pour une infogérance IT fiable, proactive et parfaitement adaptée à vos ambitions.</strong>
                    </p>
                </div>

                <div className="WhoWeAre-banner">
                    <h3>Nos Missions</h3>
                </div>
                <div className="missions-text">
                    <p>
                        En tant que Fournisseur de Services Gérés (MSP), nous proposons une
                        externalisation complète et adaptée des services IT, couvrant plusieurs
                        domaines de compétences clés :
                    </p>
                    <div className="missions-list-container">
                        <ul className="missions-list">
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Gestion et optimisation de l'infrastructure informatique</li>
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Gestion centralisée des inventaires logiciels et matériels</li>
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Cybersécurité</li>
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Assistance technique dédiée</li>
                        </ul>
                    </div>
                </div>

                <div className="esn-text">
                    <p>
                        En parallèle, nous opérons également comme Entreprise de Services du Numérique (ESN), offrant des solutions IT globales aux entreprises grâce à l'expertise de nos Techniciens ou consultants. Déployées chez nos partenaires, ils interviennent sur divers projets, de la conception à la mise en œuvre :
                    </p>
                    <div className="esn-list-container">
                        <ul className="esn-list">
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Conseil stratégique</li>
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Ingénierie de systèmes</li>
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Conception et développement d'applications</li>
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Maintenance proactive</li>
                            <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Formation des équipes</li>
                        </ul>
                    </div>
                </div>

                <div className="WhoWeAre-banner">
                    <h3>“ Votre réussite est notre fierté ”</h3>
                </div>
                <div className="end-text">
                    <p>
                        Notre équipe pluridisciplinaire est constituée de 19 collaborateurs,
                        incluant des techniciens et des spécialistes, qui s'engagent dans une formation continue
                        afin de demeurer à la pointe de l'expertise. Chaque membre de notre équipe apporte des compétences
                        variées et complémentaires, ce qui nous permet de répondre efficacement à une large gamme de besoins informatiques.
                        <br /><br />
                        Chez IT-8 Solutions, nous croyons fermement que l'apprentissage constant est essentiel pour garantir un service de haute qualité.
                        C'est pourquoi nous investissons dans le développement professionnel de nos collaborateurs, leur offrant des opportunités de
                        formation avancée et les dernières mises à jour sur les technologies émergentes. Cette démarche proactive nous permet non seulement
                        de maintenir un niveau d'excellence, mais aussi d'anticiper les évolutions du marché et les attentes de nos clients.
                        <br /><br />
                        De plus, IT-8 Solutions a su établir des relations privilégiées avec les partenaires les plus représentatifs du marché de
                        la vente de matériel informatique. Ces collaborations stratégiques nous donnent accès à des ressources de premier choix et
                        à des technologies de pointe. Grâce à ce réseau, nous sommes en mesure d'offrir à nos clients un service personnalisé et de
                        qualité, adapté à leurs exigences spécifiques.
                        <br /><br />
                        En choisissant IT-8 Solutions, vous optez pour une expertise diversifiée, un service sur-mesure, et un
                        engagement indéfectible envers la satisfaction de vos besoins informatiques.
                    </p>
                </div>

                <div className="WhoWeAre-banner">
                    <h3>une vision de 2 hommes</h3>
                </div>

                <div className="card-container">
                    <CardDavid />
                    <CardMichel />
                </div>
            </section>

        </div>
    );
}

export default WhoWeAre;
