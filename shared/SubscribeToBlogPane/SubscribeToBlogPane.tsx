import { useState } from 'react'
import useToast from '../../hooks/useToastify'
import api from '../../services/api'
import Preloader from '../Preloader'
import SearchInput from '../SearchInput/SearchInput'
import { SubscribeCover, SubscribeToBlogContainer } from './SubscribeToBlogPane.style'



const SubscribeToBlogPane = ():React.ReactElement=>{
  const [email,setEmail] = useState<string>();
  const {notify} = useToast()
  const [loading,setLoading]= useState(false)
  const subScribe = async(value:string)=>{
    console.log({value})
    setLoading(true)
    try {
      const resp = await api.post('blog/email-subscription/',{'email':value})
      console.log(resp)
      setLoading(false)

      notify('Subscribed Successfully','success')
    } catch (err:any) {
      //
      setLoading(false)

      notify('Please Check Your Internet Or Refresh','error')
    }
  } 

  return (
    <SubscribeCover>
      <SubscribeToBlogContainer>
        <h2>Subscribe to Our Blog</h2>
        <p>Stay up to date with the latest marketing, sales, and service tips and news.</p>
        {
          loading&&
      <Preloader/>
        }
        <SearchInput 
          btnPress={(value)=>{
            subScribe(value)
          }}
          type='email'
          buttonText='SubScribe'/>
      </SubscribeToBlogContainer>
    </SubscribeCover>
  )
}

export default SubscribeToBlogPane