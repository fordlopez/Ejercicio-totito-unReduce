import "./HumanoVsHumano.css";

function HumanoVsHumano({ regresar }) {
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
                        <span className="info-label">Turno actual</span>
                        <span className="info-value">Jugador X</span>
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
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                    <div className="casilla"></div>
                </section>

                <div className="actions">
                    <button className="btn-primary" type="button">
                        Reiniciar partida
                    </button>
                </div>
            </main>
        </div>
    );
}

export default HumanoVsHumano;
