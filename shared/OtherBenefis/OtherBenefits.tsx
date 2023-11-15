import { ProductInfoMainContainer } from '../ProductInfo/ProductInfo.style'
import { OtherBenefitsContainer, OtherBenefitsContentContainer, OtherBenefitsCover, OtherBenefitsImageContainer } from './OtherBenefits.style'
import rounded_transparent  from '../../assets/rounded-transparent.png'
import Vector_1 from '../../assets/Vector(1).png'
import Vector_2 from '../../assets/Vector(2).png'
import Vector_3 from '../../assets/Vector.png'
import Vector_4 from '../../assets/vector4.png'
import Vector_5 from '../../assets/vector5.png'
// }


const OtherBenefits = ():React.ReactElement=>{



  return (

    <OtherBenefitsCover>
      {/* <img className='rounded_transparent_svg' src={rounded_transparent.src} alt="" /> */}
      <OtherBenefitsContainer>
        <OtherBenefitsImageContainer>
          <img className='photo1' src={Vector_1.src} alt="" />
          <img className='photo2' src={Vector_2.src} alt="" />
          <img className='photo3' src={Vector_3.src} alt="" />
          <img className='photo4' src={Vector_4.src} alt="" />
          <img className='photo5' src={Vector_5.src} alt="" />
        </OtherBenefitsImageContainer>

        <OtherBenefitsContentContainer>
          <div className="intro_content">
            <h2>Other Benefits</h2>
            <p>
            Planning to work or already working remotely...
Be it that you are about that commence remote/hybrid work or you{'\''}re already doing that, our solution helps in achieving the best of result doing that.
            </p>
          </div>

          <div className="other_content">
            <h2>  Achieve your deliverables even on the move</h2>
            <p>
          With the android and iOS mobile apps, work can be down even while you{'\''}re on the move.
Get started easily with our HR resources
Enjoy free access to loads of HR materials and tools that can position you for the desired knowledge acquisition in the field of HR
            </p>
          </div>

          <div className="other_content">
            <h2>  Support wise; we{'\''}ve got your back</h2>
            <p>
                    With our customers experience management team, you can be rest assured of excellent support when required.
            Enjoy the freedom of a global work environment
            Work from anywhere in the world with your cloud-based HR solution
            </p>
          </div>

        
 
        </OtherBenefitsContentContainer>
      </OtherBenefitsContainer>
    </OtherBenefitsCover>
  )
}

export default OtherBenefits