import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-text">
                Feel free to reach out via email, phone, or connect with me on social media.
            </p>

            {/* First Row: Email, Phone, Location */}
            <div className="contact-row">
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>chethiya19@example.com</span>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>+94 76 224 0099</span>
                </div>
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>Colombo, Sri Lanka</span>
                </div>
            </div>

            {/* Second Row: Social Links */}
            <div className="contact-row">
                <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <a href="https://www.linkedin.com/in/chethiya19" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact-item">
                    <FaGithub className="contact-icon" />
                    <a href="https://github.com/chethiya19" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="contact-item">
                    <FaFacebook className="contact-icon" />
                    <a href="https://www.facebook.com/chethiyanimesha.5" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="contact-item">
                    <FaInstagram className="contact-icon" />
                    <a href="https://www.instagram.com/chethiyasenadheera" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="contact-item">
                    <FaWhatsapp className="contact-icon" />
                    <a href="https://wa.me/94762240099" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
            </div>
        </section>
    );
}
