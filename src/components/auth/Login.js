import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext'
import {Link} from 'react-router-dom'

const Login = (props) => {

    const {loginUsuario, autenticado, mensaje, autenticarUsuario} = useContext(AuthContext);
    const {mostrarAlerta} = useContext(AlertaContext);

    const token = localStorage.getItem('token');

    if(token)
    autenticarUsuario();


    const [usuario, setUsuario] = useState({
        email: 'correo@gmail.com',
        password: '123456'
    });

    let {email, password} = usuario;

    useEffect(() =>{

        if(autenticado)
            props.history.push('/proyectos');

        if(mensaje)
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        // eslint-disable-next-line
    },[autenticado, mensaje, props.history])

    const changeData = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const iniciarSesion = e =>{
        e.preventDefault();

        if(email.trim() === "" || password.trim() === "")
        {
            mostrarAlerta("Los campos son obligatorios", "alert-danger");
            return;
        }
        loginUsuario(usuario);

    }

    return ( 
        <div className="body-login d-flex justify-content-center align-items-center ">
            <div className="col-lg-4 col-md-5 col-8 form-login">
                <form onSubmit={iniciarSesion}>
                    {
                        mensaje
                        ? <p className={`text-center alert ${mensaje.categoria}`}>{mensaje.msg}</p>
                        : null
                    }
                    <div className="form-group">
                        <label>Correo: </label>
                        <input name="email" type="text" placeholder="ejemplo@gmail.com"
                            className="form-control" value={email} onChange={changeData}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña: </label>
                        <input name="password" type="password" placeholder="*****"
                            className="form-control" value={password} onChange={changeData}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-2">Ingresar</button>
                    <Link className="link" to={'/registro'}>Registrarse</Link>
                </form>
            </div> 
        </div>
     );
}
 
export default Login;