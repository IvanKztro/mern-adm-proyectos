
import React, { useState, useContext, useEffect } from 'react';

import {Link} from 'react-router-dom';

import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/auth/authContext'

const Registro = (props) => {

    const alertaContext = useContext(AlertaContext);
    const {alert, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { registrarUsuario, autenticado, mensaje } = authContext;
    
    // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        
        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    const [formR, setFormR] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        passwordV: ''
    });

    const {name, lastName, email, password, passwordV} = formR;

    

    const changeRegisto = (e) =>{
        setFormR({
            ...formR,
            [e.target.name]: e.target.value
        })
    }

    const submitRegistro = (e) => {
        e.preventDefault();


        if(name.trim() === "" || lastName.trim() === "" ||
            email.trim() === "" || password.trim() === "" || passwordV.trim() === "")
            {
                mostrarAlerta("Todos los campos son obligatorios", "alert-danger");
                return;
            }

        if(password.length < 6)
        {
            mostrarAlerta("La contraseña debe ser minimo de 6 caracteres","alert-danger");
            return;
        }

        if(password !== passwordV)
        {
            mostrarAlerta("La contraseña no es igual", "alert-danger");
            return;
        }

        //setAlert("Registro Exitoso, ya puedes iniciar sesión","alert-success");
        registrarUsuario({
            name,
            lastName,
            email,
            password
        })

    }
    

    return ( 
        <div className="body-registro d-flex justify-content-center align-items-center ">
            <div className="col-lg-4  form-registro">
                {
                    alert
                    ? <p className={`text-center alert ${alert.categoria}`}>{alert.msg}</p>
                    : null
                }
                <form onSubmit={submitRegistro}>
                    <div className="form-group">
                        <label>Nombre: </label>
                        <input name="name" type="text" placeholder="Fulanito"
                            className="form-control" value={name} onChange={changeRegisto}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos: </label>
                        <input name="lastName" type="text" placeholder="Lopez Fuentes"
                            className="form-control" value= {lastName} onChange={changeRegisto}
                        />
                    </div>
                    <div className="form-group">
                        <label>Correo: </label>
                        <input name="email" type="text" placeholder="ejemplo@gmail.com"
                            className="form-control" value={email} onChange={changeRegisto}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña: </label>
                        <input name="password" type="password" placeholder="*****"
                            className="form-control" value={password} onChange={changeRegisto}
                        />
                    </div>
                    <div className="form-group">
                        <label>Repetir contraseña: </label>
                        <input name="passwordV" type="password" placeholder="*****"
                            className="form-control" value={passwordV} onChange={changeRegisto}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-2">Registrar</button>
                    <Link className="link" to= {'/'}>Iniciar sesión</Link>
                </form>
            </div> 
        </div>

     );
}
 
export default Registro;