// src/components/Navbar/Navbar.jsx
import './Navbar.css';

/**
 * Navbar — Barra de navegación principal.
 * Solo estructura visual. La navegación se implementará
 * con React Router o manejador de vistas.
 */
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* ── Logo + Nombre ── */}
        <div className="navbar__brand">
          <div className="navbar__logo" aria-hidden="true">
            <div className="navbar__logo-grid">
              <span /><span /><span />
              <span /><span /><span />
              <span /><span /><span />
            </div>
          </div>
          <span className="navbar__name">TOTITO</span>
        </div>

        {/* ── Navegación ── */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#inicio" className="navbar__link navbar__link--active">
                Inicio
              </a>
            </li>
            <li className="navbar__item">
              <a href="#jugar" className="navbar__link">
                Jugar
              </a>
            </li>
            <li className="navbar__item">
              <a href="#creditos" className="navbar__link">
                Creditos
              </a>
            </li>
          </ul>
        </nav>

        {/* ── Burger (mobile) ── */}
        <button className="navbar__burger" aria-label="Abrir menu" type="button">
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
        </button>

      </div>
    </header>
  );
};

export default Navbar;