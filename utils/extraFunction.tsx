export type StyleTpe =  {
    'style'?:{
      [Key:string]:string,
    }
  }
  
export const createExternalStyle = (props:StyleTpe)=>{
  let styles =''
  if(props.style){
    const all_keys = Object.keys(props.style)
    all_keys.map((key=>{
      if(props.style){
        styles = styles+` ${key}:${props.style[key]}`
      }
      return key
        
    }))
  } 
  return styles
}


export const demo_link ='https://calendly.com/emetricsuitesolutions/demo-for-roselyn'


export const handleDemo =()=>{
  if(typeof  window  != 'undefined'){
    //
    window.location.href=demo_link
  }
}