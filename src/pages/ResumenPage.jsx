
import { useSelector } from "react-redux";
import { ChartMoney } from "../components/chart/ChartMoney";



export const ResumenPage = () => {
  const { expenseList, incomeList } = useSelector(state=>state.countApp);
  
  return (
    <div className="row mt-1 mt-sm-3 mb-1 mb-sm-1">
      {  expenseList.length >= 1 || incomeList.length >=1 ? <ChartMoney /> : (
      
      <div className="text-center m-5 p-5">
        <div className="alert alert-danger" role="alert">
          <p className="fs-5">¡Lo siento! No tienes movimientos.</p>
          <p className="fs-5">Para ver tu gráfica de gastos e ingresos, añade un movimiento</p>
        </div>
        
      </div> 
      
      )}
    </div>
  )
}