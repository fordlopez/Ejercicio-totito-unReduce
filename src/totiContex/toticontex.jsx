import { Inicio } from "./inicio";

const initialState = {
  opcionInicio: "",
  continuar: false,
  tablero: Array(9).fill(null),
  turno: "x",
};
let nuvoArrglo;

    const combinacionesGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const verificarGanador = (symbol) => {
      const combinacionesGanadoras = ganadores.some(item=>item)
    }


const reducer = (state, action) => {
  switch (action.type) {
    case Inicio.seleccionar:
      return {
        ...state,
        opcionInicio: action.payload,
      };

    case Inicio.continuear:
      return {
        ...state,
        continuar: true,
      };

    case Inicio.reiniciar:
      return initialState;

    case Inicio.marcarCasilla: {
      if (!action.payload || action.payload.index == null) {
       nuvoArrglo [...state.tablero];
        return state;
      }

      const tablero = [...state.tablero];
      tablero[action.payload.index] = action.payload.symbol;

      return {
        ...state,
        tablero[...nuvoArrglo],
        turno: state.turno === "x" ? "o" : "x",
      };
    }

    default:
      return state;
  }
};

export { reducer, initialState };
