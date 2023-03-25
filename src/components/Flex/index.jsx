import React from 'react'

import styled from 'styled-components'

const FlexWrapper = (props) => {
  return (
    <FlexWrapperStyled {...props}>{props.children}</FlexWrapperStyled>
  )
}

const FlexWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.alignItems || 'center'};
`

export default FlexWrapper