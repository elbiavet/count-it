
import { useState } from "react";
import { useDispatch } from "react-redux"
import { setActiveMovement } from "../store/countApp/countAppSlice";
import { startDeleteIncome } from "../store/countApp/thunks";
import { onOpenModalIncome } from "../store/modal/modalSlice";
import { startTotalIncome } from '../store/total/thunks.js';


export const Income = ({ title, amount, date, category, id }) => {

    const dispatch = useDispatch();
    const [active, setActive] = useState(false)

    const onSelect = ()=>{
        dispatch(setActiveMovement({title, amount, date, category, id}))
        setActive(!active)
        
    }
    
    const onDoubleClick = () =>{
        dispatch(onOpenModalIncome())
      }
    
    const onDelete = ()=>{
    dispatch(startDeleteIncome())
    dispatch(startTotalIncome())
  }

 
  return (

    <div className={`row border d-flex justify-content-center p-2 ${active ? "fondo-selected" : ""}`} data-bs-toggle="modal" data-bs-target="#modalIncome" onDoubleClick={ onDoubleClick} onClick={ onSelect }>
               
        <div className="col-7 ">
            <p className={`fs-5 ${active ? "text-danger":"text-primary" }`}>{title}</p>
            <p className="text-secondary">Tipo de ingreso <strong>{category}</strong> </p>
        </div>
    
        <div className="col-5 row">
            <div className="col-9">
                <p className={`fs-5 ${active ? "text-danger":"text-primary" }`}>{amount} €</p>
                <p className="text-secondary">{date.split('-').reverse().join('/')}</p> 
            </div>
            <div className="col-3">
                { active ? <button className="btn btn-danger rounded-circle" onClick={ onDelete } ><i className="bi bi-trash3"></i></button> : ""} 
            </div>
            
        </div>

    </div>

    
  )
}
