import React, { useContext} from 'react';
import '../../index.css';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import ColaboradorContext from '../../context/colaboradores/colaboradorContext'


const Proyecto = ({proyecto, isMyproyect}) => {

    const {selectProyectos} = useContext(proyectoContext);
    const {obtenerTareas} =  useContext(tareaContext);
    const {setProyectoColaborando, setIsSelectColaboradores} = useContext(ColaboradorContext);

    const clickProyecto = idProyecto =>{
       // console.log(proyecto);
        selectProyectos(proyecto);
        obtenerTareas(idProyecto);
        //console.log(isMyproyect);
        setProyectoColaborando(!isMyproyect);
        setIsSelectColaboradores(false);
    }

    
    return ( 
        <div className="Proyecto" >
            <li>
                <button onClick = {() => clickProyecto(proyecto._id)} className="btn-blank">{proyecto.name}</button>
            </li>
        </div>
     );
}
 
export default Proyecto;