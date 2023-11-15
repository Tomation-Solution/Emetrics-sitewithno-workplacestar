import styled from 'styled-components';


export const MainNav =styled.nav`
    box-shadow: 0px 4px 4px rgba(20, 166, 229, 0.048);
    position: relative;
    z-index: 10;
`
export const NavContainer=styled.div`
// background-color:red;
padding: .8rem 1rem;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
max-width: 1400px; /* cahnges this */
margin: 0 auto;
svg{
    font-weight: 100;
    color: ${({theme})=>theme.text.normalText};
    cursor: pointer;
}

@media screen and (min-width: 1200px){
    
    padding: .8rem 3rem;
    svg{
        display: none;
    }
}
`
type NavSecondPartProp={
    showMobileLink?:boolean;
}
export const NavSecondPart =styled.div<NavSecondPartProp>`
 position:fixed;
/* border: 1px solid yellow;  */

height: 100vh;
width: 60%;
top: 0;
right: 0;
padding: 1rem;
background-color: ${props=>props.theme.background};
transition: all .4s ease-in-out;
${
  (prop)=>{
    if(prop.showMobileLink){
      return `
    box-shadow: 0px 4px 4px rgba(20, 166, 229, 0.096);
      transform: translateX(0); `
    }else{
      return 'transform: translateX(100%);'
    }
  }
}
svg{
    display: block;
    margin-left: auto;
}

@media screen and (min-width: 1200px) {
    /* border:1px solid red; */
    padding:0;
    transform: translateX(0);
    position:static;
    width: 80%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    svg{
        display:none
    }
}

`
export const NavLogoContainer=styled.div`
cursor: pointer;
`



export const NavLinksContainer=styled.ul`
    
    
    li{
        padding: .8rem 0;
        position: relative;

    }
    img{
        pointer-events: none;
    }
    a{
        color: ${({theme})=>theme.text.lightText};
        &:hover{
            color: ${({theme})=>theme.main_color};
        }
        &.active{
            color: ${({theme})=>theme.main_color} !important;
        }
        
    }


    @media screen and (min-width: 1200px){
        display: flex;
        justify-content: space-between;
        width: 60%;
       
    }

    @media screen and (min-width: 1200px){
        width: 640px;
       
    }

`
export const NavBtnContainer=styled.div`

    margin-top: 1rem;
    color: ${({theme})=>theme.text.lightText};

    li{
        padding: 2rem 0;
    }
    @media screen and (min-width: 1200px){
        display: flex;
        justify-content: space-between;
        align-items: center;
       
        width: 35%;
    margin-top: unset;

        li{
            padding: 0 .2rem;
            width: 30%;
        }
        // button{
        //     width: 65%;
        // }
    }

    @media screen and (min-width: 1200px){
        width: 250px;
        li{
            padding: 0 .2rem;
            width: 30%;
        }
        button{
            width: 60%;
        }
    }
`
