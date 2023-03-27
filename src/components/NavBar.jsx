import { useDispatch, useSelector } from "react-redux";
import { FiLogOut, FiUser } from "react-icons/fi";
import { SlWallet } from "react-icons/sl";
import { startLogoutFirebase } from "../store/auth/thunks";
import { NavLink } from "react-router-dom";
import { VscHome, VscSearch } from "react-icons/vsc";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector(state=>state.auth);
  const { total } = useSelector(state => state.total)

  const onLogout = ()=>{
    dispatch( startLogoutFirebase() )
  }

  return (
    <>
      <nav className="navbar bg-primary row">
        
        <p className="text-light display-6 col-12 col-sm-5 text-center">Count it!</p>

        <div className="d-flex justify-content-around align-items-baseline col-12 col-sm-7">
          <div className="text-light fs-4 d-flex align-items-center ">
            <FiUser className="m-1 "/>
            <p className="m-1 d-flex align-items-center">{ displayName }</p>
          </div>
          <div className="text-light fs-4 d-flex align-items-center ">
            <SlWallet className="m-1 "/> 
            <p className=" m-1 d-flex align-items-center">{ total } €</p>
          </div>
          <p className="text-light fs-2 btn-hover d-flex align-items-center" type="button" onClick={ onLogout }><FiLogOut /></p>  
        </div>
     
      </nav> 

      <div className="row ">
        <ul className="nav nav-tabs justify-content-center align-items-baseline">
            <li className="nav-item active fs-5 col-1 col-sm-2 col-lg-1" >
                <NavLink to="/home" className={({isActive}) => `d-none d-sm-block nav-link ${isActive ? "active" : "" }`} aria-current="page">Inicio</NavLink>
                <NavLink to="/home" className={({isActive}) => `d-sm-none fs-3 nav-link ${isActive ? "active" : "" }`} aria-current="page"><VscHome /></NavLink>
            </li>
            <li className="nav-item fs-5 col-3 m-1 col-sm-2 col-lg-1 m-sm-0" >
                <NavLink to="/resumen" className={({isActive}) => `nav-link ${isActive ? "active" : "" }`} aria-current="page">Resumen</NavLink>
            </li>
            <li className="nav-item fs-5 col-3 col-sm-2 col-lg-1" >
                <NavLink to="/expenses" className={({isActive}) => `nav-link ${isActive ? "active" : "" }`} aria-current="page">Gastos</NavLink>
            </li>
            <li className="nav-item fs-5 col-3 m-1 col-sm-2 col-lg-1 m-sm-0" >
                <NavLink to="/incomes" className={({isActive}) => `nav-link ${isActive ? "active" : "" }`} aria-current="page">Ingresos</NavLink>
            </li>
            <li className="nav-item fs-5 col-1 col-sm-2 col-lg-1" >
                <NavLink to="/search" className={({isActive}) =>`d-none d-sm-block nav-link ${isActive ? "active" : "" }`} aria-current="page">Buscar</NavLink>
                <NavLink to="/home" className={({isActive}) => `d-sm-none fs-3 nav-link ${isActive ? "active" : "" }`} aria-current="page"><VscSearch /></NavLink>
            </li>
        </ul>
      </div>
    </>
   
  )
}
