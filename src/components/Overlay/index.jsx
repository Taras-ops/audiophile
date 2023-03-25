import React, {useContext} from 'react'
import styled from 'styled-components'
import { HeaderContext } from '../../context'

const Overlay = () => {
  const {changeOverlay} = useContext(HeaderContext)
  const onClickOverlay = () => {
    changeOverlay()
  }

  return (
    <OverlayStyled onClick={onClickOverlay}/>
  )
}

const OverlayStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.overlay};
    z-index: 20;
    opacity: .6;
    transition: all .2s ease-in;
`

export default Overlay