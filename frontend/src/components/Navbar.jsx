import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/Navbar/IT8Logo.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [dropdownClicked, setDropdownClicked] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleServicesClick = (e) => {
        e.preventDefault(); // Empêche la navigation automatique
        if (dropdownClicked) {
            // Si le menu est déjà ouvert, redirige vers la page OurServices
            navigate('/OurServices');
            setDropdownClicked(false); // Réinitialise l'état
            setMenuOpen(false); // Ferme le menu burger après le deuxième clic
        } else {
            // Affiche le dropdown au premier clic
            setDropdownClicked(true);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                {isMobile && (
                    <div className="navbar-contact">
                        <a
                            href="mailto:contact@it8-solutions.com?subject=Objet%20Demande%20de%20Renseignement"
                        >
                            <button className="cta">Contactez-nous</button>
                        </a>
                    </div>
                )}

                {isMobile && (
                    <div
                        className={`burger-icon ${menuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}

                <ul className={`navbar-links ${isMobile && menuOpen ? 'show-menu' : ''}`}>
                    <li>
                        <Link to="/WhoWeAre" onClick={() => setMenuOpen(false)}>
                            Qui sommes-nous?
                        </Link>
                    </li>
                    <li className="dropdown">
                        <a
                            href="/OurServices"
                            onClick={handleServicesClick}
                            className={dropdownClicked ? 'active' : ''}
                        >
                            Nos Services
                        </a>
                        <ul
                            className={`dropdown-menu ${
                                dropdownClicked ? 'dropdown-visible' : ''
                            }`}
                        >
                            <li>
                                <Link to="/IToutsourcing" onClick={() => setMenuOpen(false)}>
                                    Infogérance
                                </Link>
                            </li>
                            <li>
                                <Link to="/CollabSolu" onClick={() => setMenuOpen(false)}>
                                    Solutions Collaboratives
                                </Link>
                            </li>
                            <li>
                                <Link to="/TT" onClick={() => setMenuOpen(false)}>
                                    Téléphonie
                                </Link>
                            </li>
                            <li>
                                <Link to="/Cybersecurity" onClick={() => setMenuOpen(false)}>
                                    Sécurité Informatique
                                </Link>
                            </li>
                            <li>
                                <Link to="/ML" onClick={() => setMenuOpen(false)}>
                                    Matériels / Logiciels
                                </Link>
                            </li>
                            <li>
                                <Link to="/DBM" onClick={() => setMenuOpen(false)}>
                                    Sauvegarde et sécurisation des données
                                </Link>
                            </li>
                            <li>
                                <Link to="/MW" onClick={() => setMenuOpen(false)}>
                                    Modern Workspace
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/HelpDesk" onClick={() => setMenuOpen(false)}>
                            Notre HelpDesk
                        </Link>
                    </li>
                    <li>
                        <Link to="/Conseils" onClick={() => setMenuOpen(false)}>
                            Conseils
                        </Link>
                    </li>
                </ul>

                {!isMobile && (
                    <div className="navbar-contact-desktop">
                        <a
                            href="mailto:contact@it8-solutions.com?subject=Objet%20Demande%20de%20Renseignement"
                        >
                            <button className="cta">Contactez-nous</button>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
