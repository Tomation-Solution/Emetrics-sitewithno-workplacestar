import styled from 'styled-components';


// background-color: rgba(20, 167, 229, 0.1);
export const SubscribeCover = styled.div`

padding: 3rem 2rem;
text-align: center;
background-color: rgba(20, 167, 229, 0.1);
max-width: 1000px;

@media screen and (min-width: 800px){
    border-radius: 10px;
    margin: 0 auto;
}

`
export const SubscribeToBlogContainer = styled.div`
max-width: 500px;
margin:  0 auto;
p{
    color: #3A3A3A;
    padding: 1rem 0;
}
@media screen and (min-width: 700px){
   h2{
    font-size: 2.4rem;
   }
}
`