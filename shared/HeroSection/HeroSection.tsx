import Button from '../Button/Button'
import { HeroSectionContainer, HeroSectionContentContainer, HeroSectionImageContainer } from './HeroSection.style'
import hero_image1 from '../../assets/hero_image1.png'
import hero_image2 from '../../assets/Ellipse 28.png'
import hourse_svg from '../../assets/hourse.png'
import time_svg from '../../assets/time_svg.png'
import note_svg from '../../assets/note_svg.png'
import note_with_settings from '../../assets/note_with_settings.png'
import { useRouter } from 'next/router'
import { demo_link, handleDemo } from '../../utils/extraFunction'
import {useEffect, useState} from 'react'
/* eslint-disable */
// @ts-ignore
// import Zoom  from 'react-reveal/Zoom';
const HeroSection = ():React.ReactElement=>{
  const [count ,setCount]= useState(0 )
  const route = useRouter()
  useEffect(()=>{
    const interval =  setInterval(()=>{
    
      setCount(value=>value+1)
      console.log(count)
    },7000)

    return () => clearInterval(interval);
  },[])
  console.log(
    count%2==0
  )
  return (
    <HeroSectionContainer>
      <HeroSectionContentContainer>

        <h1>Your One-Stop HR Package</h1>
        <p>
      Increase your business growth advantage with our One-Stop HR management solution, 
      without leaving anything undone in an effortless manner.
        </p>
        <br />
        <Button onClick={handleDemo}>Request Demo</Button>
      </HeroSectionContentContainer>
      <br />
      <HeroSectionImageContainer>
      

{/* <Zoom   when={count%2==0?true:false}> */}
<img className='hero_main_img' src={hero_image1.src} alt="" style={{'display':count%2==0?'block':'none'}} />
{/* </Zoom > */}
  {/* <Zoom  when={count%2!=0?true:false} > */}
  <img className='hero_main_img' src={hero_image2.src} alt="" style={{'display':count%2!=0?'block':'none'}}/>
{/* </Zoom > */}
        <div className='img_1 container-img' >
          <img  src={time_svg.src} alt="" />
        </div>
        <div className='img_2 container-img'>
          <img  src={hourse_svg.src} alt="" />
        </div>
        <div className='img_3 container-img'>
          <img  src={note_svg.src} alt="" />
        </div>
        <div className='img_4 container-img'>
          <img  src={note_with_settings.src} alt="" />

        </div>
  
      </HeroSectionImageContainer>
    </HeroSectionContainer>
  )
}

export default HeroSection