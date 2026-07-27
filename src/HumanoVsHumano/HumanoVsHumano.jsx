import "./HumanoVsHumano.css";
import { Inicio, OpcionesValidas } from "../totiContex/inicio";

const titulos = {
  [OpcionesValidas.HH]: "Humano vs Humano",
  [OpcionesValidas.HIA]: "Humano vs IA",
  [OpcionesValidas.AIA]: "IA vs IA",
};

function HumanoVsHumano({ state, dispatch }) {
  const iaPendiente = state.opcionInicio !== OpcionesValidas.HH;
  const juegoTerminado = state.ganador || state.empate;

  const marcar = (index) => {
    if (!iaPendiente) dispatch({ type: Inicio.marcarCasilla, payload: index });
  };

  return (
    <div className="hvh-container">
      <header className="hvh-topbar">
        <button className="btn-back" type="button" onClick={() => dispatch({ type: Inicio.volverInicio })}>← <span>Regresar</span></button>
        <h1 className="hvh-title">{titulos[state.opcionInicio]}</h1>
        <span className="topbar-spacer" aria-hidden="true" />
      </header>
      <main className="hvh-main">
        {iaPendiente ? (
          <section className="ai-notice" aria-live="polite"><strong>Modo preparado para IA</strong><span>La conexión con ChatGPT se añadirá aquí. Aún no se envían solicitudes ni se usa una clave.</span></section>
        ) : (
          <section className={`info-card turn-card ${juegoTerminado ? "finished" : ""}`} aria-live="polite">
            <span className="info-label">{juegoTerminado ? "Resultado" : "Estado de la partida"}</span>
            <span className="info-value">{state.mensaje}</span>
          </section>
        )}
        <section className="info-panel">
          <div className={`info-card player-card ${state.turno === "X" && !juegoTerminado ? "current" : ""}`}><span className="player-badge player-x">X</span><span>Jugador X</span></div>
          <div className={`info-card player-card ${state.turno === "O" && !juegoTerminado ? "current" : ""}`}><span className="player-badge player-o">O</span><span>Jugador O</span></div>
        </section>
        <section className={`board ${iaPendiente ? "board-disabled" : ""}`} aria-label="Tablero de Totito">
          {state.tablero.map((valor, index) => (
            <button key={index} className={`casilla ${valor ? `casilla-${valor.toLowerCase()}` : ""}`} type="button"
              onClick={() => marcar(index)} disabled={Boolean(valor) || juegoTerminado || iaPendiente} aria-label={`Casilla ${index + 1}${valor ? `: ${valor}` : " vacía"}`}>
              {valor}
            </button>
          ))}
        </section>
        <div className="actions"><button className="btn-primary" type="button" onClick={() => dispatch({ type: Inicio.reiniciar })}>Reiniciar partida</button></div>
      </main>
    </div>
  );
}

export default HumanoVsHumano;
