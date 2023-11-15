import React from 'react'
import { LoginDiv, NavPopOverContainer, PopoverContainer } from './LoginButtonPopOver.style';
import Link from 'next/link';

type Prop = {
    dropdown: boolean;
  };


const LoginButtonPopOver = ({ dropdown }: Prop) => {
  return (
    <NavPopOverContainer className={`dropdown ${dropdown ? 'show' : ''}`}>
      <PopoverContainer>
       <LoginDiv>

        <Link href='https://raredolls.tk/login.php/' ><div>Login to ORG 360</div></Link>
        <Link href='https://app.emetricsuite.com/' ><div>Login to E-metrics</div></Link>
        <Link href='https://app.sequentialjobs.com/login' ><div>Login to Sequential Jobs</div></Link>
       </LoginDiv>
       
      </PopoverContainer>
   </NavPopOverContainer>
  )
}

export default LoginButtonPopOver