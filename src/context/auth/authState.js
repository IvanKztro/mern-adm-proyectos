import React, {useReducer} from 'react';
import AuthContext from '../../context/auth/authContext';
import AuthReducer from '../../context/auth/authReducer';
//import alertaContext from '../alertas/alertaContext'
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = (props) => {
    const initialState={
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Context de alertas
    //const { setAlert } = useContext(alertaContext)

    //FUNCION PAA ESTRA USUARIO

    const registrarUsuario = async datos =>{
        try {
            const response = await clienteAxios.post("api/usuarios/newUser",datos);
            // console.log("registrarUsuario");
            // console.log(response.data);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: response.data
            });

            autenticarUsuario();
            
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert-danger'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    const autenticarUsuario = async () => {
        const token = localStorage.getItem("token");
        // console.log("token auth: ",token);
        if(token)
        {
            //Funcion para asignar el token en el Header
            tokenAuth(token);
            // console.log("token auth: ",token);
        }

        try {
            const response = await clienteAxios.get("api/auth");
            // console.log(response.data.usuario);
            dispatch({
                type: OBTENER_USUARIO,
                payload: response.data.usuario

            })
            
        } catch (error) {
            // console.log("token auth ERROR");
            // console.log(error);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const loginUsuario = async (user) => {
        try {
            const response = await clienteAxios.post("api/auth/login", user);
            // console.log(response.data);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: response.data
            });

            autenticarUsuario();
            
        } catch (error) {
            //console.log(error.response)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert-danger'
            }
            // console.log(alerta);

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    const cerrarSesion = () =>{
        dispatch({
            type: CERRAR_SESION
        })
    }

    return ( 
        <AuthContext.Provider
            value= {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,

                registrarUsuario,
                autenticarUsuario,
                loginUsuario,
                cerrarSesion
            }}
        >{props.children}

        </AuthContext.Provider>
     );
}
 
export default AuthState;