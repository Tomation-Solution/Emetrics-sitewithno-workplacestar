import { NextPage } from 'next';
import { FlexInput, LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from '../styles/Booking.style';
// 
import bookingsImag from  '../assets/bookingsImag.jpg'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel';
import Button from '../shared/Button/Button';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useToast from '../hooks/useToastify';
import { useState } from 'react';
import Preloader from '../shared/Preloader';
import api from '../services/api';



type ContactType ={
  first_name:string;
  last_name:string;
  org_name:string;
  org_size:number;
  job:string;
  hear:string;
  message:string;
  email:string;
  country:string;
  phone_number:number;
}


const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  org_name: yup.string().required(),
  org_size: yup.number().required(),
  job: yup.string().required(),
  hear: yup.string().required(),
  message: yup.string().required(),
  email: yup.string().required(),
  country: yup.string().required(),
  phone_number: yup.number().required(),
})

const ContactPage:NextPage = ()=>{
  const { register, handleSubmit, formState: { errors } } = useForm<ContactType>({
    resolver: yupResolver(schema)
  });

  const [loading,setLoading] = useState(false);
  const {notify} = useToast()

  const onSubmit = async (data: ContactType) => {
    setLoading(true)

    try {
      const resp = await api.post('user/contact-us/',data)
      setLoading(false)
      console.log(resp)
      notify('We recevied your request our team will get back to you','success')
    } catch (err:any) {
      setLoading(false)
      console.log({err})
      notify('Please Check Your Internet','error')
    }
    
  }
  console.log(errors)
  return (
    <GeneralLayout>
      {loading&&<Preloader/>}

      <LoginContainer viewHieght={234}>
        <LoginContainerImg image={bookingsImag.src}>
        </LoginContainerImg>

        <LoginContentContainer>
          <LoginNav>
            <div>
              <h2>Contact us today</h2>
              <br />
              <p>We{'\''}re available from 9 AM to 5 PM (UTC +1). Call us; we{'\''}re happy to help you meet your HR automation needs.</p>
              <br />
              <Button style={{'width':'40%'}}>+1 (504) 499-5921</Button>
              <br />
            </div>

          </LoginNav>

          <form  onSubmit={handleSubmit(onSubmit)}>
            {/* <FlexInput>

            </FlexInput> */}
            <InputWithLabel
              label='First Name' 
              placeholder='Enter a First Name' 
              register={register('first_name')}
              errorMessage={errors.first_name?.message}
            />
            <br />
            <InputWithLabel
              label='Last Name' 
              placeholder='Enter a Last Name' 
              register={register('last_name')}
              errorMessage={errors.last_name?.message}
            />
            <br />
            <InputWithLabel
              label='Email' 
              placeholder='' 
              register={register('email')}
              errorMessage={errors.email?.message}
            />
            <br />
            <InputWithLabel
              label='Country' 
              placeholder='' 
              register={register('country')}
              errorMessage={errors.country?.message}
            />
           
            <br />
            {/* <InputWithLabel
              label='Work e-mail' 
              type='email'
              placeholder='Enter a work e-mail' 
              register={register('last_name')}
              errorMessage={errors.last_name?.message}
            /> */}
            <br />
            <InputWithLabel
              label='Phone Number' 
              placeholder='Enter a work phone number' 
              register={register('phone_number')}
              errorMessage={errors.phone_number?.message}
              type='number'
            />
            <br />
            <InputWithLabel
              label='Organiation Name' 
              placeholder='Enter a work organiation name' 
              register={register('org_name')}
              errorMessage={errors.org_name?.message}
            />
            <br />
            <InputWithLabel
              label='Organization Size' 
              placeholder='Enter a work organiation name' 
              register={register('org_size')}
              errorMessage={errors.org_size?.message}
              type='number'
            />
            <br />
            <InputWithLabel
              label='Job Title' 
              placeholder='Enter a work organiation name' 
              register={register('job')}
              errorMessage={errors.job?.message}
            />


            <br />
            <InputWithLabel
              label='hear' 
              placeholder='How did you hear about us?' 
              register={register('hear')}
              errorMessage={errors.hear?.message}
            />
            <br />
            <InputWithLabel
              isTextArea={true}
              label='message' 
              placeholder='Message' 
              register={register('message')}
              errorMessage={errors.message?.message}
            />
            <br />
            <br />
            <Button style={{'width':'30%','margin':'0 auto'}}>Submit</Button>
          </form>
          <br />
          <br />

        </LoginContentContainer>
      </LoginContainer>
    </GeneralLayout>
  )
}
export default ContactPage