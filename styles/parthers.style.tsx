import styled from 'styled-components';





export const ParthersHeroContainer = styled.div`
padding: 1rem .7rem;
height: 120vh;
/* border: 1px solid red; */
max-width: 500px;
margin:  0 auto;

@media screen and (min-width: 800px){
height: 90vh;
max-width: 1100px;
display: flex;
height: unset;
margin-top:70px;
/* align-items: center; */
justify-content: space-between;

&>div:nth-child(1){
    width:60%;
}
&>div:nth-child(2){
    width:40%;

}
}
`

export const ParthersHeroContentContainer = styled.div`
color: ${props=>props.theme.text.normalText};
text-align: left;
h2{
    font-size: 2rem;
}

@media screen and (min-width: 400px) {
    text-align: center;
}
@media screen and (min-width: 800px) {
    text-align: left;
}
`
export const ParthersHeroImgContainer = styled.div`
margin-top:50px; 
position: relative;
/* border: 1px solid red; */
img{
    position: absolute;
}
img:nth-child(1){
    transform: translateY(-50px) translateX(120px);
}

@media screen and (min-width: 800px) {
    margin-top:unset; 

    img:nth-child(1){
    transform: translateY(-50px) translateX(190px);
    }
    img:nth-child(2){
    transform:  translateX(70px);
    }
}

`


export const ParthersFormContainer = styled.div`
padding: 1rem .7rem;
max-width: 500px;
margin:  0 auto;
h3{
    padding: .8rem 0;
}

button{
    width: 50%;
    margin: 0 auto;
}

span{
    color:${props=>props.theme.main_color};
}
`