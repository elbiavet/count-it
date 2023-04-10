import { useMemo } from "react";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startRegisterWithEmail } from "../store/auth/thunks";

const formData = {
    displayName:"",
    email:"",
    password:""
}

export const Register = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state=> state.auth);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }} = useForm(formData);
    
    const onSubmit = (data) => {
        dispatch(startRegisterWithEmail(data))
        navigate("/home")
    
    }

    //bandera para deshabilitar botones mientras se está autenticando el usuario
    const isAuthenticating = useMemo(() => status === "checking", [status])

    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center fondo-auth">
            <div className="container-login col-11 col-sm-9 col-md-8 col-lg-6 col-xl-5 border border-primary border-2 rounded p-4 animate__animated animate__fadeIn bg-light">
                <div className="bg-primary mb-4">
                    <p className="text-light text-center display-5 p-3">Count it!</p>
                </div>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <h2 className="text-center text-primary">Registro</h2>

                    <div className="mb-3">
                        <label htmlFor="displayName" className="col-sm-2 col-form-label fs-6 fw-bold text-primary">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control border border-primary"
                            placeholder="Escribe tu nombre" 
                            id="displayName" 
                            name= "displayName" 
                            {...register("displayName", 
                                { required: "El nombre es obligatorio" })}
                        />
                        <p className="text-danger fw-bold">{ errors.displayName?.message }</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label fs-6 fw-bold text-primary">Email</label>
                        <input 
                            type="email" 
                            className="form-control border border-primary" 
                            placeholder="usuario@hotmail.com"
                            id="staticEmail" 
                            name= "email" 
                            {...register("email", 
                                { required: "El email es obligatorio", pattern: { value: regex, message: 'El e-mail no es valido'}}
                            )} 
                        />
                        <p className="text-danger fw-bold">{ errors.email?.message }</p>
                    </div>
    
                    <div className="mb-5">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label fs-6 fw-bold text-primary">Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control border border-primary" 
                            placeholder="Escribe tu contraseña"
                            id="inputPassword" 
                            name= "password" 
                            {...register("password", {required: "La contraseña es obligatoria", minLength: 6})} 
                        />
                        <p className="text-danger fw-bold">{ errors.password?.message }</p>
                    </div>

                    { !!errorMessage ? <p className="text-danger fw-bold"><i class="bi bi-exclamation-triangle m-2 fs-6"></i>{ errorMessage }</p> : ""}
                    
                    <div className="d-flex justify-content-evenly mt-4">
                        <button type="submit" className="btn btn-primary col-4 fs-6" disabled= { isAuthenticating }>Crear Cuenta</button>
                    </div>
                    
                    <p className="text-center mt-4 fs-6">¿Ya estás registrado? <Link to="/login">Ingresar</Link></p>
                </form>
                <footer><p className="text-center">&copy; Elbia Losana - Proyecto de Gestor Gastos</p></footer>
            </div>
        </div>
      )
    }
    