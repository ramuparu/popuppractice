// Write your code here
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {
  NavContainer,
  WebsiteLogo,
  ModalContainer,
  CloseButton,
  PopupUnListCon,
  PopupListCard,
  PopupAboutPara,
  PopupHomePara,
} from './styledComponents'

import './index.css'

const Header = () => (
  <NavContainer>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <CloseButton type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu className="menu_style" />
        </CloseButton>
      }
      className="popup-content"
    >
      {close => (
        <ModalContainer>
          <CloseButton
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
            className="close_icon"
          >
            <IoMdClose />
          </CloseButton>
          <PopupUnListCon>
            <PopupListCard>
              <Link className="PopupLinkStyle" to="/" onClick={() => close()}>
                <AiFillHome className="home_icon_img" />
                <PopupHomePara>Home</PopupHomePara>
              </Link>
            </PopupListCard>

            <PopupListCard>
              <Link
                className="PopupLinkStyle"
                to="/about"
                onClick={() => close()}
              >
                <BsInfoCircleFill className="about_icon_img" />
                <PopupAboutPara>About</PopupAboutPara>
              </Link>
            </PopupListCard>
          </PopupUnListCon>
        </ModalContainer>
      )}
    </Popup>
  </NavContainer>
)

export default Header
