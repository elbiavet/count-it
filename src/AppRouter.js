
import { Route, Routes } from 'react-router-dom';
import { CountApp } from './countApp/CountApp';
import { Login, Register, Checking } from './auth';
import { useCheckAuth } from './hooks/useCheckAuth';


export const AppRouter = ()=> {
  
  const { status } = useCheckAuth();

  if(status === "checking") return <Checking /> ;

  return (
  
    <Routes>
      { status === "authenticated" 
        ? <Route path="/*" element={ <CountApp />} />  
        : <Route path="/login" element={ <Login /> } /> 
      }

      <Route path="/register" element= {<Register /> } /> 
      <Route path="/*" element={ <Login /> } /> 
    </Routes>
    
  )
}

