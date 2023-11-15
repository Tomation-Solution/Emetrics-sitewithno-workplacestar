import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import BlogLayout from '../../layout/BlogLayout/BlogLayout';
import api from '../../services/api';
import BlogNav from '../../shared/BlogNav/BlogNav';
import ExploreBlogTopics from '../../shared/ExploreBlogTopics/ExploreBlogTopics';
import PostPreview from '../../shared/PostPreview/PostPreview';
import Preloader from '../../shared/Preloader';


export type BlogType={
  id:number;
  comments:any[],
  blog_paragraphs:{input_text:string,image:string}[],
  title:string;
  main_image:string;
  author:string;
  category:string;
  date_created:string;
  get_paragraph_intro:string;
}
const BlogIndex:NextPage = ()=>{
  const [loading,setLoading] = useState(false)
  const [blogs,setBlogs] = useState<BlogType[]>([])
  const [look_up,setLook_up] = useState<string>('')
  const getBlogs = async()=>{
    setLoading(true)
    console.log()
    // const resp = await api.get(`blog/blog-view/${look_up}`)
    const resp = await api.get('blog/blog-view/?categories__names=Performance Management')
    setBlogs(resp.data)
    setLoading(false)
    
      
  }

  useEffect(()=>{
    getBlogs()
  },[look_up])
  return (
    <BlogLayout>
      <BlogNav/>
      <br />
      {loading && <Preloader/>}

      {
        blogs.map((data,index:number)=>(
          <PostPreview key={index} variant={index%2==0?'var1':'var2'} blog={data}/>
        ))
      }
      {/* <PostPreview variant='var2'/> */}

      <br />          

      <ExploreBlogTopics/> 
    </BlogLayout> 
  )
}

export default BlogIndex