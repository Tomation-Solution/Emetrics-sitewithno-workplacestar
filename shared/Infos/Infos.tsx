import note_with_settings from '../../assets/note_with_settings.png'
import note_svg from '../../assets/note_svg.png'
import hourse from '../../assets/hourse.png'
import { InfoBox, InfoFlexContainer, MainInfoContainer } from './Infos.style'
import { useMediaQuery } from 'react-responsive'



const Info= ():React.ReactElement=>{

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  return (
    <MainInfoContainer>
      <InfoFlexContainer>
        <InfoBox>
          <img src={note_with_settings.src} alt="" />
          <h2>Task Manager</h2>
          <p>Manage daily activities seamlessly with our task manager and get notified promptly about your task status</p>
        </InfoBox>

        <InfoBox>
          <img src={note_svg.src} alt="" />
          <h2>Data Analytics {isDesktopOrLaptop?<br/>:''} {' & '}Report</h2>
          <p>
          Get real-time updates on both individual, team and corporate performance outlook via your human performance and corporate performance management report dashboards
Have all data stored and management easily with regular insights to updates
          </p>
        </InfoBox>

        <InfoBox>
          <img src={hourse.src} alt="" />
          <h2>Manage your   {isDesktopOrLaptop?<br/>:''} corporate strategy </h2>
          <p>
          Link your daily activities to your KPIs as well as corporate strategic objectives with a well-designed strategy manager.
          </p>
        </InfoBox>

      </InfoFlexContainer>
      
    </MainInfoContainer>
  )
}

export default Info