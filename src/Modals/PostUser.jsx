import React, {useState, useContext}from 'react';
import { useForm } from '../Actions/FormActions';
import { UserContext } from '../Hooks/UserContext';
import ModalEditUser from './ModalEditUser';
const PostUser = (props) => {
    const {currentUser, setcurrentUser} = useContext(UserContext);
    const [handleInputChange,HandleSubmit,dataSearch,handleReset,handleInputChangePost,{nombres,apellidos,identificacion,rol,estado,telefono,correo,password},PostNewUser,EditUser] = useForm({
        nombres:"",
        apellidos:"",
        identificacion:"",
        rol:"",
        estado:"",
        telefono:"",
        correo:"",
        password:""
     });
    
     const{handleClose, userId}=props
     console.log(userId)
    const [show, setShow] = useState(true);
    return ( 
        <div>
        {show ? <form className="formPostUser" onSubmit={HandleSubmit}>
       
          
            <div class="m-1 ">
                <label for="Nombres" class="form-label">Nombres</label>
                <input name="nombres" type="text" class="form-control"  value={ nombres } id="Nombres"  onChange={ handleInputChangePost }/>
            </div>
            <div class="m-1">
                <label for="Apellidos" class="form-label">Apellidos</label>
                <input name="apellidos" type="text" class="form-control" value={  apellidos }  onChange={ handleInputChangePost }/>
            </div>
            <div class="m-1">
                <label for="Identificacion" class="form-label">Identificacion</label>
                <input name="identificacion" type="text" class="form-control" value={  identificacion }id="identificacion"  onChange={ handleInputChangePost }/>
            </div>
            <div class="m-1">
                <label for="Rol" class="form-label">Rol</label>
                <input name="rol" type="text" class="form-control" id="Rol" value={  rol }  onChange={ handleInputChangePost}/>
            </div>
            <div class="m-1">
                <label for="Estado" class="form-label">Estado</label>
                <input name="estado" type="text" class="form-control" id="Estado" value={ estado } onChange={ handleInputChangePost }/>
            </div>
            <div class="m-1">
                <label for="Telefono" class="form-label">Telefono</label>
                <input name="telefono" type="text" class="form-control" id="Telefono"value={ telefono}onChange={ handleInputChangePost }/>
            </div>
            <div class="m-1 mb-3">
                <label for="Email" class="form-label">Email</label>
                <input name="correo" type="Email" class="form-control" id="Email" value={ correo}onChange={ handleInputChangePost }/>
            </div>
            <div class="m-1 mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input name="password" type="password" class="form-control" id="password" value={ password}onChange={ handleInputChangePost }/>
            </div>
            <div className="btnNewUser">
            <button onClick ={currentUser ? ()=> EditUser(userId)  :()=>PostNewUser()} class="btn btn-success btnAceptar">Aceptar</button>
            <button onClick ={()=>handleClose()} class="btn btn-success btnAceptar"> Cerrar </button>
            </div>
            
        </form> 
        : 'Su lista ha sido agregada con exito!'}
</div>
        
     );
}
 
export default PostUser;