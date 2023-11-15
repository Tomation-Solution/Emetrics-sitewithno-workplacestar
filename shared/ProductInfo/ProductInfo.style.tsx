import styled from 'styled-components';


type Prop = {variant:'var1' | 'var2'
removeColor?:boolean
}
export const ProductInfoMainContainer = styled.div<Prop>`
.ProductInfoMainContainer{
    display: none;
}
    @media screen  and (min-width: 800px){
        
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        max-width: 1200px;
        /* border: 1px solid red; */
        max-width: 1000px;
      margin: 0 auto;
        ${(props)=>{
    if(props.variant=='var2'){
      return 'flex-direction: row-reverse;'
    }
  }}
    }

`
export const ProductInfoCover =styled.div<Prop>`
        padding: 1rem 1.5rem;
        /* overflow-y: hidden; */
.rounded_transparent_svg{
    display: none;
}
     ${(props)=>{
    if(props.variant=='var2'){
      return    `
      background-color: rgba(20, 167, 229, 0.1);
      

      position: relative;
        .rounded_transparent_svg{
    display: block;
    position: absolute;
    top:-150px;
    right:-60px;
}
      `
    }
  }}


  ${props=>{
    if(props.removeColor){
      return 'background-color: white;'
    }
  }}
    
`
export const ProductInfoImageContainer = styled.div`
width: 50%;
img{
    width: 100%;
    height: 100%;
}
@media screen  and (min-width: 500px){
    margin: 0 auto;
       width: 30%;
    }
    @media screen  and (min-width: 800px){
    margin: unset;
    width: 30%;

    }
`
export const ProductInfoContentContainer = styled.div`

    h2{
        font-weight: 400;
        color: ${({theme})=>theme.text.thickText};
        padding: 1rem 0;
    }
    p{
        color: ${({theme})=>theme.text.normalText};

    }

    button{
        width: 40%;
    }
    @media screen  and (min-width: 500px){
        text-align: center;
        button{
            margin: 0 auto;
        }
    }

    @media screen  and (min-width: 800px){
        text-align: left;
        width: 60%;
        align-self: center;
        button{
            margin: unset;
            width: 25%;
        }
        h2{
            font-size: 2rem;
        }
    }
`