
import {
    FORMULARIO_PROYECTO,
    ERROR_FORMULARIO,
    LISTA_PROYECTOS,
    CREATE_PROYECTO,
    SELECT_PROYECTOS,
    DELETE_PROYECTO
} from '../../types'
export default (state, action) =>{
    switch(action.type)
    {
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                isNewProyecto: !action.payload
            }
        case ERROR_FORMULARIO:
            return{
                ...state,
                isError: true
                
            }
            case LISTA_PROYECTOS:
                return{
                    ...state,
                    listaProyectos: action.payload
                }
            // case CHANGE_PROYECTO:
            //     return{
            //         ...state,
            //         newProyecto:{
            //             ...stat
            //         }
            //     }
            case CREATE_PROYECTO:
                
                return{
                    ...state,
                    listaProyectos:[
                        ...state.listaProyectos,
                        action.payload
                    ],
                    isNewProyecto: false
                }
            case SELECT_PROYECTOS:

                return{
                    ...state,
                    proyectoSelect: action.payload
                }

            case DELETE_PROYECTO:
                //console.log(action.payload)
                return{
                    ...state,
                    listaProyectos: state.listaProyectos.filter(proyecto => proyecto._id !== action.payload),
                    proyectoSelect:{}
                }
        default: return state;
    }
}