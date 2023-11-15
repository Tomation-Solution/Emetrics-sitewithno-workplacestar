import { NextPage } from 'next';
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout';
import ProductInfo from '../../shared/ProductInfo/ProductInfo';
import hr_image from '../../assets/hr_image.jpeg'
import {solutiondata} from '../../productsData';
import { useRouter } from 'next/router';

// type DataType = 
const Solutions:NextPage = ()=>{
  const route = useRouter();
  const { id } = route.query
  const data:any= solutiondata.filter((item)=> item.id == id)
  console.log(data)
  return (
    <GeneralLayout>

      {
        data.length==1?
          <ProductInfo
            heading={data[0].heading}
            body={data[0].body}
            image={data[0].image}
          />
          :
          <p>invalid entry</p>
      }
      
    </GeneralLayout>
  )
}

export default Solutions