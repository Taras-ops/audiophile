import React from 'react'
import styled from 'styled-components'
import Container from '../Container'

const About = () => {
  return (
    <SectionStyled>
        <Container>
            <div className="wrapper">
                <div className="content">
                    <h2>Bringing you the <span>best</span> audio gear</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </div>
        </Container>
    </SectionStyled>
  )
}


const SectionStyled = styled.section`
    
`

export default About