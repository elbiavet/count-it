
import { useSelector } from 'react-redux';
import { BarraSearch } from '../components';
import '../countApp/CountApp.css'


export const SearchPage = () => {

    const {expenseList, incomeList } = useSelector(state => state.countApp)
  
    return (
    <div className="container">
        <div className="row">
          <BarraSearch list={ expenseList } kind="gasto" />
          <BarraSearch list={ incomeList } kind="ingreso" />
        </div>
        
    </div>
  )
}

