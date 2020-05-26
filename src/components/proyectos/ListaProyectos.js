import React,{useContext, useEffect} from 'react';  
import Proyecto from './Proyecto'
import ProyectoContext from '../../context/proyectos/proyectoContext'
import ColaboradorContext from '../../context/colaboradores/colaboradorContext'
import AlertaContext from '../../context/alertas/alertaContext';

const ListaProyectos = () => {

    const {listaProyectos, mensaje, setListaProyectos} = useContext(ProyectoContext);
    const { getProyectosColaborador, proyectosColaborador} =useContext(ColaboradorContext);
    const { mostrarAlerta} = useContext(AlertaContext);
    

    useEffect( () =>{
        //console.log("cargando")
        // si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //console.log("cargandooo")
        setListaProyectos();
        
        getProyectosColaborador();
            
        //eslint-disable-next-line
    },[])

    return ( 
        <div className="mt-3">
            
            <div className="listado-proyectos ">
            <h3>Proyectos <p className="h3P">(creador)</p> </h3>
                {
                    listaProyectos.length === 0
                        ?<p>No hay proyectos creados</p>
                        :null
                }
                {
                    listaProyectos.map(proyecto => (
                        <Proyecto
                            key= {proyecto._id}
                            proyecto = {proyecto}
                            isMyproyect = {true}
                        />
                    ))
                }

            </div>
            <div className="listado-proyectos   ">
            <h3>Proyectos <p className="h3P">(colaborando)</p> </h3>
                {
                    proyectosColaborador.length === null
                        ?<p>No hay proyectos creados</p>
                        :null
                }
                {
                    proyectosColaborador.map(proyecto => (
                        <Proyecto
                            key= {proyecto._id}
                            proyecto = {proyecto}
                            isMyproyect = {false}
                        />
                    ))
                }

            </div>
            
        </div>
     );
}
 
export default ListaProyectos;