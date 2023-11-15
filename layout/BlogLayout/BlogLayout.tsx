import React from 'react'
import BlogNav from '../../shared/BlogNav/BlogNav'
import Footer from '../../shared/Footer/Footer'
import Nav from '../../shared/Nav/Nav'
import SubscribeToBlogPane from '../../shared/SubscribeToBlogPane/SubscribeToBlogPane'



type Prop = React.PropsWithChildren<{
    
}>
const BlogLayout = ({ children }:Prop):React.ReactElement=>{


  return (
    <div>
      <Nav/>
      

      {children} 

      <br />
      <SubscribeToBlogPane/>
      <br />
      <Footer/>
    </div>
  )
}


export default BlogLayout