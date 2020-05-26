import{
    ADD_COLABORADOR,
    SET_SELECT_COLABORADOR,
    GET_COLABORADORES,
    DELETE_COLABORADOR,
    GET_PROYECTOS_COLABORADOR,
    IS_COLABORACION,
    ERROR_FORMULARIOC
} from '../../types'

export default (state, action) =>{
    switch(action.type){
        case ADD_COLABORADOR:
            return{
                ...state,
                colaboradores: action.payload,
                isError: false
            }
        case DELETE_COLABORADOR:
            return{
                ...state,
                colaboradores: action.payload,
                isError: false
            }
        case GET_COLABORADORES:
            return{
                ...state,
                colaboradores: action.payload
            }
        case GET_PROYECTOS_COLABORADOR:
            return{
                ...state,
                proyectosColaborador: action.payload
            }
        case SET_SELECT_COLABORADOR:
            return{
                ...state,
                isSelectColaboradores: action.payload,
                isError: false
            }
        case IS_COLABORACION:
            return{
                ...state,
                proyectoColaborando: action.payload
            }
        case ERROR_FORMULARIOC:
            return{
                ...state,
                isError: true,
                mensaje: action.payload
                
            }
        default: 
        return state
    }
}
