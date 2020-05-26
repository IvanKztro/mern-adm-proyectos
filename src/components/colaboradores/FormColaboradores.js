import React, {useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import Error from '../Error';
// import AuthContext from '../../context/auth/authContext'
//import { v4 as uuidv4 } from 'uuid';
import contextColaboradores from '../../context/colaboradores/colaboradorContext'
const FormColaboradores = () => {

    // const {isError, showError, createProyecto} = useContext(proyectoContext);
    // const {usuario} = useContext(AuthContext);
    const {proyectoSelect} = useContext(proyectoContext);
    const {addColaborador, isError, showError, mensaje,proyectoColaborando} = useContext(contextColaboradores);

    const [colaborador, updateColaborador] = useState({
        email: ''
    });

    const {email} = colaborador;

    const onChangeColaborador = (e)=>
    {
        updateColaborador({
            ...colaborador,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitColaborador = async(e)=>
    {
        e.preventDefault();
        if(email.trim() === "")
        {
            //setMensaje("El correo del colaborador es necesario");
            showError();
            return;
        }

        // proyecto.id = usuario._id;
        // createProyecto(proyecto);
        colaborador.email="";
        addColaborador({email, proyecto:proyectoSelect._id });
        

    }


    return ( 
        <div className="form-tarea d-flex justify-content-center ">
            {
                !proyectoColaborando
                ?<form onSubmit={onSubmitColaborador} className=  "col-lg-6 mb-3">
                <h4 className="text-center">Agregar nuevo colaborador</h4>
                {
                    isError
                    ? <Error message={mensaje}/>
                    :null
                }
                <div className="form-group">
                    <label>Email:</label>
                    <input name="email" className="form-control"
                        onChange={onChangeColaborador} value={email}
                    />
                </div>
                <input  type = "submit" className="btn btn-success btn-block" value="Agregar"/>
            </form>
                :
                null
            }
            
        </div>
     );
}
 
export default FormColaboradores;