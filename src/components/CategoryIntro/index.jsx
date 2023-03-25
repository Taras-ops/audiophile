import React from 'react'

import styled from 'styled-components'
import Container from '../Container'

const CategoryIntro = ({category}) => {
  return (
    <Section>
        <Container>
            <h2>{category}</h2>
        </Container>
    </Section>
  )
}

const Section = styled.section`
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    padding: 97px 0;
    text-align: center;
`

export default CategoryIntro