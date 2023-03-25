import React from 'react'
import styled from 'styled-components'
import Container from '../Container'

import BGImage from '../../assets/home/desktop/image-speaker-zx7.jpg'
import Button from '../Button'

const ZX7SpeakerOffer = () => {
  return (
    <SectionStyled>
        <Container>
            <div className="offer">
                <h4>ZX7 SPEAKER</h4>
                <Button to='/product/zx7-speaker' type="outlined">See Product</Button>
            </div>
        </Container>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
    margin-bottom: 3rem;

    .offer{
        padding: 101px 0 101px 95px;
        background-image: url(${BGImage});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0.5rem;
    }

    h4{
        margin-bottom: 2rem;
    }
`

export default ZX7SpeakerOffer