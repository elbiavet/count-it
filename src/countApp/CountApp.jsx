
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar, BarraTotales} from '../components';
import { ExpensesPage, HomePage, IncomePage, ResumenPage, SearchPage } from '../pages';


export const CountApp = ()=> {

  return (
    <div className="container-fluid" >
      <NavBar />
    
      <Routes>
          <Route path="/*" element= {< Navigate to="/home" replace/> } />  
          <Route path="/home" element= {<HomePage /> } />
          <Route path="/resumen" element= {<ResumenPage /> } /> 
          <Route path="/incomes" element= {<IncomePage /> } /> 
          <Route path="/expenses" element= {<ExpensesPage /> } /> 
          <Route path="/search" element= {<SearchPage /> } />  
      </Routes>
     
     <BarraTotales />
    </div>
  )
}