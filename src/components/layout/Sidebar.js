import React, { useContext} from 'react';

import FormProyectos from '../proyectos/FormProyectos'
import ListaProyectos from '../proyectos/ListaProyectos'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Sidebar = () => {

    //const [isNuevoPro, setIsuevoPro] = useState(false);
    const {isNewProyecto, showFormulario} = useContext(proyectoContext);

    
   /*
    <aside className="col-lg-2 col-md-3 col-3 d-none d-sm-block" >
            <div className="proyectos" id="sideBar">
   */


    return ( 
        <div className=" col-lg-2 col-md-3 col-8" id="sideBar">
            <div className="proyectos"   >
                
                <button onClick={showFormulario} type ="button" className="btn btn-block mt-3">Nuevo proyecto</button>
                {
                    isNewProyecto 
                    ?<FormProyectos/> : null

                }
                <ListaProyectos/>
            </div>
              
          </div>
     );
}
 
export default Sidebar;