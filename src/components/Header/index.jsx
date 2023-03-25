import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {Container, Categories, Cart} from '../'
import { HeaderContext } from '../../context'
import styled from 'styled-components'
import logoImg from '../../assets/shared/desktop/logo.svg'
import cartImg from '../../assets/shared/desktop/icon-cart.svg'
import FlexWrapper from '../Flex'


const Header = (props) => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const [activeCart, setActiveCart] = useState(false)
  const {overlay, changeOverlay} = useContext(HeaderContext)


  const onClickBurgerButton = () => {
    setActiveMobileMenu(!activeMobileMenu)
  }

  const onClickCartButtonHandle = () => {
    changeOverlay()
  }

  return (
    <>
      <HeaderStyled {...props} activeCart={overlay}>
        <Container>
          <FlexWrapper
            className={`wrapper ${props.bottomLine ? 'bottomLine' : ''}`}
          >
            <FlexWrapper className='header-left'>
              <button onClick={onClickBurgerButton} className='burger'>
                <span></span>
              </button>
              <div className='logo'>
                <Link to='/'>
                  <img src={logoImg} alt='audiophile logo' />
                </Link>
              </div>
            </FlexWrapper>
            <nav className='nav'>
              <ul className='links_list'>
                <li>
                  <Link to='/' className='link'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/category/headphones' className='link'>
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link to='/category/speakers' className='link'>
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link to='/category/earphones' className='link'>
                    Earphones
                  </Link>
                </li>
              </ul>
            </nav>
            <a onClick={onClickCartButtonHandle}>
              <img alt='cart' src={cartImg} />
            </a>
          </FlexWrapper>
        </Container>
      </HeaderStyled>
      <NavMobile className={`nav-mobile ${activeMobileMenu ? 'active' : ''}`}>
        <Categories></Categories>
      </NavMobile>
      <Cart activeCart={overlay}/>
    </>
  )
}

const HeaderStyled = styled.header`
  background-color: ${(props) =>
    props.type == 'home' && !props.activeCart ? '' : props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  position: ${(props) => (props.type == 'home' ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all .2s ease-in;

  .wrapper {
    position: relative;
    padding: 2rem 0 2.25rem;
  }

  .bottomLine::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.white};
    opacity: 0.2;
  }

  .burger {
    position: relative;
    width: 20px;
    height: 16px;
    display: none;

    &::before,
    &::after,
    span {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.colors.white};
    }

    &::before {
      top: 0;
    }

    span {
      top: 50%;
      transform: translateY(-50%);
    }

    &::after {
      bottom: 0;
      /* transform: translateY(-50%); */
    }
  }

  .nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .links_list {
    display: flex;
    gap: 2.125rem;
  }
  /* else in globals */

  @media (max-width: 800px) {
    .nav {
      position: relative;
      transform: translate(0, 0);
      top: 0;
      left: 0;
    }
  }

  @media ${(props) => props.theme.media.tablet} {

    .wrapper {
      padding: 2rem 0;
    }
    .nav {
      display: none;
    }
    .burger {
      display: block;
      margin-right: 2.625rem;
    }
  }

  @media ${(props) => props.theme.media.mobile} {
    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const NavMobile = styled.div`
  position: absolute;
  top: -1300px;
  left: 0;
  width: 100%;
  z-index: 20;
  background: ${props => props.theme.colors.white};
  display: none;
  transition: top .3s ease-in;

  & > section{
    margin-bottom: 67px;
    margin-top: 108px;
  }

  @media ${props => props.theme.media.tablet} {
    display: block;

    top: -1300px;

    &.active{
      top: 90px;
    }
  }
`

export default Header
