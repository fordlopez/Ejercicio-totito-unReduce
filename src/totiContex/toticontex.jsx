import {inicio }from "../ty"

const initilStale={
    opcionInicio:""
}

const reducer=(state,action)=>{

    switch(action.type){
        case inicio.seleccionar
        return(
            ...state,
            opcionInicio:acion.payload.opcionInicio
        )
        break;
        default;
        break;
    }
}
export {reducer}
export{initilStale}