import React from 'react';
import '../styles/OnSiteManagement.css';

function OnSiteManagement() {
    return (
        <div className="OnSiteManagement">
            <section className="hero-OnSiteManagement">
                <div className="hero-overlay-OnSiteManagement">
                    <div className="hero-overlay-OnSiteManagement-text">
                        <h1>Régie sur site</h1>
                    </div>
                </div>
            </section>

            <section className='text'>
                <p>
                    L’ensemble de vos besoins informatiques pris en charge
                    <br />
                    Notre service informatique s’engage à répondre à l’ensemble de vos besoins en matière de gestion,
                    maintenance et sécurité de votre infrastructure. Nous offrons une gamme complète de services pour
                    garantir le bon fonctionnement de vos outils numériques, à distance comme sur site.
                </p>
            </section>

            <section className="boxes">
                <div className="box">
                    <h2>Support et assistance utilisateurs illimités (à distance / sur site)</h2>
                    <p>
                        Nous mettons à votre disposition un support utilisateur illimité, disponible à
                        distance ou sur site. Nos experts sont à votre écoute pour résoudre tous vos
                        problèmes techniques rapidement et efficacement, afin d’assurer la continuité de vos activités.
                    </p>
                </div>
                <div className="box">
                    <h2>Administration de la messagerie (Office 365)</h2>
                    <p>
                        Nous assurons l’administration complète de votre messagerie professionnelle via Office 365.
                        Nous gérons la configuration, la sécurité, ainsi que la maintenance de vos outils de communication
                        pour vous offrir une expérience fluide et sécurisée.
                    </p>
                </div>
                <div className="box">
                    <h2>Administration du réseau et des serveurs</h2>
                    <p>
                        Nos services incluent la gestion et l’administration de votre réseau informatique et de vos serveurs.
                        Nous veillons à leur performance, leur sécurité et leur disponibilité, pour garantir un environnement de travail optimal.
                    </p>
                </div>
                <div className="box">
                    <h2>Sécurité de l'infrastructure</h2>
                    <p>
                        La sécurité de votre infrastructure est primordiale. Nous mettons en place des mesures de protection adaptées
                        pour prévenir toute menace, qu’il s’agisse de cyberattaques ou de défaillances techniques.
                    </p>
                </div>
                <div className="box">
                    <h2>Gestion des sauvegardes sur site et hors-site</h2>
                    <p>
                        Nous gérons vos sauvegardes, tant sur site que hors-site, pour protéger vos données contre toute perte accidentelle.
                        Vous pouvez ainsi bénéficier d’une solution de sauvegarde fiable et sécurisée, accessible à tout moment.
                    </p>
                </div>
                <div className="box">
                    <h2>Gestion de la mobilité</h2>
                    <p>
                        Nous vous accompagnons dans la gestion de la mobilité, en vous permettant de travailler en toute sécurité depuis n’importe où,
                        grâce à des solutions adaptées pour vos collaborateurs en déplacement ou en télétravail.
                    </p>
                </div>
                <div className="box">
                    <h2>Audit et Conseil</h2>
                    <p>
                        Nos services incluent des audits complets de vos systèmes informatiques.
                        Nous analysons vos besoins et vous fournissons des recommandations et conseils pour optimiser vos infrastructures et vos processus.
                    </p>
                </div>
                <div className="box">
                    <h2>Vente de matériel et logiciels</h2>
                    <p>
                        Nous proposons également la vente de matériel et de logiciels adaptés à vos besoins spécifiques.
                        Nous vous conseillons sur le choix des équipements pour améliorer la productivité et la performance de votre entreprise.
                    </p>
                </div>
                <div className="box full-width">
                    <h2>Téléphonie et connexion internet</h2>
                    <p>
                        Enfin, nous gérons vos solutions de téléphonie et de connexion internet,
                        en vous offrant des solutions fiables et performantes pour faciliter la communication interne et externe de votre entreprise.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default OnSiteManagement;
