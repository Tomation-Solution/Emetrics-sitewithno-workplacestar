import styled from 'styled-components';



export const FooterCover= styled.div`
background-color: rgba(20, 167, 229, 0.1);
padding: 1rem .8rem;
color: ${props=>props.theme.text.thickText};


`
export const FooterContainer= styled.div``
export const FooterSectionA= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
p{
    padding: .2rem 0;
    font-weight: 500;
    cursor: pointer;
    font-size: .9rem;
}

& .addresse_container{
    margin: 2rem 0;
    /* border: 1px solid red; */
    width: 40%;
}

.footer_feature_container{
    display: none;
}

.footer_pages_link{
    width: 50%;
    text-align: right;

    p{
        font-size: .9rem;
        margin: 1rem 0;
    }
}

@media screen  and (min-width: 800px){
    max-width: 1200px;
    margin: 0 auto;
    .footer_feature_container,.addresse_container{
        display: block;
        width: 33%;
    }
    .footer_pages_link{
        display: flex;
        justify-content: space-between;
        /* align-items: flex-start; */
        width: 40%;
    }

    .footer_feature_container p{
        padding: .5rem 0;
        
    }
}
`
export const FooterSectionB= styled.div`
font-size: 1rem;
text-align: center;
`