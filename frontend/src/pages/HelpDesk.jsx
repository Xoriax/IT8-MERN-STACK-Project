import React, { useState } from 'react';
import '../styles/HelpDesk.css';

import ticketingprocess from '../assets/images/HelpDesk/ProcessTicket.png';
import ArrowIcon from '../assets/images/WhoWeAre/ArrowIcon.png';

function HelpDesk() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="HelpDesk">
            <section className='hero-HelpDesk'>
                <div className="hero-overlay-HelpDesk">
                    <div className="hero-overlay-HelpDesk-text">
                        <h1>HELPDESK</h1>
                    </div>
                </div>
            </section>

            <div className="HelpDesk-banner">
                <h3>Helpdesk IT8-Solutions</h3>
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

            <div className="HelpDesk-banner">
                <h3>Processus de Ticketing</h3>
            </div>

            <img src={ticketingprocess} alt="ticketing process" className="image-helpdesk" />

            <div className="HelpDesk-banner">
                <h3>Nos dispositifs technologiques</h3>
            </div>

            <div className="text">
                <p>
                    Notre service s’appuie sur des outils performants et centralisés pour assurer une gestion complète et efficace de vos systèmes informatiques. <br />
                    Grâce à une plateforme unique, nous surveillons vos réseaux, gérons les correctifs, assurons la sécurité et réalisons un inventaire précis de vos équipements. <br />
                    Ce dispositif permet une gestion proactive et une réactivité optimale en cas de besoin.
                    <br /><br />
                    Nous proposons également des solutions avancées pour la gestion des appels. <br />
                    Ces outils permettent de traiter vos demandes en temps réel et d’assurer une interaction fluide et efficace sur tous les canaux de communication. <br />
                    Notre console dédiée optimise la prise en charge des contacts et garantit un suivi personnalisé pour chacun de nos clients.
                    <br /><br />
                    Avec ces dispositifs, nous veillons à simplifier vos opérations tout en vous offrant un service de qualité et adapté à vos besoins.
                </p>
            </div>

            <div className="HelpDesk-banner">
                <h3>Nos Horaires</h3>
            </div>

            <div className="text">
                <p>
                    Notre HelpDesk est disponible pour répondre à vos demandes et vous accompagner dans vos besoins informatiques du 
                    <br /><br />
                    <strong>lundi au vendredi, de 9h à 18h.</strong>
                    <br /><br />
                    Ces horaires sont conçus pour vous offrir un support fiable tout au long de la journée, afin de garantir la continuité de vos activités et résoudre vos problèmes techniques dans les meilleurs délais.
                </p>
            </div>

            <div className="HelpDesk-banner">
                <h3>Structure du Service d’Assistance</h3>
            </div>

            <div className="text">
                <p>
                    Notre service d’assistance est organisé en deux niveaux pour garantir une prise en charge efficace et adaptée à la complexité des demandes. <br />
                    <strong>Assistance Niveau 1 </strong><br />
                    Le premier niveau est dédié aux demandes les plus simples et à la gestion initiale des incidents. <br />
                    Notre équipe : <br />
                </p>
                <ul>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Identifie et trace chaque incident avec précision.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Résout les demandes de faible complexité.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Oriente les cas plus complexes vers le support de Niveau 2 si nécessaire.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Met à jour les états de configuration et assure le suivi dans un système dédié.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Fournit des conseils opérationnels pour aider à une résolution rapide.</li>
                </ul>
                <p>
                    <strong>Assistance Niveau 2</strong> <br />
                    Le second niveau gère les problématiques plus complexes et assure une supervision proactive. <br />
                    Ce niveau inclut : <br />
                </p>
                <ul>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Le tri et le traitement approfondi des incidents signalés.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> La coordination des changements et mises à jour nécessaires.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> La gestion et le suivi des incidents critiques.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> La mise à jour continue de la base de connaissances pour un partage d’informations efficace.</li>
                    <li><img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> Une supervision proactive pour prévenir d’éventuels problèmes avant qu’ils ne surviennent.</li>
                </ul>
                <p>
                    Cette structure garantit un support rapide et efficace, quel que soit le niveau de complexité de vos besoins.
                </p>
            </div>

            <div className="HelpDesk-banner">
                <h3>Notre Catalogue</h3>
            </div>

            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                        <h4>SUPPORT UTILISATEUR & MAINTENANCE DES POSTES</h4>
                        <span className={`accordion-arrow ${activeIndex === 0 ? 'active' : ''}`}></span>
                    </div>
                    {activeIndex === 0 && (
                        <div className="accordion-content">
                            <h5>Support Utilisateur</h5>
                            <ul>
                                <li>
                                    <strong>Assistance technique :</strong>
                                    <p>- Assistance en temps réel par téléphone, chat, ou e-mail pour résoudre les problèmes logiciels ou matériels.</p>
                                </li>
                                <li>
                                    <strong>Prise en main à distance :</strong>
                                    <p>- Résolution de problèmes via un accès à distance sécurisé aux postes utilisateurs.</p>
                                </li>
                                <li>
                                    <strong>Transfert de compétence :</strong>
                                    <p>- Transfert de connaissance sur l'utilisation des logiciels liés au poste de travail (hors soft spécifique) : logiciels bureautiques et bonnes pratiques de sécurité.</p>
                                </li>
                            </ul>

                            <h5>Maintenance Préventive des postes de travail</h5>
                            <ul>
                                <li>
                                    <strong>Mises à jour logicielles : </strong>
                                    <p>- Application régulière des mises à jour systèmes, antivirus, et logiciels pour maintenir les postes à jour et sécurisés.</p>
                                </li>
                                <li>
                                    <strong>Nettoyage des systèmes : </strong>
                                    <p>- Entretien périodique des postes (défragmentation, nettoyage de disque, suppression des fichiers temporaires, etc.).</p>
                                </li>
                                <li>
                                    <strong>Contrôle des performances : </strong>
                                    <p>- Surveillance régulière des performances des postes pour détecter des anomalies avant qu'elles ne deviennent problématiques.</p>
                                </li>
                                <li>
                                    <strong>Gestion des licences logicielles : </strong>
                                    <p>- Suivi, renouvellement, et gestion des licences logicielles pour assurer la conformité.</p>
                                </li>
                                <li>
                                    <strong>Protection antivirus/antimalware : </strong>
                                    <p>- Surveillance, mises à jour, et gestion des solutions antivirus.</p>
                                </li>
                                <li>
                                    <strong>Surveillance proactive : </strong>
                                    <p>- Mise en place de systèmes de monitoring pour détecter et prévenir les problèmes avant qu'ils n'affectent les utilisateurs.</p>
                                </li>
                            </ul>
                            <h5>Maintenance Corrective</h5>
                            <ul>
                                <li>
                                    <strong>Réinstallation système : </strong>
                                    <p>- Réinstallation complète du système d'exploitation en cas de défaillance majeure.</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <h4>MAINTENANCE, ADMINISTRATION DES SERVEUR ET SAUVEGARDES</h4>
                        <span className={`accordion-arrow ${activeIndex === 0 ? 'active' : ''}`}></span>
                    </div>
                    {activeIndex === 1 && (
                        <div className="accordion-content">
                            <h5>Maintenance, administration des serveurs et sauvegardes</h5>
                            <ul>
                                <li>
                                    <strong>Protection antivirus/antimalware :</strong>
                                    <p>- Surveillance, mise à jours, et gestion des solutions antivirus.</p>
                                </li>
                                <li>
                                    <strong>Gestion des accès utilisateurs :</strong>
                                    <p>- Mise en place et gestion des droits d'accès pour les utilisateurs.</p>
                                </li>
                                <li>
                                    <strong>Pare-feu et filtrage de contenu :</strong>
                                    <p>- Configuration et gestion des pare-feu, ainsi que des systèmes de filtrage pour protéger le réseau interne.</p>
                                </li>
                                <li>
                                    <strong>Gestion des incidents de sécurité</strong>
                                    <p>- Réponses rapides aux incidents de sécurité (intrusion, virus, etc) et mise en place de mesure correctives.</p>
                                </li>
                                <li>
                                    <strong>Gestion des licences logicielles</strong>
                                    <p>- Suivi, renouvellement, et gestion des licences logicielles pour assurer la conformité.</p>
                                </li>
                                <li>
                                    <strong>Vérification des sauvegardes</strong>
                                    <p>- assurer la bonne exécution et la vérification des sauvegardes de données critiques.</p>
                                </li>
                                <li>
                                    <strong>Surveillance proactive</strong>
                                    <p>- Mise en place de système de monitoring pour détecter et prévenir des problèmes avant qu'il n'affectent les utilisateurs.</p>
                                </li>
                                <li>
                                    <strong>Accompagnement au Plan de reprise d'activité (PRA):Mise en place et test régulier de plans pour assurer la continuité du service en cas de sinistre majeur</strong>
                                    <p>- Conseil et accompagnement pour assurer la continuité en cas de sinistre majeur.</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <h4>PERIPHERIQUE / CONSEIL & AUDIT / REPORTING</h4>
                        <span className={`accordion-arrow ${activeIndex === 0 ? 'active' : ''}`}></span>
                    </div>
                    {activeIndex === 2 && (
                        <div className="accordion-content">
                            <h5>Gestion des Périphérique</h5>
                            <ul>
                                <li>
                                    <strong>Maintenance des imprimantes et autres périphériques :</strong>
                                    <p>- Dépannage et entretien régulier des imprimantes, scanner etc.</p>
                                </li>
                            </ul>

                            <h5>Conseil et Audit</h5>
                            <ul>
                                <li>
                                    <strong>Audit de sécurité :</strong>
                                    <p>- Évaluation régulière de la sécurité du parc informatique et recommandations pour l'améliorer.</p>
                                </li>
                                <li>
                                    <strong>Conseil en stratégie informatique :</strong>
                                    <p>- Conseils pour l'optimisation du parc informatique en fonction des besoins évolutifs de l'entreprise.</p>
                                </li>
                            </ul>

                            <h5>Documentation et Reporting</h5>
                            <ul>
                                <li>
                                    <strong>Rapport d'activité :</strong>
                                    <p>Éditions et émission de rapports sur l'état du parc informatique, les interventions effectuées, et les recommandations.</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion(3)}>
                        <h4>PRESTATION SOUMISES A CHIFFRAGE</h4>
                        <span className={`accordion-arrow ${activeIndex === 0 ? 'active' : ''}`}></span>
                    </div>
                    {activeIndex === 3 && (
                        <div className="accordion-content">
                            <h5>Prestation soumises a chiffrage</h5>
                            <ul>
                                <li>
                                    <strong>Dépannage sur site :</strong>
                                    <p>- intervention physique sur site pour résoudre des problèmes complexes ou lorsque l'assistance à distance est insuffisante.</p>
                                </li>
                                <li>
                                    <strong>Réparation ou MAJ matérielle :</strong>
                                    <p>- Remplacement ou réparation des composants défectueux (disque durs, alimentations, etc.) ou pour en améliorer la performance.</p>
                                </li>
                                <li>
                                    <strong>Récupération des données :</strong>
                                    <p>- Service de récupération des données en cas de perte ou de corruption.</p>
                                </li>
                                <li>
                                    <strong>Gestion des déploiements :</strong>
                                    <p>- Installation et configuration de nouveaux périphériques.</p>
                                </li>
                                <li>
                                    <strong>Mise à niveau logicielle :</strong>
                                    <p>- Installation des nouvelles versions de logiciels ou systèmes d'exploitation.</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </div >
    );
}

export default HelpDesk;