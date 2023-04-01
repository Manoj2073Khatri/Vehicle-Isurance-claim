import Form from 'react-bootstrap/Form';
import Stepper from '../components/stepper'
import {BiRightArrowAlt} from 'react-icons/bi'
import { useNavigate} from 'react-router-dom';
import { useForm, Controller ,SubmitHandler } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import CRUDServices from '../services/crud';


import * as yup from "yup";
import { Flip, toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  incidentDate: string,
  vehicleRegistrationNo: string,
  mileage:number,
  airbags:boolean,
};

const ClaimDetails = () => {

  const [formData,setFormData]=useState<any>();
  const [loader,setLoader]=useState<any>();

  const schema = yup.object().shape({
    // PhoneNumber: yup.string().matches(phoneRegExp, 'Enter valid phone number.').required("This field is required."),
    // FirstName: yup.string().max(20, "Maximum characters is 20.").required("This field is required."),
    // LastName: yup.string().max(20, "Maximum characters is 20.").required("This field is required."),
    // Email: yup.string().email("Please enter a valid email").required("This field is required"),
    // Password: yup.string().required("This field is required.").min(6, "Minimum characters is 6.").max(20, "Maximum characters is 20"),
    // ConfirmPassword: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match').required("This field is required.")
  });
  

  const { control,register, handleSubmit, formState: { errors } ,reset} = useForm<Inputs>(
    {
      resolver: yupResolver(schema),
  }
  );
  const navigate=useNavigate();


  const { mutate: saveClaimDetailsData } = useMutation<{}, Error>(
    "query-saveClaimDetailsData",
    async () => {
        return await CRUDServices.post(`/addAdmin`, formData)
    },
    {
        onSuccess: (res: any) => {
            setLoader(false);

            toast.success('data saved Successfully.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Flip
            });
        },
        onError: (err: any) => {
            setLoader(false);
            toast.error('Error occured.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Flip
            });
        },
    }
);



useEffect(() => {
  if (formData) {
      try {
          setLoader(true);
          saveClaimDetailsData();
      }
      catch (err) {
          console.log(err);
      }
  }
  return () => {

  }
}, [saveClaimDetailsData, formData])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
         console.log(data);
         setFormData(data);
         reset()
         navigate('/uploadImage');
  };

  return (
    <>
       <Stepper activeStep={1}/>
       <div className='row justify-content-center mt-4' >
          <Form className='col-10 col-md-7 col-lg-6' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='fw-bold'> Provide Additional Claim Details</h3>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What date did the incident happen?</Form.Label>
                    <Controller
                              name="incidentDate"
                              control={control}
                              defaultValue=""
                              render={({ field }) => <Form.Control {...field} type="date" placeholder="Select date" />}
                          />
                     {/* <small className='text-danger'>{errors.FirstName?.message}</small> */}
                  
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Please Confirm your vehicle registration Number(VRN)</Form.Label>
                    <Controller
                              name="vehicleRegistrationNo"
                              control={control}
                              defaultValue=""
                              render={({ field }) => <Form.Control {...field} type="text"  placeholder="" />}
                          />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Approximately, What’s the total mileage reading  on your car currently?</Form.Label>
                    <Controller
                              name="mileage"
                              defaultValue={0}
                              control={control}
                              render={({ field }) => <Form.Control {...field} type="number"  placeholder="" />}
                          />
                  </Form.Group>
             
                  <div>
                    <Form.Label>Did any airbags go off?</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Yes"
                        value='Yes'
                        {...register("airbags", {
                          required: "Select any one"
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        value="No"
                        {...register("airbags", {
                          required: "Select any one"
                        })}
                      />
                     
                  </div>

                  <div className='mt-4 d-flex flex-column justify-content-center align-items-center'>
                  <div className='d-flex justiy-content-center align-items-center'>
                  
                      <Button type="submit" className='btn btn-primary btn-lg rounded cta-btn'>
                        Submit and Proceed <BiRightArrowAlt className='arrow'/>
                      </Button>
                </div>
                 <small className='mb-0 text-center mt-2'>Need help? <a href="tel:03330432022" className='text-decoration-none'>Call us</a></small>
            </div>

            </Form>
       </div>
    </>
  )
}

export default ClaimDetails