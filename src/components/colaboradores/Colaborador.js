import React, {useContext} from 'react';
import '../../index.css';
import proyectoContext from '../../context/proyectos/proyectoContext'
// import tareaContext from '../../context/tareas/tareaContext'
import colaboradorContext from '../../context/colaboradores/colaboradorContext'


const Colaborador = ({colaborador}) => {

    const {proyectoSelect} = useContext(proyectoContext);
    const {deleteColaborador, proyectoColaborando} =  useContext(colaboradorContext);

    // const clickProyecto = id =>{
    //     selectProyectos(proyecto);
    //     obtenerTareas(id);
    // }

    const deleteColarador= ()=>{
        //alert(colaborador._id);
        deleteColaborador(colaborador._id, proyectoSelect);
    }
    
    return ( 
        // <div className="Proyecto" >
        //     <li>{colaborador.name}</li>
        // </div>
        <div className="tarea d-flex justify-content-between align-items-center py-2 mb-1">
            <div className="col-lg-5 col-md-4">{colaborador.name} {colaborador.lastName}</div>
            <div className="col-lg-5 col-md-6">{colaborador.email} </div>
            <div className="col-lg-2 col-md-1 d-flex flex-row-reverse">
                {
                    proyectoColaborando
                    ?null
                    :<button onClick={deleteColarador} className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>
                }
                
            </div>
        </div>
     );
}
 
export default Colaborador;