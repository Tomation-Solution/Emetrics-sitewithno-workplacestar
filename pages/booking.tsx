import { NextPage } from 'next';
import { LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from '../styles/Booking.style';
// 
import bookingsImag from  '../assets/bookingsImag.jpg'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel';


const BookingPage:NextPage = ()=>{

  return (
    <GeneralLayout>

      <LoginContainer>
        <LoginContainerImg image={bookingsImag.src}>
        </LoginContainerImg>

        <LoginContentContainer>
          <LoginNav>
            <h2>Schedule a Demo</h2>

          </LoginNav>

          <form>
            <InputWithLabel
              label='First Name' 
              placeholder='Enter a First Name' 
            />
            <br />
            <InputWithLabel
              label='Email' 
              placeholder='Enter a First email' 
            />
            <br />
            <InputWithLabel
              label='Job Title' 
              placeholder='Director' 
            />
            <br />
            <InputWithLabel
              label='Organization' 
              placeholder='Abc Company Ltd' 
            />
            {/* <InputWithLabel
              label='Select Start Time ' 
              type='date'
            //   placeholder='Abc Company Ltd' 
            /> */}

            {/* 
            country - drop down
            Select Time -date
            Select Zone - drop down
            */}
          </form>
        </LoginContentContainer>
      </LoginContainer>
    </GeneralLayout>
  )
}

export default BookingPage