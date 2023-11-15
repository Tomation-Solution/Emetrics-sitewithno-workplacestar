import { NextPage } from 'next';
import DetailLayout from '../layout/DetailLayout/DetailLayout';
import { OurClientsContainer } from '../styles/our_clients.style';
import Logos3 from '../assets/Logos 3.png'
import Logos4 from '../assets/Logos 4.png'
import Logos5 from '../assets/Logos 5.png'
import Logos6 from '../assets/Logos 6.png'
import Logos7 from '../assets/Logos 7.png'
import Logos8 from '../assets/Logos 8.png'
import Logos9 from '../assets/Logos 9.png'
import Logos10 from '../assets/Logos 10.png'
import Logo11 from '../assets/Logos 11.png'
import Logo12 from '../assets/Logos 12.png'
import Logo13 from '../assets/Logos 13.png'
import Logo14 from '../assets/Logos 14.png'
import Logo15 from '../assets/Logos 15.png'
import Logo16 from '../assets/Logos 16.png'

// 


const OurClients:NextPage = ()=>{
  const list_of_img = [
    Logos3,Logos4,Logos5,Logos6,Logos7,Logos8,Logos9,Logos10,
    Logo11,Logo12,Logo13,Logo14,Logo15,Logo16
  ]

  return (
    <DetailLayout
      heading='Our Clients'
      body='Over the years, We have served and satisfied clients across different industries.'
    >
      <OurClientsContainer>
        {
          list_of_img.map((image,index)=>(
            <img src={image.src} alt="" key={index} />
          ))
        }
      </OurClientsContainer>
    </DetailLayout>
  )
}


export default OurClients