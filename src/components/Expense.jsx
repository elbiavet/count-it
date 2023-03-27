
import { useState } from "react";
import { useDispatch } from "react-redux"
import { setActiveMovement } from "../store/countApp/countAppSlice";
import { startDeleteExpense } from "../store/countApp/thunks";
import { onOpenModalExpense } from "../store/modal/modalSlice";
import { startTotalExpense } from '../store/total/thunks.js';

export const Expense = ({ title, amount, date, category, id }) => {

    const dispatch = useDispatch();
    const [active, setActive] = useState(false)
    
    const onSelect = ()=>{
        dispatch(setActiveMovement({title,amount,date,category, id}))
        setActive(!active)
    }

    const onDoubleClick = () =>{
        dispatch(onOpenModalExpense())
      }
    
    const onDelete = ()=>{
    dispatch(startDeleteExpense())
    dispatch(startTotalExpense())
  }


  return (
    <div className={`row border d-flex justify-content-center p-2 ${active ? "fondo-selected" : ""}`} data-bs-toggle="modal" data-bs-target="#modalExpense" onDoubleClick={ onDoubleClick} onClick={ onSelect } >
               
        <div className="col-7 ">
              <p className={`fs-5 ${active ? "text-danger":"text-primary" }`}>{title}</p>
              <p className="text-secondary">Tipo de gasto <strong>{category}</strong> </p>
        </div>

        <div className="col-5 row">
            <div className="col-9">
                <p className={`fs-5 ${active ? "text-danger":"text-primary" }`}>{amount} €</p>
                <p className="text-secondary">{date.split('-').reverse().join('/')}</p> 
            </div>
            <div className="col-3">
                { active ? <button className="btn btn-danger rounded-circle" onClick={ onDelete }><i className="bi bi-trash3"></i></button> : ""} 
            </div>
        </div>
    </div>

    
  )
}
