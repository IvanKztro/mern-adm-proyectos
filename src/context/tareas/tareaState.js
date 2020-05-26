import React, {useReducer} from 'react'
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
//import { v4 as uuidv4 } from 'uuid';
import {
    CREATE_TAREA,
    OBTENER_TAREAS,
    DELETE_TAREA,
    SET_TAREA,
    UPDATE_TAREA,
    ERROR_FORMULARIOT
    } from '../../types/index'

import clienteAxios from '../../config/axios';


const TareaState = (props) => {
   
    const initialState = {
        tareasFiltradas: [], 
        tarea: {},
        tareaEdit: null,
        isError: false,
    }

   

   
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //console.log(Object.keys(state.tareaEdit).length);
    // console.log("listaTareas");
    // console.log(state.listaTareas);
    //FUNCIONES

    const createTarea = async(newTarea, proyectoID) =>{
        try {
            //newTarea.id = uuidv4();
        newTarea.byProyecto = proyectoID;
        const tarea = await clienteAxios.post('api/tareas/crearTarea',newTarea);
        dispatch({
            type: CREATE_TAREA,
            payload: tarea
        })
        } catch (error) {
            console.log(error.response)
        }
    }

    const obtenerTareas = async(byProyecto) => {
        try {
            //console.log(byProyecto);
            const response = await clienteAxios.get('/api/tareas', { params: { byProyecto }});
           //console.log(response.data);
            dispatch({
                type: OBTENER_TAREAS,
                payload: response.data

            })
        } catch (error) {
            console.log(error.response)
        }
    }

    const deleteTarea = async(idTarea, byProyecto)=>{
        try {
             await clienteAxios.delete(`api/tareas/${idTarea}`, {params:{byProyecto}});
            //console.log(response);
            dispatch({
                type: DELETE_TAREA,
                payload: idTarea
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const setTareaEdit  = (tarea) =>{
        dispatch({
            type: SET_TAREA,
            payload: tarea
        })
    }

    const updateTarea = async (tarea) =>{
        try {
            const UDTarea = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            
             dispatch({
                 type: UPDATE_TAREA,
                 payload: UDTarea.data.tarea
             })
        } catch (error) {
                console.log(error.response);
        }
    }

    const showError= () =>{
        dispatch({
            type: ERROR_FORMULARIOT,
            
        })
    }


    return ( 
        <TareaContext.Provider
            value= {{
                tareasFiltradas: state.tareasFiltradas,
                tareaEdit: state.tareaEdit,
                isError: state.isError,

                createTarea,
                obtenerTareas,
                deleteTarea,
                setTareaEdit,
                updateTarea,
                showError
            }}
        >
            {props.children}
        </TareaContext.Provider>
     );
}
 
export default TareaState;