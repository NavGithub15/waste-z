import "./HamburgerMenu.scss"

export default function HamburgerMenu() {
  return (
    <div>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <div className="icon-container">
            <div className="icon"></div>
          </div>
        </ul>
      </div>
    </div>
  );
}
