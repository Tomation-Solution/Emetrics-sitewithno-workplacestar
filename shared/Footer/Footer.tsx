import { NavLogoContainer } from '../Nav/Nav.style'
import { FooterContainer, FooterCover, FooterSectionA, FooterSectionB } from './Footer.style'
import EmetricLogo  from '../../assets/logo.png'
import { useRouter } from 'next/router'






const Footer = ():React.ReactElement=>{
  const route = useRouter()
  const handleRoute = (link:string):void=>{
    route.push(link)
  }
  return (
    <FooterCover>
      <FooterContainer>
        <FooterSectionA>
          <br />
          <div className='addresse_container'>
            <NavLogoContainer>
              <img src={EmetricLogo.src} alt="" />
            </NavLogoContainer>
            <br />
            <p>9304 Forest lane, Suite S207 Dallas, Texas 75243</p>
            <p>Email : info@emetricsuite.com</p>
            <p>Contact : +1 (504) 499-5921</p>
            <div className="socials">
                    
            </div>
          </div>

          <div className='footer_feature_container'>
            <p><strong>
            Products
            </strong></p>

            <p onClick={e=>handleRoute('/products/6')}>Performance Management</p>
            
            <p onClick={e=>handleRoute('/products/5')}>Time Sheet</p>
            
            
            <p onClick={e=>handleRoute('/products/8')}>Leave Administration</p>
            
            <p onClick={e=>handleRoute('/products/6')}>Payroll Management</p>
          </div>

          <div className='footer_pages_link'>
            <p onClick={(e)=> handleRoute('/parthers')}>Our Partners</p>
            <p onClick={(e)=> handleRoute('/blog')}>Blog</p>
          </div>
        </FooterSectionA>
        <br />
        <FooterSectionB>
        Copyright © 2022 Emetric LLc.
        </FooterSectionB>
      </FooterContainer>
    </FooterCover>
  )
}

export default Footer