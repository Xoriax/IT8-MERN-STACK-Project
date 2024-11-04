import React from 'react';
import '../styles/Footer.css';
import LinkedInLogo from '../assets/images/Footer/LinkedInLogo.png';
import LocationIcon from '../assets/images/Footer/LOCATIONICON.png';
import ClockIcon from '../assets/images/Footer/CLOCKICON.png';
import PhoneIcon from '../assets/images/Footer/PHONEICON.png';
import Logo from '../assets/images/Footer/IT8LogoFooter.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-box footer-left-box">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <p>Suivez-nous sur :</p>
                    <a href="https://www.linkedin.com/company/it8-solutions/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>

                <div className="footer-box footer-middle-box">
                    <h3>Nos Services</h3>
                    <div className="services-columns">
                        <ul>
                            <li className='navbar-links-hover'><Link to="/IToutsourcing">Infogérance</Link></li>
                            <li className='navbar-links-hover'><Link to="/CollabSolu">Solutions Collaboratives</Link></li>
                            <li className='navbar-links-hover'><Link to="/Cybersecuriry">Cybersécurité</Link></li>
                            <li className='navbar-links-hover'><Link to="/DBM">Sauvegarde et Gestion de Données</Link></li>
                        </ul>
                        <ul>
                            <li className='navbar-links-hover'><Link to="/TT">Téléphonie / TEAMS</Link></li>
                            <li className='navbar-links-hover'><Link to="/ML">Matériels / Logiciels</Link></li>
                            <li className='navbar-links-hover'><Link to="/">Régie sur site</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-box footer-right-box">
                    <h3>Contactez-nous</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={LocationIcon} alt="Location" className="icon" />
                            <span><a href="https://maps.app.goo.gl/Z7Ub3nU17PTxpbKc7" target='blank'>47 Rue du Père Corentin<br />75014 Paris</a></span>
                        </div>
                        <div className="contact-item">
                            <img src={ClockIcon} alt="Clock" className="icon" />
                            <span>Lun - Ven : 9h00 - 18h00</span>
                        </div>
                        <div className="contact-item">
                            <img src={PhoneIcon} alt="Phone" className="icon" />
                            <span><a href="tel:+33178911880">Tel : +33 1 78 91 18 80</a></span>
                        </div>
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
