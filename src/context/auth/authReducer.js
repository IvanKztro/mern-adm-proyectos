
import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    // LOGIN_EXITOSO,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types';

export default (state, action) =>{
    switch(action.type)
    {
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            // console.log("registro exitos")
            localStorage.setItem("token", action.payload.token);
            return{
                ...state,
                token: action.payload.token,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case LOGIN_ERROR:
        case CERRAR_SESION:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            // console.log("registro error")
            return{
                ...state,
                token: null,
                usuario:null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false
            }
        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
            
        default: return state
    }
}