import React,{useContext, useEffect} from 'react';  
import Colaborador from './Colaborador'
import proyectoContext from '../../context/proyectos/proyectoContext'
//import AlertaContext from '../../context/alertas/alertaContext';
import ColaboradorContext from '../../context/colaboradores/colaboradorContext'

const ListaColaboradores = () => {

    
    //const { mostrarAlerta} = useContext(AlertaContext);
    const {proyectoSelect} = useContext(proyectoContext);
    const {colaboradores, getColaboradores}  = useContext(ColaboradorContext);
    

    useEffect( () =>{
        //console.log("cargando")
        // si hay un error
        // if(mensaje) {
        //     mostrarAlerta("No hay clabadres", "alert-default");
        // }
       
        getColaboradores({proyecto:proyectoSelect._id});
        //eslint-disable-next-line
    },[])


    return ( 
        <div className="mt-3  col-lg-7">
            <div className="">
                {
                    colaboradores === null
                        ?<p>No hay Colaboradores</p>
                        :
                        colaboradores.map(colaborador => (
                            <Colaborador
                                key= {colaborador._id}
                                colaborador = {colaborador}
                            />
                        ))
                }
                

            </div>
        </div>
     );
}
 
export default ListaColaboradores;