import "./Footer.scss";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__copyright">
                <p>Copyright: <span>{new Date().getFullYear()}</span> ⓒ</p>
            </div>
        </footer>
    )
}