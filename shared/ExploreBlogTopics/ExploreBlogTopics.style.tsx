import styled from 'styled-components';



export const ExploreBlogTopicsContainer = styled.div`   

    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    h2{
        font-size: 1rem;
    }
    p{
        font-size: .9rem;
    }
    @media screen  and (min-width:800px){
        h2{
        font-size: 1.8rem;
    }
    }
`
export const ExploreTopics = styled.div`

    background-color: #dff3fb;
    padding:.9rem;
    text-align: left;
    max-width: 300px;
    border-radius: 5px;
    margin: 20px auto;
    position: relative;
    cursor: pointer;

    &::after{
        content: "";
        position: absolute;
        background-color: #072563;
        width: 2%;
        height: 100%;
        top: 0;
        left: 0;
        
    }



@media screen  and (min-width:800px){
    max-width: unset ;
    width: 100%;
    margin: unset;

}
`

export const ExploreTopicsContainer = styled.div`
    /* border: 1px solid red; */
    padding: 1rem;
    @media screen  and (min-width:800px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 30px;
    }
`