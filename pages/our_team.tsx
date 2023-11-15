import DetailLayout from '../layout/DetailLayout/DetailLayout'
import { Team, TeamContainer, TeamImgContainer, TeamSocials } from '../styles/our_team.style'
import OzeImage from '../assets/oze.jpeg'
import { BsLinkedin} from 'react-icons/bs'
import teamImg from '../assets/teamImg.jpg'


const OurTeam = ():React.ReactElement=>{



  return (
    <DetailLayout
      image={teamImg.src}
      heading='Our Team'
      body='We have a team of experienced HR consultants with substansive years of experience'
    >

      <TeamContainer>
        {/* <Team>
          <TeamImgContainer>
            <img src={OzeImage.src} alt="" />
          </TeamImgContainer>

          <h2>Mr. Ozed Osawe</h2>
          <p>Director of Business Operations <br />
             (EMEA)</p>
          <TeamSocials>
            <BsLinkedin/>
          </TeamSocials>
        </Team> */}
        <br />
        <br />
        <Team>
          <TeamImgContainer>
            {/* <img src={OzeImage.src} alt="" /> */}
          </TeamImgContainer>

          <h2>Debo Adebayo</h2>
          <p>
          Founder/CEO 
          </p>
          <TeamSocials>
            <BsLinkedin/>
          </TeamSocials>
        </Team>

        <br />
        <br />
        <Team>
          <TeamImgContainer>
            {/* <img src={OzeImage.src} alt="" /> */}
          </TeamImgContainer>

          <h2>Robert P. Ebers</h2>
          <p>Chief Operating Officer</p>
          <TeamSocials>
            <BsLinkedin/>
          </TeamSocials>
        </Team>
      </TeamContainer>
    </DetailLayout>
  )
}

export default OurTeam