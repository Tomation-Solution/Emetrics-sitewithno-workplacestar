import styled from 'styled-components';

import { ButtonProp } from './Button';
import { createExternalStyle } from '../../utils/extraFunction';
import { motion } from 'framer-motion';
export const ButtonStyle = styled(motion.button)<ButtonProp>`
  
  box-shadow: 0px 4px 4px rgba(20, 167, 229, 0.3);
border-radius: 10px;

 border: transparent;
 padding: .7rem 1rem;
border-radius: 5px;
cursor: pointer;
/* this code makes the icon if there is one to fit with the button word */
display: flex;
align-items: center;
justify-content: space-between;
justify-content: center;
width: 100%;
${(prop)=>{
    let style;
    if(prop.styleType==='pry'){
      style = `background-color:${prop.theme.main_color};color: whitesmoke;font-weight: 600;padding: 1rem 1rem;`
    }else{
      style = `background-color:white;color:${prop.theme.main_color};font-weight: 600;border:1px solid  ${prop.theme.main_color};`
    }
    return style
  }};
  ${(props)=>createExternalStyle(props)}
  
  `