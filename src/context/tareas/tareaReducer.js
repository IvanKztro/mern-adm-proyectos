
import {
    CREATE_TAREA,
    OBTENER_TAREAS,
    DELETE_TAREA,
    SET_TAREA,
    UPDATE_TAREA,
    ERROR_FORMULARIOT
} from '../../types/index'
export default (state, action) =>{
    switch(action.type){
        case CREATE_TAREA:
            return{
                ...state,
                tareasFiltradas: [
                    ...state.tareasFiltradas,
                    action.payload
                ],
                isError: false
            }
        case OBTENER_TAREAS:
            return{
                ...state,
                tareasFiltradas:  action.payload
            }
        case DELETE_TAREA:
            return{
                ...state,
                tareasFiltradas: state.tareasFiltradas.filter( tarea => action.payload !== tarea._id ),
                isError: false
            }
        case SET_TAREA: 
            return{
                ...state,
                tareaEdit: action.payload,
                isError: false
            }

        case UPDATE_TAREA:
            return{
                ...state,
                tareasFiltradas: state.tareasFiltradas.map(tarea => tarea._id === action.payload._id ? action.payload : tarea),
                isError: false

            }
        case ERROR_FORMULARIOT:
            return{
                ...state,
                isError: true
                
            }
        
        default: return state;
    }
}