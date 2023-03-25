import React from 'react'
import styled from 'styled-components'

const Container = ({children, className}) => {
  return (
    <ContainerStyled className={className}>{children}</ContainerStyled>
  )
}

const ContainerStyled = styled.div`
    max-width: 74.375rem;
    padding: 0 40px;
    margin: 0 auto;

    @media ${props => props.theme.media.mobile} {
      padding: 0 24px;
    }
`

export default Container