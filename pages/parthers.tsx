import { NextPage } from 'next'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import { ParthersFormContainer, ParthersHeroContainer, ParthersHeroContentContainer, ParthersHeroImgContainer } from '../styles/parthers.style'
import parthers1 from '../assets/parthers1.png'
import parthers2 from '../assets/parthers2.png'
import Button from '../shared/Button/Button'
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react'
import useToast from '../hooks/useToastify'
import api from '../services/api'
import Preloader from '../shared/Preloader'


type PartherType = {
  full_name:string;
  email:string;
  phone_number:number;
  org_name:string;
  designation:string;
  country:string;
}


const schema = yup.object().shape({
  full_name:yup.string().required(),
  email:yup.string().email().required(),
  phone_number:yup.number().required(),
  org_name:yup.string().required(),
  country:yup.string().required(),
})
const Parthers:NextPage = ()=>{
  const [agree,setAgree] = useState(false);
  const [loading,setLoading] = useState(false);
  const {notify} = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<PartherType>({
    resolver: yupResolver(schema)
  });

  const onSubmit= async(data:PartherType)=>{
    setLoading(true)
    try {
      const resp = await api.post('user/register-pathers/',data)
      setLoading(false)

      notify('We recevied your request our team will get back to you','success')
    } catch (err:any) {
      setLoading(false)

      notify('Please Check Your Internet','error')
    }
  }

  return (
    <GeneralLayout>
      <ParthersHeroContainer>
        <ParthersHeroContentContainer>
          {loading&&<Preloader/>}
          <h2>
            Join Our Growing List of  Parthers Across the Globe
          </h2>
          <br />
          <p>
          Join our growing list of partners across the globe and stand the chance of becoming our country representative in your country. This position offers you the opportunity of working in one of the fastest growing organization in the performance management industry. Our partners are technically referred to as Value Added Partners (VAP). As a VAP, you are expected to market the solution to companies in your country, make demo presentations, follow up on them for sales, help with deployment and ultimately manage the clients.
          </p>
        </ParthersHeroContentContainer>
        {/* <br /><br /> */}
        <ParthersHeroImgContainer>
          <img src={parthers2.src} alt="" />
          <img src={parthers1.src} alt="" />
        </ParthersHeroImgContainer>
      </ParthersHeroContainer>

      <br />
      
      <ParthersFormContainer>
        <h3>Become our parther</h3>
        <p><a href={'agrrement.pdf/'} target="_blank" rel="noopener noreferrer" ><span>Download</span></a> to read more about our partnership scheme</p><br />
        {/* <Button styleType={'sec'} style={{'margin':'0','width':'40%'}}>
                Download now
        </Button> */}
        
        <br />

        <form  onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel
            label='First name'
            placeholder=''  
            type='text'  
            register={register('full_name')}
            errorMessage={errors.full_name?.message}
          />
          <br />

          <InputWithLabel
            label='E-mail'
            placeholder='enter valid email'
            type='email'  
            register={register('email')}
            errorMessage={errors.email?.message}
          />
          <br />
          <InputWithLabel
            label='Phone Number'
            placeholder=''
            register={register('phone_number')}
            errorMessage={errors.phone_number?.message}
          />
          <br />

          <InputWithLabel
            label='Organiation Name'
            placeholder='..'
            register={register('org_name')}
            errorMessage={errors.org_name?.message}
          />
          <br />
          
          <InputWithLabel
            label='Country'
            register={register('country')}
            errorMessage={errors.country?.message}
          />
          <br />
          <InputWithLabel
            label='Designation'
            placeholder='..'
            register={register('designation')}
            errorMessage={errors.designation?.message}
          />
          <br />

          <p>
            <input type="checkbox" name="" id=""
              onChange={e=>setAgree(!agree)}
              style={{'marginRight':'.5rem','display':'inline-block'}}/>
          Please agree to our {' '}
            <span>
          terms and conditions
            </span> by {' '}
            <span>
             downloading
            </span>{' '}
              and reading our partnership brocheur
          </p>
          <br />

          {
            agree&&
          <Button style={{'width':'30%'}}>
                Submit
          </Button>
          }

        </form>
      </ParthersFormContainer>
    </GeneralLayout>
  )
}

export default Parthers