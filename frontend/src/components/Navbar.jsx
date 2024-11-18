import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/Navbar/IT8Logo.png';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const togglePopup = () => {
        setPopupOpen(!popupOpen);
        setDropdownOpen(false);
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

                <div className="navbar-links-container">
                    <button className={`menu-btn ${isMobile && !popupOpen ? 'show' : ''}`} onClick={togglePopup}>
                        Menu
                    </button>

                    <ul className={`navbar-links ${isMobile && popupOpen ? 'hidden' : ''}`}>
                        <li className='navbar-links-hover'><Link to="/WhoWeAre">Qui sommes-nous?</Link></li>
                        <li className="dropdown navbar-links-hover" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <span>Prestations externalisées</span>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li className='navbar-links-hover'><Link to="/IToutsourcing">Infogérance</Link></li>
                                    <li className='navbar-links-hover'><Link to="/CollabSolu">Solutions Collaboratives</Link></li>
                                    <li className='navbar-links-hover'><Link to="/Cybersecuriry">Cybersécurité</Link></li>
                                    <li className='navbar-links-hover'><Link to="/DBM">Sauvegarde et Gestion de Données</Link></li>
                                    <li className='navbar-links-hover'><Link to="/TT">Téléphonie / TEAMS</Link></li>
                                    <li className='navbar-links-hover'><Link to="/ML">Matériels / Logiciels</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='navbar-links-hover'><Link to="/OnSiteManagement">Régie sur site</Link></li>
                        <li>
                            <a href="mailto:contact@it8-solutions.com?subject=Objet%20Demande%20de%20Renseignement">
                                <button className="cta">Contactez-nous</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {popupOpen && (
                <div className="popup">
                    <button className="close-btn" onClick={togglePopup}>X</button>
                    <ul className="popup-links">
                        <li className='navbar-links-hover'><Link to="/" onClick={togglePopup}>Accueil</Link></li>
                        <li className='navbar-links-hover'><Link to="/WhoWeAre" onClick={togglePopup}>Qui sommes-nous?</Link></li>
                        <li className="dropdown navbar-links-hover" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <span>Prestations externalisées</span>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li className='navbar-links-hover'><Link to="/IToutsourcing" onClick={togglePopup}>Infogérance</Link></li>
                                    <li className='navbar-links-hover'><Link to="/CollabSolu" onClick={togglePopup}>Solutions Collaboratives</Link></li>
                                    <li className='navbar-links-hover'><Link to="/Cybersecuriry" onClick={togglePopup}>Cybersécurité</Link></li>
                                    <li className='navbar-links-hover'><Link to="/DBM" onClick={togglePopup}>Sauvegarde et Gestion de Données</Link></li>
                                    <li className='navbar-links-hover'><Link to="/TT" onClick={togglePopup}>Téléphonie / TEAMS</Link></li>
                                    <li className='navbar-links-hover'><Link to="/ML" onClick={togglePopup}>Matériels / Logiciels</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='navbar-links-hover'><Link to="/OnSiteManagement" onClick={togglePopup}>Régie sur site</Link></li>
                        <li>
                            <a
                                href="mailto:contact@it8-solutions.com?subject=Objet%20Demande%20de%20Renseignement"
                                onClick={togglePopup}
                            >
                                <button className="cta">Contactez-nous</button>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
