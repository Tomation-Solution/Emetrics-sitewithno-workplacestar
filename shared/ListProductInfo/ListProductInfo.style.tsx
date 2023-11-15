import styled from 'styled-components';



export const ListProductInfoContainter = styled.div`
    /*  */
    overflow: hidden;
    padding: 1rem 0;
    /* border: 1px solid red; */
    h3{
        color: ${({theme})=>theme.text.thickText};
    }
    p{
        color: ${({theme})=>theme.text.normalText};
    }

    &>div:nth-child(1){
    max-width: 1000px;
    margin: 0 auto;
    /* border: 1px solid red; */
    }
`