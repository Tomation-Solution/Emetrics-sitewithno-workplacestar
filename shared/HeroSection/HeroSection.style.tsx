import styled from 'styled-components';


export const HeroSectionContainer =styled.div`
    padding: 1rem;
h1,p{
    color: ${(props)=>props.theme.text.thickText};
}

h1{
    font-size: 2rem;
    font-weight: 800;
    padding-bottom: .6rem;
}
button{
    width: 40%;
}

@media screen and (min-width: 800px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    &:nth-child(1){
    }
    
}
`


export const HeroSectionContentContainer =styled.div`
        @media screen and (min-width: 800px){
            width: 56% ;
            h1{
                font-size: 3rem;
            }
            button{
        width: 30%;
    }
            
        }

        @media screen and (min-width: 1000px){
            h1{
                font-size: 4rem;
            }
        }
`

export const HeroSectionImageContainer =styled.div`
    position: relative;
    /* display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 30px;
   */
    height: 45vh;
    /* border: 1px solid red; */
    width: 330px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
    transition: all .4s ease-in-out !important;

    }
    .hero_main_img{
        width: 150px;
    }
    .container-img{
        background-color: #F5F5F5;
        width: 70px;
        height: 70px;
        padding: .7rem;
        border-radius: 50%;
        img{
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }
    .img_1{
        top: 30px;
        left: 35px;
        position: absolute;
        &::after{
            /* content: "";
            background-color: ${({theme})=>theme.main_color};
            width: 1px;
            height: 11px;
            transform: rotate(150deg);
            position: absolute;
            top: 46px;
            left: 70px; */
        }
    }
    .img_2{
        position: absolute;
        top: 30px;
        right: 10px;
    }
    .img_3{
        position: absolute;
        right: 0;
        bottom: 0px;
    }
    .img_4{
        position: absolute;
       left: 30px;
        bottom:30px;
    }



    @media screen and (min-width: 800px){
            width: 40% ;
            margin: unset;
    }
    @media screen and (min-width: 1000px){
            width: 40% ;
            margin: unset;
            .hero_main_img{
                width: 250px;
            }

     
    }
`