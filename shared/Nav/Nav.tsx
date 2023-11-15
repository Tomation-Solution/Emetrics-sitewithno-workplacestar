import Button from '../Button/Button'
import { NavBtnContainer, NavContainer, NavSecondPart,NavLinksContainer, NavLogoContainer, MainNav } from './Nav.style'
import {  FaBars } from 'react-icons/fa'
import EmetricLogo  from '../../assets/logo.png'
import {IoMdCloseCircle} from 'react-icons/io'
import { useEffect, useState } from 'react'
import NavDropDown from '../NavDropDown/NavDropDown'
import Link from 'next/link';
import { useRouter } from 'next/router';
import down from '../../assets/down.png'
import up from '../../assets/up.png'
import { handleDemo } from '../../utils/extraFunction'

import NavPopOverWithForm from '../NavPopOvers/NavPopOverWithForm'
import LoginButtonPopOver from '../LoginButtonPopOver/LoginButtonPopOver'

const Services = [
  {
    title:'Performance Management',
    url:'https://workplacestars.com/services/performance-mangement',
    content:`
  Our performance management system development approach provides for adoptions of various methodologies such as balanced scorecard, OKR, etc. 
    `
  },
  {
    title:'Process Improvement and Automation',
    url:'https://workplacestars.com/services/process-improvement-and-automation',
    content:`
    Engaging us for our Business Process Improvement and Automation solution can always be seen as a step in preparing your organization for the next level within a dynamic business environment.
    `
  },
  {
    title:'Corporate Strategy',
    url:'https://workplacestars.com/services/corporate-strategy',
    content:`
    Our approach to the development of corporate strategy at is designed to ensure that organizations produce better plans for how they can effectively respond to the new and emerging future. 
    `
  },
  {
    title:'International Market Entry',
    url:'https://workplacestars.com/our-services',
    content:`
    Feel free to enlist the support of our experts, and we'll supply you with all the resources necessary.
    `
  }
]

const freePulse = [
  {
    title:'Org 360',
    url:'https://raredolls.tk/review/',
    content:`
    Employee Engagement Management Software
    `
  },
  {
    title:'Emetrics',
    url:'https://workplacestars.com/free-pulse/emetrics',
    content:`
    Performance Mangement Software 
    `
  },
]

const about = [
 
  {
    title:'Our Team ',
    url:'https://workplacestars.com/about-team',
    content:`
    Make a switch from running through several spreadsheets in a bid to prepare your payroll.
    `
  },
  {
    title:'Our Clients and Testimonials',
    url:'https://workplacestars.com/about/client-and-testimony',
    content:`
    Manage task allocation, submission and rating hitch freely.
    `
  },
  {
    title:'Our Value Proposition, Our Mission & Vision',
    url:'https://workplacestars.com/about/values-mission-vision',
    content:`
    Enjoy effortless management of leave planning and administration with a few clicks.
    `
  },
]


const Solutions = [
  {
    title:'ORG 360',
    url:'https://raredolls.tk/',
    content:`
    Employee Engagement Management Software
    `
  },
  {
    title:'E-metric Suite',
    url:'https://emetric.workplacestars.com',
    content:`
    Performance Mangement Software 
    `
  },
  {
    title:'Sequential Jobs',
    url:'https://sequentialjobs.workplacestars.com',
    content:`
    Smart Recruitment
    `,
  },
  
]


const LoginMobile = [
  {
    title:'Login to Org360',
    url:'https://raredolls.tk/login.php/',
  },
  {
    title:'Login to E-metric Suite',
    url:'https://app.emetricsuite.com/',
  },
  {
    title:'Login to Sequential Jobs',
    url:'https://app.sequentialjobs.com/login',
  },
]

// const RequestDemoMobile = [
//   {
//     title:'ORG 360',
//     url:'https://workplacestars.com/request-demo',
//   },
// ]

const Nav = ():React.ReactElement=>{
  const router = useRouter();
  const[showMobileNav,setShowMobileNav]= useState(false)
  const handleShowMobileNav=()=> setShowMobileNav(!showMobileNav);
  const [dropdown, setDropdown] = useState<string>();
  const handleDropDown = (e:any,id:string)=>{
    e.preventDefault()
    if(e.target.id == id){
      if(dropdown==id){
        setDropdown('')
      }else{
        setDropdown(id)
      }
    }
  }

  if(router.events){
    router.events.on('routeChangeStart',e=>{
      setDropdown('')
    })
  }

  const handleRoute = (route:string):void=>{
    router.push(route)
  }
  return (
    <MainNav>
      <NavContainer>
        <NavLogoContainer onClick={()=> router.push('/')}>
          <img src={EmetricLogo.src} alt="" />
        </NavLogoContainer>


        <FaBars onClick={handleShowMobileNav}/>
      

        <NavSecondPart showMobileLink={showMobileNav}>
          <IoMdCloseCircle  onClick={handleShowMobileNav}/>
          <NavLinksContainer>
            <li><a  
              href="#"
              id='services'
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={(e)=>handleDropDown(e,'services')} 
              className={dropdown=='services' ? 'active' : ''} 
            >Services  <img src={dropdown=='services'?up.src:down.src} alt="" /></a>
            
            <NavDropDown submenus={Services} dropdown={dropdown=='services'} />

            </li>

            <li><a href="#"
              id='solutions'
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={(e)=>handleDropDown(e,'solutions')} 
              className={dropdown=='solutions' ? 'active' : ''} 
            >Solutions <img src={dropdown=='solutions'?up.src:down.src} alt="" /></a>
            <NavDropDown submenus={Solutions} dropdown={dropdown=='solutions'} />
            </li>

            {/* Our Partners */}
            {/* <li><a 
              href="/parthers"
              className={router.pathname == '/parthers' ? 'active' : ''} 
            >Our Partners </a>
            </li> */}
            {/* about us */}
            <li>
              <a href="#"
                id='about_us'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'about_us')}
                className={dropdown=='about_us' ? 'active' : ''} 
              >About Us
                <img src={dropdown=='about_us'?up.src:down.src} alt="" />
              </a>
              <NavDropDown submenus={about} dropdown={dropdown=='about_us'} />
            </li>
            <li>
              <a href="#"
                id='free_pulse'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'free_pulse')}
                className={dropdown=='free_pulse' ? 'active' : ''} 
              >Free Pulse
                <img src={dropdown=='free_pulse'?up.src:down.src} alt="" />
              </a>
              <NavDropDown submenus={freePulse} dropdown={dropdown=='free_pulse'} />
            </li>

          
            {showMobileNav ? ( 
               <></>
            ):(

            <li>
              <a href="#"
                id='become_a_provider'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'become_a_provider')}
                className={dropdown=='become_a_provider' ? 'active' : ''} 
              >Become a Provider
                <img src={dropdown=='become_a_provider'?up.src:down.src} alt="" />
              </a>
              <NavPopOverWithForm dropdown={dropdown=='become_a_provider'} />
            </li>
            )}

            <li><a 
              className={router.pathname == 'https://sequentialjobs.workplacestars.com/blog' ? 'active' : ''} 
              onClick={e=>{
                e.preventDefault()
                handleRoute('/blog')
              }} >Research</a></li>
              
              {showMobileNav && (
                <>
                
                <li><a href="#"
              id='loginMobile'
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={(e)=>handleDropDown(e,'loginMobile')} 
              className={dropdown=='loginMobile' ? 'active' : ''} 
            >Login<img src={dropdown=='loginMobile'?up.src:down.src} alt="" /></a>
            <NavDropDown submenus={LoginMobile} dropdown={dropdown=='loginMobile'} />
            </li>

                </>
              )}

            

            
          </NavLinksContainer>


        {/* show this login and request demo buttons for large screens */}
            {!showMobileNav && (
          <NavBtnContainer>

            <div>
              <a href="#"
                id='request_demo'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'request_demo')}
                className={'request-demo-button'} 
                // className={dropdown=='request_demo' ? 'active' : ''} 
              >Request Demo
                {/* <img src={dropdown=='request_demo'?up.src:down.src} alt="" /> */}
              </a>
              <NavPopOverWithForm dropdown={dropdown=='request_demo'} />
            </div>
            <div>
              <a href="#"
                id='login'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'login')}
                className={'request-demo-button'} 
                // className={dropdown=='login' ? 'active' : ''} 
              >Login
                {/* <img src={dropdown=='login'?up.src:down.src} alt="" /> */}
              </a>
             
            <LoginButtonPopOver dropdown={dropdown=='login'} />
            </div>
            

            
            {/* <li><a href="https://app.emetricsuite.com/" target={'_blank'} rel="noreferrer" color='#14A7E5'>Sign In</a></li> */}
            
           
          </NavBtnContainer>)
           }
        </NavSecondPart>

      </NavContainer>
    </MainNav>
  )
}

export default Nav