import React, {useReducer} from 'react'

import ProyectoContext from './proyectoContext';
import ProyectoReducer from './proyectoReducer';


//importando types
import {
    FORMULARIO_PROYECTO, 
    ERROR_FORMULARIO,
    LISTA_PROYECTOS,
    // CHANGE_PROYECTO,
    CREATE_PROYECTO,
    SELECT_PROYECTOS,
    DELETE_PROYECTO,
} from '../../types'
import clienteAxios from '../../config/axios';

const ProyectoState = (props) => {

    //STATE
    // let proyectosIniciales = JSON.parse(localStorage.getItem('proyectos'));

    // if(!proyectosIniciales)
    // proyectosIniciales = []


    const initialState = {
        isNewProyecto: false,
        isError: false,
        listaProyectos: [],
        proyectoSelect: {},
        mensaje: null
    }
    const [state, dispatch] = useReducer(ProyectoReducer, initialState);


        //  funciones de dispatch
    const showFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
            payload: state.isNewProyecto
        })
    }

    const showError= () =>{
        dispatch({
            type: ERROR_FORMULARIO,
            
        })
    }

    const setListaProyectos = async () => {

        try {
            const proyectos = await clienteAxios.get('api/proyectos/getProyectos');
           // console.log(proyectos.data.proyectos);
            dispatch({
                type: LISTA_PROYECTOS,
                payload: proyectos.data.proyectos
            })
        } catch (error) {
            console.log(error.response.data.msg)
        }
    }
    const createProyecto = async (proyecto) =>{
        
        try {
            const newProyecto = await clienteAxios.post("api/proyectos/crearProyecto", proyecto);
            //console.log(newProyecto.data.proyecto);
            dispatch({
                type: CREATE_PROYECTO,
                payload: newProyecto.data.proyecto
            })
            
        } catch (error) {
            console.log(error.response);
        }
    }

    const selectProyectos = (proyecto)=>{
        dispatch({
            type: SELECT_PROYECTOS,
            payload: proyecto
        })
    }

    const deleteProyecto = async (id) =>{
        //console.log(id);
        await clienteAxios.delete(`api/proyectos/${id}`);
        dispatch({
            type: DELETE_PROYECTO,
            payload: id
        })
    }
    
    
    
    return ( 
        <ProyectoContext.Provider
            value={{
            isNewProyecto: state.isNewProyecto,
            isError: state.isError,
            listaProyectos: state.listaProyectos,
            proyectoSelect: state.proyectoSelect,
            mensaje: state.mensaje,

            showFormulario,
            showError,
            setListaProyectos,
            selectProyectos,
            createProyecto,
            deleteProyecto
            
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
     )
}
 
export default ProyectoState;