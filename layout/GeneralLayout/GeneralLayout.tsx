import Footer from '../../shared/Footer/Footer'
import Nav from '../../shared/Nav/Nav'




type Prop = React.PropsWithChildren<{

}>

const  GeneralLayout = ({children}:Prop):React.ReactElement=>{


  return (
    <div>

      <Nav/>
      <div>
        {children}
      </div>

      <Footer/>
    </div>
  )
}

export default GeneralLayout