import styled from 'styled-components';



export const TeamContainer = styled.div`
padding: 1rem 1rem;


@media screen  and (min-width: 800px){
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 2rem auto;
}

`
export const Team = styled.div`
/* border: 1px solid red; */
color:#000000cf;
font-size: 1rem;
text-align: center;

`
export const TeamImgContainer = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border: 2px solid ${props=>props.theme.main_color};
    border-radius: 50%;
img{
    width: 100%;
    height: 100%;
    border-radius:50%;
}
`

export const TeamSocials= styled.div`
padding: 1rem 0;
svg{
    color: #000000cf;
    cursor: pointer;
    &:hover{
        color: ${props=>props.theme.main_color};

    }
}
`