// Write your code here

import {
  NotFoundCard,
  NotFoundImg,
  NotFoundImgCard,
  NotFoundHead,
  NotFoundPara,
} from './styledComponents'

import Header from '../Header'

const NotFound = () => (
  <NotFoundCard>
    <Header />
    <NotFoundImgCard>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <NotFoundHead>Lost Your Way?</NotFoundHead>
      <NotFoundPara as="p">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </NotFoundPara>
    </NotFoundImgCard>
  </NotFoundCard>
)

export default NotFound
