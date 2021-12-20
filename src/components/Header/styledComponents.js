// Style your elements here

import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const WebsiteLogo = styled.img`
  height: 40px;
  width: 40px;
`

export const ModalContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-right: 100px;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  border: none;
  align-self: flex-end;

  background-color: transparent;
`

export const PopupUnListCon = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-left: 0px;
  align-self: center;
`
export const PopupListCard = styled.li`
  list-style-type: none;
`

export const PopupHomePara = styled.p`
  font-size: 40px;
  font-weight: 600;
  font-family: 'Roboto';
  color: black;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`
export const PopupAboutPara = styled(PopupHomePara)``
