import { useForm } from "react-hook-form"
import { useState } from "react";
import { Expense } from "./Expense";
import { useSelector } from "react-redux";
import { Income } from "./Income";


export const BarraSearch = ({list, kind}) => {

    const { register, handleSubmit } = useForm();
    
    const [searchList, setSearchList] = useState([])
    const {expenseList , incomeList } = useSelector(state => state.countApp)
  
    
    const onSubmit = (data) =>{
        let dataClean =  data.searchMovement.trim().toLocaleLowerCase();
        if(dataClean.length <= 1) return [];
        
        let result = list.filter(e => e.title.toLocaleLowerCase().includes(dataClean))
        setSearchList(result)
        
      }

    return (
        <div className="col-md mt-2">
            <form onSubmit={ handleSubmit(onSubmit)} className="row mb-2" >
                <label htmlFor="searchMovement" className="m-2 fs-5 col-10">Busca un {kind}</label>
                <input type="text" {...register("searchMovement")} className="col-9 m-2" />
                <button className="btn btn-primary col-2 m-1" type="submit"><i className="bi bi-search" style={{"fontSize": "1.5rem"}}></i></button>
            </form>
            { list === expenseList && searchList.length >=1 && searchList.map(e => <Expense key={e.id} {...e}/>)}
            { list === incomeList && searchList.length >=1 && searchList.map(e => <Income key={e.id} {...e}/>)}
            { searchList.length <1 && <div className="alert alert-primary " role="alert"><p> No tienes búsquedas.</p></div> }
            
            
        </div>
    )
}
