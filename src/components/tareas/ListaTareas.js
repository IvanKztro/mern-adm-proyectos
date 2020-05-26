import React, {useContext} from 'react';
import Tarea from './Tarea'
import tareaContext from '../../context/tareas/tareaContext'
//import ColaboradorContext from '../../context/colaboradores/colaboradorContext'

const ListaTareas = () => {

    const {tareasFiltradas} = useContext(tareaContext);
   // const {proyectoColaborando} = useContext(ColaboradorContext);

    // useEffect(() =>{
    //     obtenerTareas();
    // },[tareasFiltradas])

    
    return ( 
        <div  className="List-Tareas col-lg-6 pt-2 ">
            {tareasFiltradas.length === 0 
                    ?<p>No hay tareas creados</p>
                    :null 
            }
            {
                
                tareasFiltradas.map(tarea => 
                   
                    <Tarea
                        key = {tarea._id}
                        tarea = {tarea}
                    />
                )
            }        
             
        </div>
     );
}
 
export default ListaTareas;