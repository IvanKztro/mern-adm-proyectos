import React, {useContext} from 'react';  
import ListaColaboradores from '../colaboradores/ListaColaboradores' 
import FormColaboradores from '../colaboradores/FormColaboradores';

import proyectoContext from '../../context/proyectos/proyectoContext';
import colaboradorContext from '../../context/colaboradores/colaboradorContext'



const Colaboradores = () => {
    const {proyectoSelect} = useContext(proyectoContext);
    const {setIsSelectColaboradores} = useContext(colaboradorContext);
    
    
 
    return ( 
        <div className="">
            <button onClick={() => { setIsSelectColaboradores(false)} } type ="button" className="btn ml-4 mt-1 back"><i className="fas fa-arrow-left"></i></button>
            <div className="pb-3">
                <FormColaboradores/>
            </div>

            <div className="">
                <h4 className="text-center">Colaboradores de: {proyectoSelect.name}</h4>
                <div className="d-flex justify-content-center ">
                    <ListaColaboradores/>                    
                </div>
            </div>
        </div>
     );
}
 
export default Colaboradores;