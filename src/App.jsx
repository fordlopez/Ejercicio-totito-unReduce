import { useReducer } from "react";
import HumanoVsHumano from "./HumanoVsHumano/HumanoVsHumano";
import { PantallaInical } from "./pantallaInical/pantallaInical";
import { reducer, initialState } from "./totiContex/toticontex";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return state.continuar
    ? <HumanoVsHumano state={state} dispatch={dispatch} />
    : <PantallaInical state={state} dispatch={dispatch} />;
}

export default App;
