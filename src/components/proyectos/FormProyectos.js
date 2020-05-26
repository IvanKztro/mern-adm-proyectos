import React, {useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import Error from '../Error';
import AuthContext from '../../context/auth/authContext'
//import { v4 as uuidv4 } from 'uuid';

const FormProyectos = () => {

    const {isError, showError, createProyecto} = useContext(proyectoContext);
    const {usuario} = useContext(AuthContext);

    const [proyecto, updateProyecto] = useState({
        name: ''
    });

    const {name} = proyecto;

    const onChangeNewProyecto = (e)=>
    {
        updateProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitNewProyecto = (e)=>
    {
        e.preventDefault();
        if(name.trim() === "")
        {
            showError();
            return;
        }

        proyecto.id = usuario._id;
        createProyecto(proyecto);

    }


    return ( 
        <div className="form d-flex justify-content-center  mt-3">
            <form onSubmit={onSubmitNewProyecto}>
                {
                    isError
                    ? <Error message="Se necesita el nombre del proyecto"/>
                    :null
                }
                <div className="form-group">
                    <label>Proyecto:</label>
                    <input name="name" className="form-control"
                        onChange={onChangeNewProyecto}
                    />
                </div>
                <input  type = "submit" className="btn btn-success btn-block" value="Agregar"/>
            </form>
        </div>
     );
}
 
export default FormProyectos;