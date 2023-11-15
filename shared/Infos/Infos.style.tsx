import styled from 'styled-components';



export const MainInfoContainer = styled.div`
background-color: #e7f6fc;
padding: 2rem 0;
`
export const InfoBox = styled.div`
padding:1.5rem 1rem;
max-width: 400px;
h2{
    color: #415373;
    padding: .8rem 0;
}
p{
    color: ${({theme})=>theme.text.normalText};
}
`
// #e7f6fc

export const InfoFlexContainer= styled.div`
width: 100%;
/* border: 1px solid red; */
    @media screen and (min-width: 800px){
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        max-width: 1100px;
        margin: 0 auto;
    }
`