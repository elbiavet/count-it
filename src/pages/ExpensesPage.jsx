import { useSelector } from "react-redux"
import { Expense } from "../components/Expense";


export const ExpensesPage = () => {

    const { expenseList } = useSelector(state=> state.countApp)

  return (
    <div className="container-fluid col col-sm-10 col-lg-8 col-xl-6 overflow-auto">
      
      { expenseList.length >=1 ? expenseList.map(e => <Expense key={e.id} {...e}/>) :(
            
        <div className="text-center m-5 p-5">
          <div className="alert alert-danger" role="alert">
            <p className="fs-5">¡Lo siento! No tienes gastos.</p>
            <p className="fs-5">Para ver tu gráfica de gastos, añade un movimiento</p>
          </div>
        </div>

      )}
    </div>
  )
}
