import { LoginContainerImg } from '../../styles/Booking.style'
import GeneralLayout from '../GeneralLayout/GeneralLayout'
import bookingsImag from  '../../assets/bookingsImag.jpg'
import { DetailLayoutContainerImg ,DetailLayoutContentContainer} from './DetailLayout.style'

type Prop = React.PropsWithChildren<{
    heading:string;
    body:string;
    image?:string
}>

const DetailLayout = ({children,heading,body,image=bookingsImag.src}:Prop):React.ReactElement=>{


  return (
    <GeneralLayout>
      <DetailLayoutContainerImg image={image}>
        <DetailLayoutContentContainer>
          <h1>{heading}</h1>
          <p>{body}</p>
        </DetailLayoutContentContainer>
      </DetailLayoutContainerImg>
      <br />
      {children}
    </GeneralLayout>
  )
}


export default DetailLayout