import { createContext, useReducer } from "react";
import { reducer, initialState } from "../totiContex/toticontex";

const Contex = createContext();

const totiPovovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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



  const RevisarGanador=(symbol)=>{
    const isGanadorx= state.tablero.some(item=>{ item.every(index=> index === state.tablero[indice])=='x'})

const isGanadoro= state.tablero.some(item=>{ item.every(index=> index === state.tablero[indice])=='o'})
        
    
    if(isGanador){
        console.log("Ganador", state.turno)
  }
  return(isGanadorx,isGanadoro) ;
}
  return (
    <Contex.Provider value={{ state, dispatch }}>
      {children}
    </Contex.Provider>
  );
};

export { Contex, totiPovovider };
