import React, { useEffect } from 'react';
import '../styles/Footer.css';
import LinkedInLogo from '../assets/images/Footer/LinkedInLogo.png';
import LocationIcon from '../assets/images/Footer/LOCATIONICON.png';
import ClockIcon from '../assets/images/Footer/CLOCKICON.png';
import PhoneIcon from '../assets/images/Footer/PHONEICON.png';
import Logo from '../assets/images/Footer/IT8LogoFooter.png';
import Data4Logo from '../assets/images/Footer/Data4-logo.png';
import EconocomLogo from '../assets/images/Footer/econocom-logo.png';
import FourSeasonsLogo from '../assets/images/Footer/FourSeasons-logo.png';
import HiltiLogo from '../assets/images/Footer/hilti-logo.png';
import IESIGLogo from '../assets/images/Footer/IESIG-logo.png';
import ILCILogo from '../assets/images/Footer/ILCI-logo.png';
import InmacWstoreLogo from '../assets/images/Footer/inmac-wstore-logo.png';
import LAFILogo from '../assets/images/Footer/LAFI-logo.png';
import PetitNavireLogo from '../assets/images/Footer/petit-navire-logo.png';
import ThaiUnionLogo from '../assets/images/Footer/ThaiUnion-logo.png';
import TrigoLogo from '../assets/images/Footer/trigo-logo.png';
import { Link } from 'react-router-dom';

function Footer() {

    useEffect(() => {
        const logosContainer = document.querySelector('.logos-slide-container');
        const logosSlide = document.querySelector('.logos-slide');
        const clone = logosSlide.cloneNode(true);
        logosContainer.appendChild(clone);

        const interval = setInterval(() => {
            logosContainer.scrollLeft += 1;
            if (logosContainer.scrollLeft >= logosSlide.offsetWidth) {
                logosContainer.scrollLeft = 0;
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <h3 className='h3-autoscroll'>ILS NOUS FONT CONFIANCE</h3>

            <div className="logos-slide-container">
                <div className="logos-slide">
                    <img src={Data4Logo} alt="Data4" />
                    <img src={EconocomLogo} alt="Econocom" />
                    <img src={FourSeasonsLogo} alt="Four Seasons" />
                    <img src={HiltiLogo} alt="Hilti" />
                    <img src={IESIGLogo} alt="IESIG" />
                    <img src={ILCILogo} alt="ILCI" />
                    <img src={InmacWstoreLogo} alt="Inmacwstore" />
                    <img src={LAFILogo} alt="LAFI" />
                    <img src={PetitNavireLogo} alt="Petit Navire" />
                    <img src={ThaiUnionLogo} alt="Thai Union" />
                    <img src={TrigoLogo} alt="Trigo" />
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-box footer-left-box">
                    <a href='/'>
                        <img src={Logo} alt="Logo" />
                    </a>
                    <p>Suivez-nous sur :</p>
                    <a href="https://www.linkedin.com/company/it8-solutions/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>

                <div className="footer-box footer-middle-box">
                    <h3>Nos Services</h3>
                    <div className="services-columns">
                        <ul>
                            <li className='navbar-links-hover'><Link to="/IToutsourcing" onClick={handleLinkClick}>Infogérance</Link></li>
                            <li className='navbar-links-hover'><Link to="/CollabSolu" onClick={handleLinkClick}>Solutions Collaboratives</Link></li>
                            <li className='navbar-links-hover'><Link to="/Cybersecurity" onClick={handleLinkClick}>Sécurité Informatique</Link></li>
                            <li className='navbar-links-hover'><Link to="/DBM" onClick={handleLinkClick}>Sauvegarde et Sécurisation de Données</Link></li>
                        </ul>
                        <ul>
                            <li className='navbar-links-hover'><Link to="/TT" onClick={handleLinkClick}>Téléphonie</Link></li>
                            <li className='navbar-links-hover'><Link to="/ML" onClick={handleLinkClick}>Matériels / Logiciels</Link></li>
                            <li className='navbar-links-hover'><Link to="/MW" onClick={handleLinkClick}>Modern Workplace</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-box footer-right-box">
                    <div className="footer-right-box-content">
                        <h3>Nos Bureaux</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <img src={LocationIcon} alt="Location" className="icon" />
                                <span><a href="https://maps.app.goo.gl/Z7Ub3nU17PTxpbKc7" target='blank'>47 Rue du Père Corentin<br />75014 Paris</a></span>
                            </div>
                            <div className="contact-item">
                                <img src={ClockIcon} alt="Clock" className="icon" />
                                <span>Lun - Ven : 9h00 - 12h00<br />Lun - Ven : 14h00 - 18h00</span>
                            </div>
                            <div className="contact-item">
                                <img src={PhoneIcon} alt="Phone" className="icon" />
                                <span><a href="tel:+33178911880">Tel : +33 1 78 91 18 80</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-box footer-helpdesk-box">
                    <h3>Notre Help Desk</h3>
                    <div className="contact-item">
                        <img src={ClockIcon} alt="Clock" className="icon" />
                        <span>Lun - Ven : 9h00 - 18h00</span>
                    </div>
                </div>
            </div>

            <div className="footer-divider"></div>
            <div className="footer-bottom">
                <span>© 2024 - IT8 SOLUTIONS</span>
                <span>Mentions Légales - Politique de confidentialité</span>
            </div>
        </footer>
    );
}

export default Footer;
