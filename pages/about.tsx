import { NextPage } from 'next';
import DetailLayout from '../layout/DetailLayout/DetailLayout';
import ProductInfo from '../shared/ProductInfo/ProductInfo';
import hr_image from '../assets/hr_image.jpeg'
import Rectangle55 from '../assets/Rectangle 55.png'
import Rectangle56 from '../assets/Rectangle 56.png'


const About:NextPage =()=>{

  return (
    <DetailLayout
      heading='About us'
      body=''
    >

      <br />
      <br />

      <div style={{'overflow':'hidden'}}>
        <ProductInfo
          heading='We Are Increasing Business Success With Technology'
          body={`
        Enterprise Metric Suite Solutions LLC is a global business process and performance management solution provider with its international headquarters in DallasTexas, USA. Enterprise Metric Suite Solutions LLC has spread across various countries of the world. As a duly registered organization in the United States of America, we are poised to partner with you towards transforming your business with the joint expertise of the team.
        `}
          image={hr_image.src}
        />

        <br />
        <ProductInfo
          heading=''
          body={`
        In its expansion bid, Enterprise Metric Suite
        Solutions LLC acquired SPNS Consulting, a
        Nigeria based consulting firm with strength in
        business process management, performance
        management and enterprise transformation.
        We are poised to partner with you towards
        transforming your business with the joint
        expertise of the team.
        `}
          image={hr_image.src}
          variant='var2'
          removeColor={true}
        />
      </div>
    </DetailLayout>
  )
}

export default About