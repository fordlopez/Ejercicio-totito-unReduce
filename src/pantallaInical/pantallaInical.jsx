import "./pantallaInical.css";
import { Inicio, OpcionesValidas } from "../totiContex/inicio";

function PantallaInical({ state, dispatch }) {
  const onClick = (event) => {
    dispatch({
      type: Inicio.seleccionar,
      payload: event.target.id,
    });
  };

  const onStart = () => {
    if (state.opcionInicio) {
      dispatch({ type: Inicio.continuear });
    }
  };

  return (
    <div className="home-container">
      {/* Decoración de fondo geométrica */}
      <div className="bg-decor" aria-hidden="true">
        <span className="shape shape-circle shape-1"></span>
        <span className="shape shape-square shape-2"></span>
        <span className="shape shape-circle shape-3"></span>
        <span className="shape shape-triangle shape-4"></span>
        <span className="shape shape-square shape-5"></span>
      </div>

      <main className="home-content">
        <span className="home-eyebrow">Bienvenido</span>

        <h1 className="home-title">TOTITO</h1>

        <p className="home-subtitle">Selecciona un modo de juego</p>

        <nav className="mode-buttons">
          <button
            id="1"
            className={`mode-btn ${state.opcionInicio === OpcionesValidas.HH ? "active" : ""}`}
            onClick={onClick}
            type="button"
          >
            <span className="mode-icon">👥</span>
            <span className="mode-text">Humano vs Humano</span>
          </button>

          <button
            id="2"
            className={`mode-btn ${state.opcionInicio === OpcionesValidas.HIA ? "active" : ""}`}
            onClick={onClick}
            type="button"
          >
            <span className="mode-icon">🤖</span>
            <span className="mode-text">Humano vs IA</span>
          </button>

          <button
            id="3"
            className={`mode-btn ${state.opcionInicio === OpcionesValidas.AIA ? "active" : ""}`}
            onClick={onClick}
            type="button"
          >
            <span className="mode-icon">⚙️</span>
            <span className="mode-text">IA vs IA</span>
          </button>
        </nav>

        <button
          className="btn-start"
          type="button"
          disabled={!state.opcionInicio}
          onClick={onStart}
        >
          {state.opcionInicio ? "Comenzar a jugar" : "Selecciona un modo primero"}
        </button>
      </main>

      <footer className="home-footer">
        <p>Tres en raya, reinventado</p>
      </footer>
    </div>
  );
}

export { PantallaInical };