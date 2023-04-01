
import Stepper from '../components/stepper'
import {BiRightArrowAlt} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Welcome = () => {

  
  return (
    <>
       <div className='d-flex flex-column justify-content-between align-items-center mt-3 mt-lg-5'>
           <h1 className='text-primary'>Welcome</h1>
           <div className='row justify-content-center mt-2'>
              <p className='col-lg-8 text-center text-muted fw-bold'>To  help you minimize effort,  we would like you to submit images of your vehicle 
                for assesment by our experts. Just follow the next steps and our team will be in 
                touch with you to take you through the process.</p>
           </div>
           <Stepper activeStep=""/>
            <div className='mt-4 mt-lg-5 d-flex flex-column justify-content-center align-items-center'>
               
                <NavLink to="/claimDetails" className='btn btn-primary btn-lg rounded cta-btn'>
                     Lets get Started <BiRightArrowAlt className='arrow'/>
                  </NavLink>
               
                 <small className='mb-0 text-center mt-2'>Need help? <a href="tel:03330432022" className='text-decoration-none'>Call us</a></small>
            </div>

            
      </div>
    </>
  )
}

export default Welcome