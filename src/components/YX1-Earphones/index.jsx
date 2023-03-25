import React from 'react'

import styled from 'styled-components'
import {Flex, Container, Button} from '../'

import EarphonesImage from '../../assets/home/desktop/image-earphones-yx1.jpg'

const YX1EarphonesOffer = () => {
  return (
    <SectionStyled>
        <Container>
            <div className="wrapper">
              <div className="img-box"></div>
              <div className="content">
                <h4>YX1 EARPHONES</h4>
                <Button to="/product/yx1-earphones" type="outlined">See Product</Button>
              </div>
            </div>
        </Container>
    </SectionStyled>
    
  )
}


const SectionStyled = styled.section`
  margin-bottom: 12.5rem;

  .wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 320px;
    gap: 30px;
  }

  .img-box{
    height: 320px;
    background: url(${EarphonesImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: .5rem;
    width: 100%;
  }

  .content{
    width: 100%;
    background-color: ${props => props.theme.colors.gray};
    height: 320px;
    border-radius: .5rem;
    display: flex;
    padding-left: 17%;
    flex-direction: column;
    justify-content: center;

    a{
      width: fit-content;
    }
  }
  h4{
    margin-bottom: 2rem;
  }
`

export default YX1EarphonesOffer