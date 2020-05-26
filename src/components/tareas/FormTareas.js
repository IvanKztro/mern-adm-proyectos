import React, {useContext, useState, useEffect} from 'react';
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext'
import Error from '../Error';

const FormTareas = () => {

    const {proyectoSelect} = useContext(proyectoContext);

    const {createTarea, obtenerTareas, tareaEdit, setTareaEdit, updateTarea, isError, showError} =  useContext(tareaContext);
    
   
   
   
    useEffect( () => {
        if(tareaEdit !== null)
        {
            setFormTarea(tareaEdit)
        }
        else
        {
            setFormTarea({
                title: '',
                done: 0
            })
           
        }
    },[tareaEdit])
    

    const [formTarea, setFormTarea] = useState({
        title: '',
        done: 0,
        byProyecto: ''

    });



    let {title, done} = formTarea;

    

    const onChangeTitle = (e) =>{
        setFormTarea({
            ...formTarea,
            [e.target.name]: e.target.value
        })
    }

    const submitTarea = (e) =>{
        e.preventDefault();

        if(title.trim('') === "")
        {
            showError();
            return;
        }

        if(tareaEdit === null)
        {
            //SI tareaEdit es null se creará una nueva tarea
           // console.log(proyectoSelect);
            createTarea(formTarea, proyectoSelect._id);
        }
        else
        {
            if(done.trim('') === "")
            {
                alert("Campos obligatorios");
                return;
            }
            //SI tareaEdit no es null se editara una tarea
            setFormTarea({  title: title, done: done});
            formTarea.byProyecto = proyectoSelect._id;
            updateTarea(formTarea);
        }


        
        obtenerTareas(proyectoSelect._id);

        setFormTarea({  title: '', done: 0, byProyecto: null});
        setTareaEdit(null);
        

    }

     const cancelarEdit = () =>{
         setTareaEdit(null)
     }


    return ( 
        <div className="form-tarea d-flex justify-content-center ">
             <form onSubmit= {submitTarea} className="col-lg-6 mb-3">
             <h4 className="text-center">Agregar nuevo tarea</h4>
             {
                isError
                ? <Error message="El nombre de la tarea es necesario"/>
                :null
            }
            {
                tareaEdit === null
                ?
                <div>
                    <div className="form-group">
                        <label>Tarea:</label>
                        <input name="title" onChange= {onChangeTitle} className="form-control" value={title}></input>
                        <div className="d-none">
                        <label>Avance:</label>
                        <input name="done" onChange= {onChangeTitle} className="form-control" value={done}></input>
                        </div>
                    </div>
                    <input type = "submit" className="btn btn-success btn-block" value="Agregar" />
                </div>
                : 
                <div>
                    <div className="form-group">
                        <label>Tarea:</label>
                        <input name="title" onChange= {onChangeTitle} className="form-control" value={title}></input>
                        <label>Avance:</label>
                        <input type= "number" name="done" 
                        onChange= {onChangeTitle} className="form-control" 
                        value={done} max="100" min="0"></input>
                        
                    </div>
                    <div className="form-group d-flex">
                        <input type = "submit" className="btn btn-success form-control mx-3" value="Editar" />
                        <input onClick={cancelarEdit} type = "button" className="btn btn-danger form-control mx-3" value="Cancelar" />
                    </div>
                </div>
            }
            </form>
            

            
        </div>
     );
}
 
export default FormTareas;