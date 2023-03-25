import React from 'react'

import styled from 'styled-components'

import CircleImage from '../../assets/home/desktop/pattern-circles.svg';
import SpeakerImage from '../../assets/home/desktop/image-speaker-zx9.png'
import {Button, Container, Flex} from '../';

const ZX9SpeakerOffer = () => {
  return (
    <ZX9SpeakerOfferStyled>
        <Container>
            <Flex className="wrapper">
                <div className="img-wrapper">
                    <img src={SpeakerImage}/>
                </div>
                <div className="content">
                    <h1>ZX9
                    SPEAKER</h1>
                    <p className='text'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Button to={'/product/zx9-speaker'} color="black">See Product</Button>
                </div>
            </Flex>
        </Container>
    </ZX9SpeakerOfferStyled>
  )
}


const ZX9SpeakerOfferStyled = styled.section`
    margin-bottom: 48px;

    .wrapper{
        padding: 96px 95px 0 125px; 
        background-color: ${props => props.theme.colors.primary};
        border-radius: .5rem;
        display: flex;
        align-items: flex-start;
        overflow: hidden;
        background-image: url(${CircleImage});
        background-repeat: no-repeat;
        background-position: -150px -37px;
        color: ${props => props.theme.colors.white};
    }

    .img-wrapper{
        max-width: 400px;
        position: relative;
        top: 20px;
        margin-right: 40px;

        img{
            width: 100%;
        }
    }

    h1{
        margin-bottom: 1.5rem;
    }

    .text{
        opacity: .75;
        line-height: '167%';
        font-weight: 500;
        margin-bottom: 2.5rem;
    }

    .content{
        max-width: 350px;
        position: relative;
        top: 50px;
    }

    @media(max-width: 900px) {
        .wrapper{
            padding: 40px 60px 60px 70px;   
        }

        .img-wrapper{
            top: 80px;
        }
    }

    @media ${(props) => props.theme.media.tablet} {
        .wrapper{
            padding: 52px 20px 64px;
            flex-direction: column;
            text-align: center;
            align-items: center;

            background-position: bottom center;
        }

        .img-wrapper{
            top: 0;
            max-width: 200px;
            margin-right: 0;
            margin-bottom: 4rem;
        }

        .content{
            top: 0;
        }
    }
`

export default ZX9SpeakerOffer