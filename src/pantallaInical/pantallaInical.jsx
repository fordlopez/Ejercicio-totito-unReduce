import "./pantallaInical.css";
import { Inicio, OpcionesValidas } from "../totiContex/inicio";

const modos = [
  { id: OpcionesValidas.HH, icono: "👥", titulo: "Humano vs Humano", detalle: "Dos personas juegan en el mismo tablero." },
  { id: OpcionesValidas.HIA, icono: "🤖", titulo: "Humano vs IA", detalle: "Preparado para conectar un rival con IA." },
  { id: OpcionesValidas.AIA, icono: "⚙️", titulo: "IA vs IA", detalle: "Preparado para observar dos agentes de IA." },
];

function PantallaInical({ state, dispatch }) {
  const iniciar = () => dispatch({ type: Inicio.continuear });

  return (
    <div className="home-container">
      <div className="bg-decor" aria-hidden="true">
        <span className="shape shape-circle shape-1" /><span className="shape shape-square shape-2" />
        <span className="shape shape-circle shape-3" /><span className="shape shape-triangle shape-4" />
      </div>
      <main className="home-content">
        <span className="home-eyebrow">Bienvenido</span>
        <h1 className="home-title">TOTITO</h1>
        <p className="home-subtitle">Selecciona un modo de juego</p>
        <div className="mode-buttons" aria-label="Modos de juego">
          {modos.map((modo) => (
            <button key={modo.id} className={`mode-btn ${state.opcionInicio === modo.id ? "active" : ""}`}
              onClick={() => dispatch({ type: Inicio.seleccionar, payload: modo.id })} type="button">
              <span className="mode-icon">{modo.icono}</span>
              <span className="mode-copy"><span className="mode-text">{modo.titulo}</span><small>{modo.detalle}</small></span>
            </button>
          ))}
        </div>
        <button className="btn-start" type="button" disabled={!state.opcionInicio} onClick={iniciar}>
          {state.opcionInicio ? "Comenzar a jugar" : "Selecciona un modo primero"}
        </button>
      </main>
      <footer className="home-footer">Tres en raya, reinventado</footer>
    </div>
  );
}

export { PantallaInical };
