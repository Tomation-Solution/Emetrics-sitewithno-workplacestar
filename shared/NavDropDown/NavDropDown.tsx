import { useRouter } from 'next/router';
import { DropdownContainer } from './NavDropDown.style';




type Prop = {
    submenus:{
        title:string;
    url:string;
    content?:string
    }[],
    dropdown:boolean
    
}
const NavDropDown = ({submenus, dropdown,}:Prop):React.ReactElement=>{

  const route = useRouter()
  return (
    <DropdownContainer className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items" onClick={(e)=> route.push(submenu.url)}>
          <a href={'#'}>{submenu.title}</a>
          <p>{submenu.content}</p>
        </li>
      ))}
    </DropdownContainer>
  )
}


export default NavDropDown