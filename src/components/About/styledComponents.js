// Style your elements here

import styled from 'styled-components'

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`
export const AboutImgCard = styled(AboutCard)`
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const AboutImg = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`
export const AboutBigImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
