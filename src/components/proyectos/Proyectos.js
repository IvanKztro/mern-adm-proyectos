import React, {useContext} from 'react';  
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar' 
import FormTareas from '../tareas/FormTareas' 
import ListaTareas from '../tareas/ListaTareas' 
import Colaboradores from '../colaboradores/Colaboradores';

import proyectoContext from '../../context/proyectos/proyectoContext';
import colaboradorContext from '../../context/colaboradores/colaboradorContext'



const Proyectos = () => {
    const {proyectoSelect, deleteProyecto} = useContext(proyectoContext);
    const {isSelectColaboradores, setIsSelectColaboradores, proyectoColaborando} = useContext(colaboradorContext);
    
    
 
    return ( 
        <div className="d-flex">
            
            <Sidebar />

            <div className="principal ">
               
                <Navbar/>

                    <div className=" ">
                    {
                        Object.keys(proyectoSelect).length !== 0 && isSelectColaboradores === false
                        ?<FormTareas></FormTareas>
                        :null
                    }
                    {
                        isSelectColaboradores === true
                        ? 
                        <Colaboradores/>
                        : null
                        
                    }
                    </div>
                    {
                        Object.keys(proyectoSelect).length !== 0 && isSelectColaboradores === false
                        ?
                        <div className="mt-1">
                            <h4 className="text-center">Tareas de: {proyectoSelect.name}</h4>
                            <div className="d-flex justify-content-center">
                                <ListaTareas/>                    
                            </div>
                            <button onClick={() => { setIsSelectColaboradores(true)} } type ="button" className="btn ml-4 mt-3">COLABORADORES</button>
                            {
                                !proyectoColaborando
                                ? 
                                <button onClick={() => { deleteProyecto(proyectoSelect._id)} } 
                                type ="button" className="btn ml-4 mt-3">ELIMINAR PROYECTO &times;</button>
                                :
                                null
                            }
                            
                        </div>
                        :null
                    }

                    
                    
            </div>
               
        </div>
     );
}
 
export default Proyectos;