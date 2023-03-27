
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { useForm } from "../../hooks/useForm.js";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { setActiveMovement } from '../../store/countApp/countAppSlice.js';
import { startAddNewIncome, startUpdateIncome } from '../../store/countApp/thunks.js';
import { startTotalIncome } from '../../store/total/thunks.js';
import { closeModalIncome, onOpenModalIncome } from '../../store/modal/modalSlice.js';
import { customStyles } from './customStyles.js';
import { getDateForm } from "../../helpers/getDateForm.js";


Modal.setAppElement('#root');

    
export const ModalIncome = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {isSaving, activeMovement } = useSelector(state => state.countApp);
  const {modalIncome } = useSelector(state => state.modal);
 
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const { amount, title, date, category, onInputChange, formState, setFormState } = useForm( activeMovement );


  useEffect(() => {
    dispatch( setActiveMovement( formState ) )
  }, [ formState ])


  const onSaveMovement = (event)=>{
    event.preventDefault();
    setFormSubmitted( true );

    //guardar nota
    activeMovement.id 
      ? dispatch(startUpdateIncome()) 
      : dispatch( startAddNewIncome(formState) )

    dispatch(startTotalIncome())
    dispatch(closeModalIncome())

    setFormSubmitted(false); 
    }
  
  
  const onOpen =()=>{

    setFormState({
      title: "",
      amount:0,
      date: getDateForm(new Date()),
      category: "",
    });

    navigate("/incomes", {replace: true}) 
    dispatch(onOpenModalIncome())
  }
  

  const onCloseModal = () => {
      dispatch(closeModalIncome())
  }
   
  return (
    <div>
      
      <button className="btn btn-primary rounded-circle fs-2 " onClick={ onOpen }><i className="bi bi-cash"></i></button>
      
        <Modal
          isOpen={ modalIncome }
          onRequestClose={ onCloseModal }
          style={ customStyles }
        >
        <h2 className="mb-3">Nuevo ingreso</h2>
          
        <form onSubmit={ onSaveMovement }>
           
        <div className="mb-3">
           <label htmlFor="title" className="col-sm-2 col-form-label">Título</label>
           <input 
                type="text" 
                className={`form-control border border-secondary ${title ? "is-valid" : ""}`}
                id="title" 
                name= "title" 
                value = { title }
                onChange = { onInputChange }
                required
            />
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="col-sm-2 col-form-label">Cantidad</label>
                <input 
                    type="number" 
                    className="form-control border border-secondary" 
                    id="amount" 
                    name= "amount" 
                    value = { amount }
                    onChange = { onInputChange }
                    required
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="col-sm-2 col-form-label">Fecha</label>
                <input 
                    type="date" 
                    className="form-control border border-secondary" 
                    id="date" 
                    name= "date" 
                    value = { date }
                    onChange = { onInputChange }
                    required
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="incomeCategory" className="col-form-label">Tipo de gasto</label>
                <select className="form-select" aria-label="incomeCategory" name="category" onChange= {onInputChange} required > 
                    <option value="">Elige uno</option>  
                    <option value="Nómina">Nómina</option>
                    <option value="Autónomo">Facturación autónomo</option>
                    <option value="Regalos">Regalos</option>
                    <option value="Intereses">Interés bancario</option>
                    <option value="Otros">Otros</option>
                </select>
            </div>
            
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={ onCloseModal }>Cerrar</button>
                <button type="submit" className="btn btn-primary" disabled= { !title || isSaving || formSubmitted }>Guardar cambios</button>
            </div>
          </form>
        </Modal>
        
      </div>
    );
  }
  