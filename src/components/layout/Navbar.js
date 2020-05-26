import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext'
import ProyectoContext from '../../context/proyectos/proyectoContext'
import ColaboradorContext from '../../context/colaboradores/colaboradorContext'

const Navbar = () => {
    const {usuario, autenticarUsuario, cerrarSesion} = useContext(AuthContext);
    const {selectProyectos} = useContext(ProyectoContext);
    const {setIsSelectColaboradores,setProyectoColaborando} = useContext(ColaboradorContext);

    useEffect(() => {
        autenticarUsuario();
        
        // eslint-disable-next-line
    },[])


    const btnCerrar = () =>{
        selectProyectos({});
        setIsSelectColaboradores(false);
        setProyectoColaborando(false);
        cerrarSesion();
    }

    
    return ( 
        <nav className="navbar navbar-expand-md navbar-light bg-light  ">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#sideBar" aria-controls="sideBar" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="fas fa-tasks fasNav"></span>
            </button>

            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        
                        {usuario ?<a className="navbar-brand" href="#!">Bienvenido {usuario.name}</a> : null}
                    </li>
                </ul>
                <span className="navbar-text">
                <a className="navbar" href="#!" onClick={btnCerrar}>CERRAR SESIÓN</a>
                </span>
            </div>
        </nav>
     );
}
 
export default Navbar;
