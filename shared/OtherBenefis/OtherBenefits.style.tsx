import styled from 'styled-components';


export const OtherBenefitsCover= styled.div`
background-color: rgba(20, 167, 229, 0.1);
overflow: hidden;
padding: 1.4rem 1rem;
position: relative;
        .rounded_transparent_svg{
    display: block;
    position: absolute;
    top:-150px;
    right:-60px;}
`
export const OtherBenefitsContainer = styled.div`

     
    /* border: 1px solid red; */
    max-width: 1100px;

    @media screen and (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
    margin: 0 auto;

    }
`
export const OtherBenefitsImageContainer = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    /* display: inline-block; */
    margin:  0 auto;
    /* border: 1px solid red; */
    img{
        position: absolute;
    }
    .photo5{
        transform: translateX(110%) translateY(110%);
    }
    .photo4{
        transform: translateX(30%) translateY(20%);
    }
    .photo3{
        transform: translateX(10%) translateY(196%);
        z-index: 10;
    }
    .photo1{
        transform: translateX(95%) translateY(310%);
    }
    .photo2{
        transform: translateX(250%) translateY(100%);
        z-index: 10;
    }
    @media screen and (min-width: 800px){
        width: 40%;
        margin: unset;
        /* border: 1px solid red; */
        transform: translateY(40px);
        .photo4{
            width: 150px;
        }
    }
`
export const OtherBenefitsContentContainer = styled.div`
        color:${({theme})=>theme.text.normalText};

.intro_content{
    h2{
        color:${({theme})=>theme.text.lightText};
        padding: 1rem 0;
    }
}
.other_content{

    h2{
        font-size: 1rem;
        padding: .8rem 0;
    }
}


@media screen and (min-width: 800px){
    .intro_content{
        /* border: 1px solid red; */
        width: 800px;
    }
        width: 50%;
    }
`