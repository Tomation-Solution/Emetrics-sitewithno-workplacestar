import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'

import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';


const Scan:NextPage =()=>{

  return (

    <GeneralLayout>
      <div style={{'width':'300px','margin':'10px auto'}}>
        <QRCode
        // size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={'https://drive.google.com/file/d/1n8kiXsLucsueGyXCO6lvKjZFNMsISi5h/view'}
          viewBox={'0 0 256 256'}
        />
      </div>
    </GeneralLayout>

  )
}

export default Scan