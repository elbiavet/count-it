import { useSelector } from "react-redux"
import { Income } from "../components/Income"


export const IncomePage = () => {

    const { incomeList } = useSelector(state=> state.countApp)

  return (
    <div className="container-fluid col col-sm-10 col-lg-8 col-xl-6 overflow-auto">
      

      {incomeList.length >=1 ? incomeList.map(e => <Income key={e.id} {...e}/>) :(
      
      <div className="text-center m-5 p-5">
        <div className="alert alert-danger" role="alert">
          <p className="fs-5">¡Lo siento! No tienes ingresos.</p>
          <p className="fs-5">Para ver tu gráfica de ingresos, añade un movimiento</p>
        </div>
      </div>
      
      )}
      
   </div>
  )
}

