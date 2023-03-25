import React from 'react'
import { Categories, Container, Flex, Header, ZX9SpeakerOffer, ZX7SpeakerOffer, YX1EarphonesOffer, FooterAbout, Footer } from '../../components'
import Button from '../../components/Button'
import styled from 'styled-components'

import ImageHeroDesktop from '../../assets/home/desktop/image-hero.jpg'
import ImageHeroTablet from '../../assets/home/tablet/image-header.jpg'
import ImageHeroMobile from '../../assets/home/mobile/image-header.jpg'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
        <Helmet>
            <title>audiophile - Homepage</title>
            <meta name='description' content='audiophile homepage' />
        </Helmet>
        <Header type="home" bottomLine/>
        <MainStyled className="main">
            <Container>
                <div className="content">
                    <p className="overline">NEW PRODUCT</p>
                    <h1>XX99 Mark II
                    Headphones</h1>
                    <p className='text'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button>See Product</Button>
                </div>
            </Container>
        </MainStyled>

        <Categories />
        <ZX9SpeakerOffer />
        <ZX7SpeakerOffer />
        <YX1EarphonesOffer />
        <FooterAbout />
        <Footer />
    </>
  )
}

const MainStyled = styled.main`
    padding: 225px 0 158px;
    position: relative;
    background-image: url(${ImageHeroDesktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: ${props => props.theme.colors.white};

    @media ${props => props.theme.media.tablet} {
        background-image: url(${ImageHeroTablet});

        .content{
            margin: 0 auto;
            text-align: center;
        }
    }

    @media ${props => props.theme.media.mobile} {
        background-image: url(${ImageHeroMobile});
    }

    .content{
        max-width: 400px;
    }

    .overline{
        opacity: 0.5;
        margin-bottom: 1.5rem;
    }

    h1{
        margin-bottom: 1.5rem;
    }

    .text{
        opacity: .75;
        margin-bottom: 2.5rem;
    }

    
`

export default Home