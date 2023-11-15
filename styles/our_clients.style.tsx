import styled from 'styled-components';




export const OurClientsContainer = styled.div`
    padding: 1rem .8rem;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 12px;


    img{
        width: 100%;
        height: 100%;
    }

    @media screen  and (min-width: 500px){
    grid-template-columns: repeat(2,1fr);
        
    }
    @media screen  and (min-width: 800px){
    grid-template-columns: repeat(3,1fr);
    max-width: 800px;
    margin: 0 auto;
        
    }
`
