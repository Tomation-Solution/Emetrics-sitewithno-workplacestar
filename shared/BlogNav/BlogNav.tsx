import React from 'react'
import Button from '../Button/Button'
import SearchInput from '../SearchInput/SearchInput'
import { BlogNavCategorieslink, BlogNavContainer, Categorieslink } from './BlogNav.style'


type Prop ={
  setLook_up?:(value:any)=>void;
}

export const BlogNav= ({ setLook_up }:Prop):React.ReactElement=>{

  const handleLook = (value:string)=>{

    if(setLook_up){
      setLook_up(value)
    }
  }

  return (  
    <BlogNavContainer>

      <BlogNavCategorieslink>
        <Categorieslink onClick={(e)=>handleLook('?categories__names=Email Marketing')}>
        Email Marketing
        </Categorieslink>
        <Categorieslink>
        Performance Management
        </Categorieslink>

        <Categorieslink>
        KPI Analytics
        </Categorieslink>
        <Categorieslink>
        KPI Analytics
        </Categorieslink>

        <Categorieslink>
        Payroll_Management
        </Categorieslink>
        <Categorieslink>
        Leave Management
        </Categorieslink>
       
      </BlogNavCategorieslink>
      <br />

      {/* <SearchInput/> */}
    </BlogNavContainer>
  )
}

export default BlogNav