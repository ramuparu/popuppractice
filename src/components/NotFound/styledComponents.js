// Style your elements here

import styled from 'styled-components'

export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`
export const NotFoundImgCard = styled(NotFoundCard)`
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const NotFoundImg = styled.img`
  height: 400px;
  width: 300px;
  @media (min-width: 768px) {
    height: 450px;
    width: 400px;
  }
`
export const NotFoundHead = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 700;
  color: black;
`

export const NotFoundPara = styled(NotFoundHead)`
  font-size: 20px;
  color: gray;
`
