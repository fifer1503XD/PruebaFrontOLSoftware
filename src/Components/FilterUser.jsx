import "./FilterUser.css"
import {useForm} from "../Actions/FormActions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIdBadge } from '@fortawesome/free-solid-svg-icons'

const FilterUser = () => {
    const [handleInputChange,HandleSubmit,{nombres,apellidos,identificacion,rol,estado,telefono,correo},handleReset ] = useForm({
       nombres:"",
       apellidos:"",
       identificacion:"",
       rol:"",
       estado:"",
       telefono:"",
       correo:""
    });


    return ( 
        <div className="filter">
            <form   className="formFilter" onSubmit={HandleSubmit}>
            <div>
            <FontAwesomeIcon icon={faIdBadge}/> 
                   Filtrar busqueda
            </div>
            <div class="mb-3">
                <label htmlFor="Nombres" class="form-label">Nombres</label>
                <input name="nombres" type="text" class="form-control"  value={ nombres } id="Nombres" placeholder="Juan Felipe"  onChange={ handleInputChange }/>
            </div>
            <div class="mb-3">
                <label htmlFor="Apellidos" class="form-label">Apellidos</label>
                <input name="apellidos" type="text" class="form-control" value={ apellidos } id="Apellidos" placeholder="Bernal Martinez" onChange={ handleInputChange }/>
            </div>
            <div class="mb-3">
                <label htmlFor="Identificacion" class="form-label">Identificacion</label>
                <input name="identificacion" type="text" class="form-control" value={ identificacion }id="identificacion" placeholder="CC" onChange={ handleInputChange }/>
            </div>
            <div class="mb-3">
                <label htmlFor="Rol" class="form-label">Rol</label>
                <input name="rol" type="text" class="form-control" id="Rol" value={ rol } placeholder="Rol en la empresa" onChange={ handleInputChange}/>
            </div>
            <div class="mb-3">
                <label htmlFor="Estado" class="form-label">Estado</label>
                <input name="estado" type="text" class="form-control" id="Estado" value={ estado }placeholder="Activo o Inactivo" onChange={ handleInputChange }/>
            </div>
            <div class="mb-3">
                <label htmlFor="Telefono" class="form-label">Telefono</label>
                <input name="telefono" type="text" class="form-control" id="Telefono"value={telefono}placeholder="+57 31021321322"onChange={ handleInputChange }/>
            </div>
            <div class="mb-3">
                <label htmlFor="Email" class="form-label">Email</label>
                <input name="correo" type="Email" class="form-control" id="Email" value={correo}placeholder="@gmail.com, @outlook.com"onChange={ handleInputChange }/>
            </div>
            <button onClick={handleReset} class="btn btn-primary">Limpiar Filtro</button>
        </form>
        </div>
        
     );
}
 
export default FilterUser;