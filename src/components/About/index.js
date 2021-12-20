// Write your code here

import {
  AboutImg,
  AboutBigImg,
  AboutCard,
  AboutImgCard,
} from './styledComponents'

import Header from '../Header'

const About = () => (
  <AboutCard>
    <Header />
    <AboutImgCard>
      <AboutImg
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />

      <AboutBigImg
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </AboutImgCard>
  </AboutCard>
)

export default About
