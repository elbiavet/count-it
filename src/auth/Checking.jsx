

export const Checking = () => {
  
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="vh-100 d-flex align-items-center">
        <p className="display-5 text-primary m-2">Cargando... </p>
        <div className="spinner-border ms-auto text-primary m-2" role="status" aria-hidden="true"></div>
      </div>
    </div>
  )
}
