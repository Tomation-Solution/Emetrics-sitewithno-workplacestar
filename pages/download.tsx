import { useEffect } from 'react'

const Download =  ()=>{

  useEffect(()=>{
    if(window !=undefined){
      window.location.href='https://drive.google.com/file/d/1f9YC4sNgZjzm_FRDmmEsyQgnneceTDN4/view'
    }
  },[])

  return (
    <div>
            
    </div>
  )
}

export default Download