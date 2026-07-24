
import { Inicio } from "./inicio";

const initialState = {
  opcionInicio: "",
};

const reducer = (state, action) => {
  switch (action.type) {

    case Inicio.seleccionar:
      return {
        ...state,
        opcionInicio: action.payload,
      };

    default:
      return state;
  }
};

export { reducer };
export { initialState };