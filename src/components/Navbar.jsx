import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        G <span>&</span> B
      </a>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#events" onClick={closeMenu}>
          Events
        </a>

        <a href="#venue" onClick={closeMenu}>
          Venue
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>
      </div>
    </nav>
  );
}

export default Navbar;