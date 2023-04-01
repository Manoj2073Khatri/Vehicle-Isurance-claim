import Stepper from '../components/stepper'
import {RiCheckboxCircleFill} from 'react-icons/ri'

const Success = () => {

  return (
    <>
      <Stepper activeStep={3}/>
      <div className="mt-4 d-flex flex-column justify-content-center align-items-center">

        <RiCheckboxCircleFill className='text-success' size={100}/>
        <h3 className='my-2 fw-bold text-center'>Photos and Details Received Successfully</h3>
       
        <p className='col-10 text-center text-muted '>Thank you for uploading the pictures of your vehicle.<br/>
        we'll be in touch with you soon.</p>
   
      </div>

    </>
  )
}

export default Success