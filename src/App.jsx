import { useReducer } from "react";
import HumanoVsHumano from "./HumanoVsHumano/HumanoVsHumano";
import { PantallaInical } from "./pantallaInical/pantallaInical";
import { reducer, initialState } from "./totiContex/toticontex";
import { Inicio, OpcionesValidas } from "./totiContex/inicio";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  return (
    <>
      {!state.continuar && (
        <PantallaInical state={state} dispatch={dispatch} />
      )}
      {state.continuar && (
        <div className="game-container">
          <p>Bienvenido al juego</p>
          {state.opcionInicio === OpcionesValidas.HH ? (
            <HumanoVsHumano regresar={() => dispatch({ type: Inicio.reiniciar })} />
          ) : (
            <p>Modo seleccionado: {state.opcionInicio}</p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
