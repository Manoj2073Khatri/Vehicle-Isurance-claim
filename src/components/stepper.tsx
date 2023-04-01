import {useState,useEffect} from 'react'
import {CgFileDocument} from 'react-icons/cg'

const Stepper = ({activeStep}:any) => {

    const [stepOne,setStepOne]=useState<string>('active');
    const [stepTwo,setStepTwo]=useState<string>('active');
    const [stepThree,setStepThree]=useState<string>('active');

    useEffect(() => {

      

       if(activeStep===1){
          setStepTwo('');
          setStepThree('');
        }
        else if(activeStep===2){
          setStepThree('');
        }
       
      
      return () => {
       
      }
    }, [activeStep,stepOne,stepTwo,stepThree])
    

  return (

        <div className=' stepper'>
            <div  className={`stepper-item ${stepOne? stepOne:''}`}>
                <div className='stepper-item_icon'>
                  <CgFileDocument size={40} />
                </div>
                <p>Provide claim details</p>
            </div>  
        
            <div  className={`stepper-item ${stepTwo? stepTwo:''}`}>
                <div className='stepper-item_icon '>
                    <svg width="40" height="40" viewBox="0 0 24 24"><path  d="M19 13a1 1 0 0 0-1 1v.38l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.7l-2.48-2.48a2.85 2.85 0 0 0-3.93 0L4 12.6V7a1 1 0 0 1 1-1h7a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1ZM5 20a1 1 0 0 1-1-1v-3.57l2.9-2.9a.79.79 0 0 1 1.09 0l3.17 3.17l4.3 4.3Zm13-1a.89.89 0 0 1-.18.53L13.31 15l.7-.7a.77.77 0 0 1 1.1 0L18 17.21Zm4.71-14.71l-3-3a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42L18 4.41V10a1 1 0 0 0 2 0V4.41l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg>
                </div>
                <p>Upload Required Pictures</p>
            </div> 
        
            <div  className={`stepper-item ${stepThree? stepThree:''}`}>
                <div className='stepper-item_icon '>
                   <CgFileDocument  size={40}/>
                </div>
                <p>Submit and Get Contacted</p>
            </div>  
      </div>


  )
}

export default Stepper