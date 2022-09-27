import "./Footer.scss";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__about-lists">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3>Phone</h3>
                </div>
                <div className="footer__lists">
                    <h3>Developers</h3>
                    <h3>Resources</h3>
                    <h3>Privacy</h3>
                </div>
                <div className="footer__icons">
                    <FaGithub className="footer__icon" />
                    <FaFacebook className="footer__icon" />
                    <FaTwitter className="footer__icon"/>
                    <FaInstagram className="footer__icon" />
                    <FaLinkedin className="footer__icon"/>
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright: <span>{new Date().getFullYear()}</span> ⓒ</p>
            </div>
        </footer>
    )
}