// Write your code here

import {HomeImg, HomeBigImg, HomeCard, HomeImgCard} from './styledComponents'

import Header from '../Header'

const Home = () => (
  <HomeCard>
    <Header />
    <HomeImgCard>
      <HomeImg
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />

      <HomeBigImg
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </HomeImgCard>
  </HomeCard>
)

export default Home
