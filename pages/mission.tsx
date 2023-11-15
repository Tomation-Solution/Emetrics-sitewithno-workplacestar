import { NextPage } from 'next';
import DetailLayout from '../layout/DetailLayout/DetailLayout';
import missionImg from '../assets/missionImg.jpg'
import { MissonBox } from '../styles/mission.style';
import Button from '../shared/Button/Button';



const Mission:NextPage =()=>{


  return (
    <DetailLayout
      heading='Our Mission and Vision'
      body=''
      image={missionImg.src}
    >   

      <MissonBox>
        <h2>Our Mission</h2>
        <p>To help build operationally excellent businesses both in structure and performance by the application of proven management principles, techniques and technology.</p>
      </MissonBox>

      <MissonBox>
        <h2>Our Vision</h2>
        <p>
        Continuously help businesses improve performance yield at a globally competitive rate.
        </p>
      </MissonBox>

      <MissonBox>
        <h2>Want to enjoy this for your business?</h2>

        <br />
        <br />
        <br />
        <Button style={{'width':'150px'}}>Get Started</Button>
      </MissonBox>
            
    </DetailLayout>
  )
}
export default Mission