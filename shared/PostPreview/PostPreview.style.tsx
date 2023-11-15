import styled from 'styled-components';
type PostPreviewImageContainerProp={
    variant:'var1'|'var2'
}

export const PostPreviewContainer= styled.div<PostPreviewImageContainerProp>`
/* padding: 1rem .9rem; */
margin: 1rem 0;



@media screen  and (min-width: 400px){
    max-width: 400px;
    margin: 0 auto;

}

@media screen  and (min-width: 800px){
    display: flex;
    max-width: 900px;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${props=>props.variant=='var1'?'row':'row-reverse'};
    margin: 60px auto;

    
}
`
export const PostPreviewContentContainer= styled.div`
    text-align: center;
    padding: 0 .6rem;

    h2{
        color: #072563;
    }
    p{
        padding: .8rem 0;
        font-size: .9rem;
    }

    button{
        width: 40%;
        margin: 0 auto;
    }

    @media screen  and (min-width: 800px){
        width: 50%;
        text-align: left;
        button{
            margin: unset;
        }
    }
`

export const PostPreviewImageContainer= styled.div<PostPreviewImageContainerProp>`
    
    position: relative;
    background-color: rgba(20, 167, 229, 0.1);
    width: 300px;
    height: 280px;
    border-radius: 10px;

    @media screen  and (min-width: 800px){
        height: 320px;
        width: 42%;
    }

${(props)=>{
    if(props.variant=='var1'){
      return `
        
      margin-left:10px;
    img{
        transform: translateY(40px) translateX(50px);
    }
    `
    }

    return `
    margin-left:40px;
    
    img{
        transform: translateY(40px) translateX(-40px);
    }
`



  }}
    img{
        display: block;
        width:100%;
        height: 320px;
        border-radius:20px;
        object-fit:fill;
    }
    @media screen  and (min-width: 800px){
        ${(props)=>{
    if(props.variant=='var1'){
      return `
        
      margin-left:unset;
    img{
        transform: translateY(25px) translateX(50px);
    }
    `
    }

    return `
    margin-left:unset;
    
    img{
        transform: translateY(25px) translateX(-40px);
    }
`



  }}
    }
    
`