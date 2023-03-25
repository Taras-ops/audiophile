import React from 'react'
import {ClipLoader} from 'react-spinners'
import styled from 'styled-components'
import theme from '../../styles/theme'

const SnipperLoader = () => {
  return (
    <SnipperLoaderStyling>
        <ClipLoader size="70" color={theme.colors.primary}/>
    </SnipperLoaderStyling>
  )
}


const SnipperLoaderStyling = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.overlay};
`

export default SnipperLoader