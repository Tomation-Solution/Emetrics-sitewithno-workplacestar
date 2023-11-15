import styled from 'styled-components';


export const  OurPatherIntroContainer = styled.div`
padding: 1rem;

margin:  0 auto;

h2{
    color: ${props=>props.theme.text.thickText};
    padding: 1rem 0;
}
p{
    color: ${props=>props.theme.text.normalText};
    font-size: .9rem;
}

a{
    cursor: pointer;
    color:#14A7E5;
    margin-right:10px;
}

@media screen and (min-width: 800px) {
max-width: 1100px;
align-items: center;
justify-content: space-between;
display: flex;
/* width: 1000px; */
/* margin: unset; */
}
`


export const  OurPatherIntroPane = styled.div`
width: 80%;
padding: .8rem;
box-shadow: 0px 4px 4px 1px rgba(20, 167, 229, 0.15);
border-radius: 10px;
margin: 0 auto;
text-align: center;

.handShake{
    width: 30%;
    margin: 0 auto;
    display: block;
}

.arrow{
    width: 5%;
}

@media screen and (min-width: 800px){
    width: 30%;
    margin: unset;
    text-align: left;
    .handShake{
        margin: unset;
    }
}
`

export const  OurPatherDetailPane = styled.div`

button{
    width: 40%;
    margin-top: 1rem;
    /* margin: 1rem auto; */
}

@media screen and (min-width: 800px){
    width: 60%;
}
`