import React, {useContext} from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext'

const Tarea = ({tarea}) => {

    const {proyectoSelect} = useContext(proyectoContext);
    const {deleteTarea,obtenerTareas, setTareaEdit} = useContext(tareaContext);

    const deleteT = () =>{
        
        deleteTarea(tarea._id, proyectoSelect._id);
        obtenerTareas(proyectoSelect._id)
        
    }

    const editT = (tareaE) =>{
        setTareaEdit(tareaE);
    }


    return ( 
        <div className="tarea d-flex justify-content-between align-items-center py-2 mb-1">
            <div className="col-lg-8 col-md-7">{tarea.title}</div>
            <div className="col-lg-2 col-md-2">
                {/*<button className="btn-blank">{tarea.done}</button>*/}
                %{tarea.done}
            </div>
            <div className="col-lg-2 d-flex flex-row-reverse">
                <button onClick = { () => { editT(tarea)}} className="btn btn-success btn-sm"><i className="fas fa-edit"></i></button>
                <button onClick={deleteT} className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
     );
}
 
export default Tarea;