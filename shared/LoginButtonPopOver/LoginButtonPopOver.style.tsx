import styled from 'styled-components';
import image from '../../assets/teamImg.jpg'


export const NavPopOverContainer = styled.ul`
    
background-color: white;

position: absolute;
// padding: 10px 10px;
border-radius: 10px;
z-index: 90;
top: 30px;
right:-120px;
// left: 300px;
// right:200px;
box-shadow: 0px 4px 4px rgba(20, 166, 229, 0.11);
display: none;

&.show{
    display: block;
    width: 300px;
}


@media screen and (min-width: 1000px) {

 
  &.show{
    position: fixed;
      width: fit-content;
      transform: translateX(-100px) translateY(30px);
      padding: 2rem;

      background-image:
/* linear-gradient(to bottom, #14a6e549,black),
url(${image.src}) */
border: 1px solid #f0f0f0;
background-size: cover;
background-position: left;
background-repeat: no-repeat;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);

gap: 10px;
font-size: 1.3rem;


p{
  font-size: .9rem;
  display: block;
  padding: .6rem 0;
  color: ${props=>props.theme.text.lightText};
}
    }
}

`

export const PopoverContainer = styled.div`
  max-width: 200px;
  width:300px;
  margin: 0 auto;
//   padding:5px 5px;

  

    &:hover {
      .popover {
        display: block;
      }
    }
  }
`

export const LoginDiv = styled.div`

div{
    display:flex;
    flex-direction:column;
    // font-size:small;
    font-size:16px;
    border-bottom:1px solid whitesmoke;
    padding:8px 2px;
}
`



