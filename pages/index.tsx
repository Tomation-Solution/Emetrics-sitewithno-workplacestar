import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import Footer from '../shared/Footer/Footer'
import HeroSection from '../shared/HeroSection/HeroSection'
import Info from '../shared/Infos/Infos'
import ListProductInfo from '../shared/ListProductInfo/ListProductInfo'
import OtherBenefits from '../shared/OtherBenefis/OtherBenefits'
import OurPatherIntro from '../shared/ourPatherIntro/ourPatherIntro'
const Home: NextPage = () => {
  return (
    <GeneralLayout>
      

      <br />
      <HeroSection/>
      <br />
      <Info/>
      <br />
      <ListProductInfo/>
      <br />
      <OtherBenefits/>
      <br />
      <OurPatherIntro/>
      <br />
    </GeneralLayout>
  )
}

export default Home
