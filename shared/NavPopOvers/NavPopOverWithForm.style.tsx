import styled from 'styled-components';
import image from '../../assets/teamImg.jpg'


export const NavPopOverWithFormContainer = styled.ul`
    
background-color: white;
position: absolute;
padding: 1rem;
border-radius: 10px;
z-index: 90;
top: 30px;
// left: 10px;
// right:-90px;
box-shadow: 0px 4px 4px rgba(20, 166, 229, 0.11);
display: none;


  // li{
  //   cursor: pointer;
  // }
&.show{
    display: block;
    width: 300px;
}
// p{
//   display: none;
// }


@media screen and (min-width: 1000px) {

 
  &.show{
    position: fixed;
      width: fit-content;
      transform: translateX(-100px) translateY(30px);
      padding: 2rem;

      background-image:
/* linear-gradient(to bottom, #14a6e549,black),
url(${image.src}) */
// linear-gradient(0deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.74)), url(${image.src});
;
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

export const PopoverWithFormContainer = styled.div`
  max-width: 300px;
  width:300px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
  }
  

  .popover-group {
    margin-bottom: 20px;
    position: relative;
    font-size:15px !important;

    label {
      font-weight: normal;
      margin:5px 0px;
    }

    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
    }

    .popover {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      display: none;
    }

    &:hover {
      .popover {
        display: block;
      }
    }
  }
`


export const SubmitButton = styled.button`
background-color: #007bff; /* Button background color */
color: #fff; /* Text color */
padding: 10px 20px; /* Padding around the button text */
border: none; /* Remove button border */
border-radius: 4px; /* Rounded corners */
cursor: pointer; /* Show a pointer cursor on hover */
font-size: 16px; /* Font size */


/* Hover state */
&:hover {
  background-color: #0056b3; /* Change background color on hover */
}

 
`;

