import React, { useReducer} from 'react';
import {SET_ALERTA} from '../../types/index'
import AlertContext from "./alertaContext"
import alertReducer from "./alertaReducer"

const AlertState = (props) => {

    const initialState = {
        alert: null
    };
    
    const [state, dispatch] = useReducer(alertReducer, initialState)
    

    //Funciones

    const mostrarAlerta = (msg, categoria) =>{
        dispatch({
            type: SET_ALERTA,
            payload:{
                msg,
                categoria
            }
        });
    }

    return ( 
        <AlertContext.Provider
            value={{
                alert: state.alert,

                mostrarAlerta
            }}
        >
            {props.children}
        </AlertContext.Provider>
     );
}
 
export default AlertState;