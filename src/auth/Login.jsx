import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmail } from '../store/auth/thunks'
import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const formData = {
    email: "",
    password: ""  
  }

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({formData})

    const { status, errorMessage } = useSelector(state=> state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = ({email, password}) => {
        dispatch( startLoginWithEmail({email, password}) )
        if(status === "authenticated") {navigate("/home")}
        
    }

    const onGoogleSignIn = ()=>{
        dispatch(checkingAuthentication());
        dispatch(startGoogleSignIn())
    }

    //bandera para deshabilitar botones mientras se está autenticando el usuario
    const isAuthenticating = useMemo(() => status === "checking", [status])
    

    return (
    <div className="container-fluid vh-100 row d-flex align-items-center justify-content-center">
        <div className="container-login col-11 col-sm-9 col-md-8 col-lg-6 col-xl-5 border border-primary border-2 rounded p-4 animate__animated animate__fadeIn">
            <div className="bg-primary mb-4">
                <p className="text-light text-center display-5 p-3">Count it!</p>
            </div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <h2 className="text-center text-primary">Login</h2>
                <div className="mb-3">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label fs-5 fw-bold text-primary">Email</label>
                    <input 
                        type="text" 
                        className="form-control border border-primary" 
                        placeholder="usuario@hotmail.com"
                        id="staticEmail" 
                        name= "email" 
                        {...register("email", 
                            { required: "El email es obligatorio", minLength: { value: 8, message: "El email debe contener al menos 8 caracteres" }}
                        )} 
                    />
                    <p className="text-danger fw-bold">{ errors.email?.message }</p>
                </div>

                <div className="mb-5">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label fs-5 fw-bold text-primary">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control border border-primary" 
                        placeholder="Escribe aquí tu contraseña"
                        id="inputPassword" 
                        name= "password" 
                        {...register("password", {required: "La contraseña es obligatoria", minLength: 6})} 
                    />
                    <p className="text-danger fw-bold">{ errors.password?.message }</p>
                </div>

                { !!errorMessage ? <p className="text-danger fw-bold"><i className="bi bi-exclamation-triangle m-2 fs-5"></i>{ errorMessage }</p> : ""}

                <div className="gap-3 d-flex justify-content-center m-4">
                    <button type="submit" className="btn btn-primary col-4 fs-5" disabled= { isAuthenticating }>Enviar</button>
                    <button type="submit" className="btn btn-primary col-4 fs-5" disabled= { isAuthenticating } onClick={ onGoogleSignIn }><i className="bi bi-google m-2"></i>Google</button>
                </div>
                
                <p className="text-center mt-4 fs-5">¿No estás registrado? <Link to="/register">Hazlo aquí.</Link></p>
            </form>
        </div>
    </div>
  )
}
