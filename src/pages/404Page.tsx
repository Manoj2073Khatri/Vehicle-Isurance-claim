import BackButton from "../components/backButton"


export const PageNotFound = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
      <h1 className='fw-bold display-1'>404</h1>
      <h3>Oops , Page not found</h3>
      <p>Oops the page you are looking does not exist.it might have been moved or deleted.</p>
      <BackButton/>

    </div>
  )
}
