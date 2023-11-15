import styled from 'styled-components';



export const DetailLayoutContainerImg= styled.div<{image:string}>`
/* display: none; */
display: block;
height: 70vh;
/* width: 100vw; */
display: flex;
align-items: center;
justify-content: center;
h1,p{
  color: white;
}
background-image:
    linear-gradient(to bottom, #14a6e549,black),
    url(${(props)=>props.image});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;

    
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

export const DetailLayoutContentContainer= styled.div`
text-align: center;
padding: 1rem;
max-width: 500px;

@media screen and (min-width:800px) {
    font-size: 1.5rem;
}
`