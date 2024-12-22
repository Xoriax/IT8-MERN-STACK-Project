import React from 'react';
import '../../styles/Cybersecurity.css';
import Carousel from '../../components/Carousel';
import CybersecurityImage from '../../assets/images/dropdown/ImageCybersecurite.png';

function Cybersecurity() {
    return (
        <div className="Cybersecurity">
            <section className='hero-Cybersecurity'>
                <div className="hero-overlay-Cybersecurity">
                    <div className="hero-overlay-Cybersecurity-text">
                        <h1>Sécurité Informatique</h1>
                    </div>
                </div>
            </section>

            <section className="info-box">
                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h2>Protégez votre capital numérique : La sécurité informatique by IT8 Solutions </h2>
                        <p>
                            Parce que la sécurité de vos données est primordiale, IT8 Solutions, en partenariat avec Sophos, vous propose une offre complète pour protéger votre parc informatique et garantir la sérénité de votre activité.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h4>Firewalling :</h4>
                        <p>
                            Votre bouclier numérique contre les intrusions
                            Le firewall est la première ligne de défense de votre réseau informatique. Il agit comme un rempart infranchissable, filtrant les accès et bloquant les intrusions malveillantes en provenance d'internet.
                            Bénéfices du firewalling:
                            <ul>
                                <li>¤ Protection contre les cyberattaques: Bloquez les tentatives d'intrusion, les virus, les malwares et autres menaces en temps réel.</li>
                                <li>¤ Contrôle des accès : Définissez des règles d'accès précises pour autoriser ou refuser les connexions à votre réseau.</li>
                                <li>¤ Protection des données sensibles : Empêchez les fuites de données confidentielles et garantissez la confidentialité de vos informations.</li>
                                <li>¤ Tranquillité d'esprit : Travaillez l'esprit serein en sachant votre réseau protégé en permanence.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h4>Antivirus :</h4>
                        <p>
                            Un bouclier impénétrable contre les virus et malwares
                            Les antivirus protègent vos ordinateurs et serveurs contre les programmes malveillants qui peuvent infecter vos systèmes, détruire vos données ou voler vos informations confidentielles.
                            Bénéfices des solutions antivirus :
                            <ul>
                                <li>¤ Détection et suppression des menaces : Analysez en continu vos systèmes pour détecter et supprimer les virus, malwares, spywares, ransomwares et autres menaces.</li>
                                <li>¤ Protection en temps réel : Bénéficiez d'une protection permanente contre les nouvelles menaces grâce à des mises à jour régulières.</li>
                                <li>¤ Sécurité renforcée pour vos données : Protégez vos fichiers et documents importants contre la corruption et le vol.</li>
                                <li>¤ Productivité accrue : Évitez les interruptions de service et les pertes de données causées par les infections virales.</li>
                            </ul>
                            <br />
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h2>IT8 Solutions : Partenaire Sophos pour une sécurité optimale </h2>
                        <p>
                            IT8 Solutions a choisi de s'associer à Sophos, un leader mondial de la cybersécurité, pour vous offrir des solutions de protection performantes et fiables.
                            Sophos, c'est :
                            <ul>
                                <li>¤ Des solutions de sécurité de pointe, reconnues pour leur efficacité et leur simplicité d'utilisation.</li>
                                <li>¤ Une protection multi-niveaux pour une sécurité optimale de vos données et de votre infrastructure informatique.</li>
                                <li>¤ Une expertise reconnue dans le domaine de la cybersécurité.</li>
                            </ul>
                            Faites confiance à IT8 Solutions et Sophos pour protéger votre capital numérique et vous accompagner dans un monde digital en constante évolution.
                            N'hésitez pas à nous contacter pour obtenir une analyse personnalisée de vos besoins en sécurité informatique.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h4>Les solutions Sophos couvrent</h4>
                        <p>
                            Des solutions synchronisées pour des défenses plus intelligentes, plus rapides et plus efficaces.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h4>Sécurité Endpoint </h4>
                        <p>
                            Une cyber protection supérieure protège votre organisation et vos données contre les logiciels malveillants et les attaques avancées.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h4>Sécurité Réseau </h4>
                        <p>
                            Connectez vos réseaux en toute sécurité avec des pare-feux, des points d’accès et des switchs Next-Gen qui prennent en charge une architecture ZTNA.
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h4>Services de sécurité managés – SecOps </h4>
                        <p>
                            Tirez profit de résultats de sécurité supérieurs fournis en tant que service.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h4>Sécurité des messageries </h4>
                        <p>
                            Protection contre les logiciels malveillants, le phishing et les tentatives d’usurpation d’identité (spoofing).
                        </p>
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-text">
                        <h4>Sécurité du Cloud </h4>
                        <p>
                            Protection des charges de travail Cloud avec des processus CPSM pour surveiller les systèmes et l’infrastructure.
                        </p>
                    </div>
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                </div>

                <div className="info-box-content">
                    <div className="info-box-image">
                        <img src={CybersecurityImage} alt="IT Outsourcing" />
                    </div>
                    <div className="info-box-text">
                        <h4>Managed Detection and Response </h4>
                        <p>
                            Cybersécurité en tant que service, protection contre les ransomwares 24/7 et prévention des violations.
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

export default Cybersecurity;