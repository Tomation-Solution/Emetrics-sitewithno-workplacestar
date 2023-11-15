import Button from '../Button/Button'
import {OurPatherIntroContainer,OurPatherIntroPane ,OurPatherDetailPane} from './ourPatherIntro.style'
import handShake from '../../assets/handShake.png'
import arrow from  '../../assets/arrow.png'
import { useRouter } from 'next/router'



const OurPatherIntro = ():React.ReactElement=>{
  const route  = useRouter()

  return (
    <OurPatherIntroContainer>
      <OurPatherIntroPane>
        <img className='handShake' src={handShake.src} alt="" />
        <h2>Our Parther</h2>
        <p>Our partners are technically referred to as Value Added Partners (VAP). </p>
        <br />
        <a href="">Learn More</a>
        <img className='arrow' src={arrow.src} alt="" />
      </OurPatherIntroPane>
      <br />
      <OurPatherDetailPane>
        <h2>Become A Partner</h2>
        <p>Join our growing list of partners across the globe and stand the chance of becoming our country representative in your country. This position offers you the opportunity of working in one of the fastest growing organization in the performance management industry. Our partners are technically referred to as Value Added Partners (VAP). As a VAP........ <a href="">Learn more</a></p>
        <Button onClick={(e)=>route.push('/parthers')}>Join Us</Button>
      </OurPatherDetailPane>
    </OurPatherIntroContainer>
  )
}

export default OurPatherIntro