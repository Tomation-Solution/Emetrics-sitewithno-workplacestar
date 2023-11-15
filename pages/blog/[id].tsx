import BlogLayout from '../../layout/BlogLayout/BlogLayout'
import { BlogDetailContentContainer, BlogDetailMainContainer, BlogDetailMainImageContainer, BlogDetailOurProductCardContainer, BlogDetailOurProductContainer, BlogHeaderContainer, ContentPane } from '../../styles/BlogDetail.style'
import blogDummy from '../../assets/blogDummy.png'
import Dummy from '../../assets/dummy.png'
import { useRouter } from 'next/router'
import { BlogType } from '.'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import Preloader from '../../shared/Preloader'
import hr_image from '../../assets/hr_image.jpeg'
import ProductInfo from '../../shared/ProductInfo/ProductInfo'
import perfomance from '../../assets/perfomance.jpeg'
import { handleDemo } from '../../utils/extraFunction'




const BlogDetail = ():React.ReactElement=>{
  const [blog,setBlog] = useState<BlogType|null>(null)
  const [loading,setLoading] = useState(false)

  const route  = useRouter()
  const {id} = route.query
  console.log(id)

  const getBlogDetail = async()=>{

    setLoading(true)
    const resp = await api.get('blog/blog-view/'+id)
    console.log(resp)
    setBlog(resp.data)
    setLoading(false)
  }
  useEffect(()=>{
    if(id){
      console.log({id})
      getBlogDetail()
    }
  },[id])
  return (
    <BlogLayout>
      {loading&&<Preloader/>}
      <BlogDetailMainContainer>

        {
          blog?
            <BlogDetailContentContainer>

              <BlogDetailMainImageContainer>
                <img src={blog.main_image} alt="" />
              </BlogDetailMainImageContainer>   

              <BlogHeaderContainer>
                <h2>{blog.title}</h2>
                <div>
                  <p>{new Date(blog.date_created).toDateString()}</p>
                  <p><strong>writer: </strong><span>{blog.author} </span></p>
                </div>
                {/* <p><strong>HR Management/10 Mins Read</strong></p> */}
              </BlogHeaderContainer>


              {
                blog.blog_paragraphs.length!=0?
                  blog.blog_paragraphs.map((data,index)=>(
                    <ContentPane key={index}>
                      <img src={data.image} alt="" />
                      <p>{data.input_text}</p>
                    </ContentPane>
                  ))
                  :
                  ''
              }

           
            </BlogDetailContentContainer>:''
        }
        <br /><br />
        <BlogDetailOurProductContainer>
          <h2>Our Products</h2>
          <br />
          <BlogDetailOurProductCardContainer onClick={handleDemo}>
            <img src={hr_image.src} alt="" />
            <h3>HR Administration</h3>
            <p>
         Be on top of your game by relying on our automated HR tasks management syste..            </p>
          </BlogDetailOurProductCardContainer>

          <br /><br />
          <br /><br />
          <BlogDetailOurProductCardContainer onClick={handleDemo}>
            <img src={perfomance.src} alt="" />
            <h3>Performance Management</h3>
            <p>
            Performance management in any organization aims at extensively improving organizat..
       
            </p>
          </BlogDetailOurProductCardContainer>


        </BlogDetailOurProductContainer>

      </BlogDetailMainContainer>

    </BlogLayout>
  )
}

export default BlogDetail