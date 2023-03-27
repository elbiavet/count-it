import { FcComboChart } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";


export const HomePage = () => {
  return (
    <div className="container mt-3 mb-3">
  
        <div className="row d-flex justify-content-center">

            <div className="col-5 col-lg-3 col-xl-4 d-flex m-1 m-sm-2 justify-content-center border border-primary link-inicio">
              <div className="text-center p-4 m-1 m-sm-2">
                <Link to="/resumen" className="text-decoration-none">
                  <div>
                    <FcComboChart className="icons-react"/>
                    <p className="fs-4">Mi dinero</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-5 col-lg-3 col-xl-4 m-1 m-sm-2 d-flex justify-content-center border border-primary link-inicio">
              <div className="text-center p-4 m-1 m-sm-2" >
                <Link to="/expenses" className="text-decoration-none">
                  <div>
                    <FcShop className="icons-react"/>
                    <p className="fs-4">Gastos</p>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        
        <div className="row d-flex justify-content-center">

          <div className="col-5  col-lg-3 col-xl-4 gy-3 m-1 m-sm-2 d-flex justify-content-center border border-primary link-inicio">
            <div className="text-center p-4 m-1 m-sm-2" >
              <Link to="/incomes" className="text-decoration-none">
                <div>
                  <FcCurrencyExchange className="icons-react"/>
                  <p className="fs-4">Ingresos</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-5  col-lg-3 col-xl-4 gy-3 m-1 m-sm-2 d-flex justify-content-center border border-primary link-inicio">
            <div className="text-center p-4 m-1 m-sm-2" >
              <Link to="/search" className="text-decoration-none">
                <div>
                  <FcSearch className="icons-react"/>
                  <p className="fs-4">Buscar</p>
                </div>
              </Link>
            </div>
          </div>
          
      </div>
    </div>
  )
}
