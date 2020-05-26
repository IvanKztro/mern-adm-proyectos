import React, {useReducer} from 'react';

import ColaboradorContext from './colaboradorContext';
import ColaboradorReducer from './colaboradorReducer';

import clienteAxios from '../../config/axios';

import{
    ADD_COLABORADOR,
    SET_SELECT_COLABORADOR,
    GET_COLABORADORES,
    DELETE_COLABORADOR,
    GET_PROYECTOS_COLABORADOR,
    IS_COLABORACION,
    ERROR_FORMULARIOC
} from '../../types'

const ColaboradorState = (props) => {

    const initialState= {
        colaboradores: null,
        proyectosColaborador: [],
        proyectoColaborando: false,
        colaborador:{},
        mensaje: null,
        isSelectColaboradores: false,
        isError: false
    }

    const [state, dispatch] = useReducer(ColaboradorReducer, initialState);

    //FUNCIONES

    const addColaborador = async(datos)=>{
        try {
            const response = await clienteAxios.put('api/proyectos/addColaborador',datos);
            //console.log(response.data);
            dispatch({
                type: ADD_COLABORADOR,
                payload: response.data.colaboradores
            });
        } catch (error) {
            //console.log(error.response);
            dispatch({
                type: ERROR_FORMULARIOC,
                payload: error.response.data.msg
                
            })
            //alert(error.response.data.msg)
        }
    }

    const deleteColaborador = async(idColaborador, proyecto)=>{
        //tareasFiltradas: state.tareasFiltradas.filter( tarea => action.payload !== tarea._id )
        
        const newColaboradores = state.colaboradores.filter(col => idColaborador !== col._id);
        try {
             await clienteAxios.put(`api/proyectos/deleteColaborador/${proyecto._id}`, newColaboradores);
            //console.log(response.data);
            dispatch({
                type: DELETE_COLABORADOR,
                payload: newColaboradores
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const getProyectosColaborador = async()=>{
        try {
            const response = await clienteAxios.get(`api/proyectos/colaboraciones`);
            //console.log(response.data.proyectos);
            dispatch({
                type: GET_PROYECTOS_COLABORADOR,
                payload: response.data.proyectos
            })

        } catch (error) {
            console.log(error.response);
        }
    }
    const setIsSelectColaboradores = (estado) =>{
        dispatch({
            type: SET_SELECT_COLABORADOR,
            payload: estado
        });
    }

    const getColaboradores = async(data) =>{
        //console.log(data.proyecto);
        try {
            const response = await clienteAxios.get(`api/proyectos/getColaboradores/${data.proyecto}`);
            //console.log(response.data.colaboradores);
            dispatch({
                type: GET_COLABORADORES,
                payload: response.data.colaboradores
            });
        } catch (error) {
            console.log(error.response);
        }
        
    }
    const setProyectoColaborando = (boolean)=>{
        //console.log("boolean: ", boolean);
        dispatch({
            type: IS_COLABORACION,
            payload: boolean
        });
    }

    const showError= () =>{
        dispatch({
            type: ERROR_FORMULARIOC,
            payload: "El correo del colaborador es necesario"
            
        })
    }

    
    
    return ( 
        <ColaboradorContext.Provider
            value={{
                colaboradores: state.colaboradores,
                proyectosColaborador: state.proyectosColaborador,
                colaborador: state.colaborador,
                mensaje: state.mensaje,
                isSelectColaboradores: state.isSelectColaboradores,
                proyectoColaborando: state.proyectoColaborando,
                isError: state.isError,

                addColaborador,
                deleteColaborador,
                getProyectosColaborador,
                setIsSelectColaboradores,
                getColaboradores,
                setProyectoColaborando,
                showError
            }}
        >
        {props.children}
        </ColaboradorContext.Provider>
     );
}
 
export default ColaboradorState;