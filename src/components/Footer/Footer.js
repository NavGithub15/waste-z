import "./Footer.scss";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <ul className="footer__text-wrapper">
                    <li className="footer__text">About us</li>
                    <li className="footer__text">Contact</li>
                    <li className="footer__text">Privacy</li>
                </ul>
                <div className="footer__icon-wrapper">
                    <FaFacebook/>
                    <FaGithub />
                    <FaLinkedin />
                    <FaTwitter />
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright WASTE <strong>Z</strong><span> {new Date().getFullYear()}</span> ⓒ</p>
            </div>
        </footer>
    )
}