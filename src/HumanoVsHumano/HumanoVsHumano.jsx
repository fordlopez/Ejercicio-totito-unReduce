import { use, useContext, useState } from "react";
import "./HumanoVsHumano.css";
import { Contex } from "../contex/contex";

function HumanoVsHumano({ regresar }) {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState("X");
  const [state,MarcarCasilla,RevisarGanadro] =useContext(Contex)
  const [bloqueo, setBloqueo] = useState(false);
const [ganador, setGanador] = useState("empate");
  const marcarCasilla = (index) => {
    if (tablero[index] || bloqueo) {
      return;
    }

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turno;
    setTablero(nuevoTablero);
    setTurno(turno === "X" ? "O" : "X");
  };

  useEffect(() => {
    const {isGanador, ganador} = revisarGanador()
    if ((isGanadorx || isGanadorO) && blaquo != turno || state.tablero.every(item=> item !== undefined)) {



   revisarGanador(state.tablero);
   setBloqueo(true);
    
   
    }else if ()
  }, [state.tablero]);

 
    for (const combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion

  return (
    <div className="hvh-container">
      <header className="hvh-topbar">
        <button className="btn-back" type="button" onClick={regresar}>
          <span className="btn-back-arrow">←</span>
          <span>Regresar</span>
        </button>
        <h1 className="hvh-title">Humano vs Humano</h1>
        <span className="topbar-spacer" aria-hidden="true"></span>
      </header>

      <main className="hvh-main">
        <section className="info-panel">
         
         
          <div className="info-card turn-card">

            { bloqueo ? (<span className="info-label">Juego terminado</span>) : (
              <span className="info-label">Turno actual {turno}</span>
            )}

            <span className="info-value">Jugador {ganador}</span>

          </div>

          <div className="info-card player-card">
            <span className="player-badge player-x">X</span>
            <span className="player-name">Jugador X</span>
          </div>

          <div className="info-card player-card">
            <span className="player-badge player-o">O</span>
            <span className="player-name">Jugador O</span>
          </div>
        </section>


        <section className="board" aria-label="Tablero de Totito">
          {tablero.map((valor, index) => (
            <div
              key={index}
              className="casilla xox "
              onClick={() => marcarCasilla(index)}
              role="button"
              tabIndex={0}
            >
              {valor}
            </div>
          ))}
        </section>

        <div className="actions">
          <button className="btn-primary" type="button" onClick={reiniciar}>
            Reiniciar partida
          </button>
        </div>
      </main>
    </div>
  );
}
}
export default HumanoVsHumano;
