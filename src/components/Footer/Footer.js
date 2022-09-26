import "./Footer.scss";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import LiveChat from "react-livechat";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__about">
                    <h3 className="footer__heading">About</h3>
                    <p className="footer__text">WASTE Z is an simple initiative with a bigger scope to help reduce the food waste.
                        Our team is actively developing programming skills and we will bring new updates soon.
                    </p>
                </div>
                <div className="footer__lists">
                    <h3>Privacy</h3>
                    <h3>Legal</h3>
                </div>
                <div className="footer__icons">
                    <FaGithub />
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright: <span>{new Date().getFullYear()}</span> ⓒ</p>
            </div>
            <LiveChat license={12026424} />
        </footer>
    )
}