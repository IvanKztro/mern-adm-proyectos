import React, { useContext, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'

const RutasPrivadas = ({component: Component, ...props}) => {
    const {autenticado, cargando, autenticarUsuario} = useContext(AuthContext);

    useEffect(() =>{
        autenticarUsuario();
        // eslint-disable-next-line
    },[])
    return ( 
        <Route
            {...props}
            render ={props => !autenticado && !cargando
                ? (<Redirect to="/" />) 
                : (<Component {...props}/>)}
        />
     );
}
 
export default RutasPrivadas;