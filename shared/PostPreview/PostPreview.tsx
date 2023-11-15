import Button from '../Button/Button'
import { PostPreviewContainer, PostPreviewContentContainer, PostPreviewImageContainer } from './PostPreview.style'
import Image from '../../assets/blog1.png' 
import { BlogType } from '../../pages/blog'
import { useRouter } from 'next/router'

type Prop = {
    variant?:'var1'|'var2'
    blog:BlogType
}

const PostPreview = ({ variant ='var1',blog}:Prop):React.ReactElement=>{

  const route = useRouter()

  return (
    <>
      <PostPreviewContainer   variant={variant}>
        <PostPreviewImageContainer variant={variant}>
          <img src={blog.main_image} alt="" />
        </PostPreviewImageContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <PostPreviewContentContainer>
          <h2>{blog.title}</h2>
          <p>{blog.get_paragraph_intro}...</p>
          <Button styleType='sec' onClick={(e)=>route.push('/blog/'+blog.id)}>Read more</Button>
          {/* <p><strong>HR Management/10 Mins Read</strong></p> */}
        </PostPreviewContentContainer>
      </PostPreviewContainer>
      <br />
      <br />
    </>
  )
}

export default PostPreview