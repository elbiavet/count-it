import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { startTotalExpense, startTotalIncome } from "../store/total/thunks"
import { setTotal } from "../store/total/totalSlice"
import { ModalIncome } from "./modal/ModalIncome"
import { ModalExpense } from "./modal/ModalExpense"



export const BarraTotales = () => {
  
  const { total, totalExpense, totalIncome } = useSelector(state =>state.total)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startTotalIncome())
    dispatch(startTotalExpense())
    dispatch(setTotal())
  }, [totalIncome, totalExpense])

  return (
  
    <div className="bg-dark total-div row position-fixed bottom-0 start-0 end-0">
        
      <div className="col-7 col-md-8 row d-flex justify-content-center"           >
        <div className="col-4 d-flex justify-content-evenly align-items-baseline">
          <p className="text-light fs-5 d-none d-md-inline">Añadir ingreso</p>
          <ModalIncome />
        </div>
        <div className="col-4 d-flex justify-content-evenly align-items-baseline">
          <p className="text-light fs-5 d-none d-md-inline">Añadir gasto</p>
          <ModalExpense />
        </div>
      </div>

      <div className="col-5 col-md-3 col-lg-3">
        <p className="text-light fs-5 m-1 d-flex justify-content-evenly align-items-center ">
        <span className="d-none d-lg-inline">BALANCE: </span>{ total } € 
          {total > 0 
          ? <i className="bi bi-check-circle fs-3" style={{"color":"green"}}></i>
          : <i className="bi bi-exclamation-circle fs-3 " style={{"color":"red"}} ></i>
        } 

        </p>
        
      </div>
  </div>
  )
}
