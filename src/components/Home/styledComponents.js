// Style your elements here

import styled from 'styled-components'

export const HomeCard = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`
export const HomeImgCard = styled(HomeCard)`
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const HomeImg = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`
export const HomeBigImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
