import styled from 'styled-components';
import image from '../../assets/teamImg.jpg'


export const DropdownContainer = styled.ul`
    
    background-color: white;
    position: absolute;
    padding: 1rem;
    border-radius: 10px;
    z-index: 90;
    top: 30px;
    left: 10px;
  box-shadow: 0px 4px 4px rgba(20, 166, 229, 0.11);
    display: none;

      li{
        cursor: pointer;
      }
   &.show{
        display: block;
        width: 300px;
    }
    p{
      display: none;
    }


    @media screen and (min-width: 1200px) {

      li{
        width: 400px;
      }
      &.show{
        position: fixed;
          width: 1200px;
          transform: translateX(-100px) translateY(30px);
          padding: 2rem;

          background-image:
    /* linear-gradient(to bottom, #14a6e549,black),
    url(${image.src}) */
    linear-gradient(0deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.74)), url(${image.src});
    ;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;

    display: grid;
    grid-template-columns: repeat(2,1fr);
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