import ProductInfo from '../ProductInfo/ProductInfo'
import { ListProductInfoContainter } from './ListProductInfo.style'
import hr_image from '../../assets/hr_image.jpeg'
import perfomance from '../../assets/perfomance.jpeg'
import apprazal_data from '../../assets/apprazal_data.jpeg'
import strategyImg from '../../assets/strategyImg.jpeg'
import taskImage from '../../assets/taskImage.jpeg'
import StrategyManagement from '../../assets/StrategyManagement.png'
import timeSheetImag from '../../assets/timeSheetImag.png'
import leaveManagentImg from '../../assets/leaveManagentImg.png'
const ListProductInfo= ():React.ReactElement=>{


  return (
    <ListProductInfoContainter>
      <div>
        <h3>Our Products</h3>
        <p>Link your workforce{'’'}s operational activities with your goals{' & '}objectives on the go.</p>
    
      </div>
    
      <br /><br />
      <ProductInfo
        heading='HR Administration'
        body={`
        Be on top of your game by relying on our automated HR tasks management system designed to suit your operational needs.

        You will also be able to manage your employee records with just a click, saving yourself the stress of searching and combing through loads of documents per time.
        `}
        image={hr_image.src}
      />
      <br />
      <ProductInfo
        heading='Performance Management'
        body={`
        Performance management in any organization aims at extensively improving organizational performance while sustaining performance, productivity, and the motivation of employees. In recent years, it has become obvious that traditional performance management is ineffective.
        `}
        image={perfomance.src}
        variant={'var2'}
      />
      <br />

      <ProductInfo
        heading='Appraisal Data Generation'
        body={`
        Provides a clear and compelling strategic direction toOftentimes,organizations award high appraisal based performance ratings/scores to employees based on activities they are involved in and not on the contribution of those activities to the achievement of the overall organization objectives
        `}
        image={apprazal_data.src}
        variant={'var1'}
      />
      <br />

      <ProductInfo
        heading='Strategy Implimentation Management'
        body={`
        For an organization to truly have long-term strategic success, strong strategic plans are needed at every level in the organization. Our approach to the development of corporate strategy at Emetric Suite is designed to ensure that organizations produce better plans for how they might effectively respond to the new and ...
        `}
        image={strategyImg.src}
        variant={'var2'}
      />
      <br />
      
      <ProductInfo
        heading='Task Management'
        body={`
        Manage task allocation, submission and rating hitch freely.

Enjoy hitch free task management among team members within your organization. Enhancing the required job deliverable responsibility ownership.`}
        image={taskImage.src}
        variant={'var1'}
      />
      <br />

      <ProductInfo
        heading='Payroll Administration'
        body={`Make a switch from running through several spreadsheets in a bid to prepare your payroll.

        Get your payroll ready in a few minutes with just a few clicks.
        Performance Management
        Link and Track employee KPIs and tasks to the strategic objectives of the organization in a stress-free manner. Get on the go insights to appraisal update without having to wait till either end of the month, quarter or year. `}
        image={StrategyManagement.src}
        variant={'var2'}
      />

      <ProductInfo
        heading='Time Sheet'
        body={`
        View employee calendars easily for time analysis and utilization.

Be able to identify effective ways of utilizing employees time via our timesheet and calendars. Getting the best out of the available manhour of each employee par day.`}
        image={timeSheetImag.src}
        variant={'var1'}
      />

      <ProductInfo
        heading='Leave Administration'
        body={`
        Enjoy effortless management of leave planning and administration with a few clicks.

        Plan and manage the company-wide leave administration end to end without thinking about the physical movement of files from one desk to another.`}
        image={leaveManagentImg.src}
        variant={'var2'}
      />

      
    </ListProductInfoContainter>
  )
}

export default ListProductInfo