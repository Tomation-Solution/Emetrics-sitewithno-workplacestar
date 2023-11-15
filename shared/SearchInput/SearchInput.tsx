import Button from '../Button/Button'
import {BlogSearchContainer} from './SearchInput.style'
import {useState} from 'react'


type Prop= {
  buttonText?:string;
  btnPress?:(value:string)=>void;
  type?:'text'|'number'|'email';
}
const SearchInput = ({buttonText='Search',btnPress,type='text'}:Prop):React.ReactElement=>{
  const [value,setValue] = useState<string>('')

  const handleClick = (e:any)=>{
    e.preventDefault()
    if(btnPress){
      btnPress(value)
    }
  }
  return (
    <BlogSearchContainer onSubmit={handleClick}>
      <input type={type} name="" id="" onChange={(e)=>setValue(e.target.value)}/>
      <Button >{buttonText}</Button>
    </BlogSearchContainer>
  )
}

export default SearchInput