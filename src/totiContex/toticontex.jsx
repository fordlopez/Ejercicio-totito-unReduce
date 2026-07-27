import { Inicio, OpcionesValidas } from "./inicio";

const combinacionesGanadoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const crearPartida = () => ({
  tablero: Array(9).fill(null),
  turno: "X",
  ganador: null,
  empate: false,
  mensaje: "El jugador X comienza la partida.",
});

const initialState = {
  opcionInicio: "",
  continuar: false,
  ...crearPartida(),
};

const buscarGanador = (tablero, simbolo) =>
  combinacionesGanadoras.some((linea) => linea.every((posicion) => tablero[posicion] === simbolo));

const reducer = (state, action) => {
  switch (action.type) {
    case Inicio.seleccionar:
      return { ...state, opcionInicio: action.payload };

    case Inicio.continuear:
      if (!Object.values(OpcionesValidas).includes(state.opcionInicio)) return state;
      return { ...state, continuar: true, ...crearPartida() };

    case Inicio.marcarCasilla: {
      const index = action.payload;
      if (state.ganador || state.empate || state.tablero[index] || !Number.isInteger(index)) return state;

      const tablero = [...state.tablero];
      tablero[index] = state.turno;

      if (buscarGanador(tablero, state.turno)) {
        return {
          ...state,
          tablero,
          ganador: state.turno,
          mensaje: `¡El jugador ${state.turno} ha ganado la partida!`,
        };
      }

      if (tablero.every(Boolean)) {
        return { ...state, tablero, empate: true, mensaje: "La partida terminó en empate." };
      }

      const siguienteTurno = state.turno === "X" ? "O" : "X";
      return {
        ...state,
        tablero,
        turno: siguienteTurno,
        mensaje: `Turno del jugador ${siguienteTurno}.`,
      };
    }

    case Inicio.reiniciar:
      return { ...state, ...crearPartida() };

    case Inicio.volverInicio:
      return initialState;

    default:
      return state;
  }
};

export { reducer, initialState };
