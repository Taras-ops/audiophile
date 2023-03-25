import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import FlexWrapper from '../Flex'

import ImageMan from '../../assets/shared/desktop/image-best-gear.jpg'
import ImageManTablet from '../../assets/shared/tablet/image-best-gear.jpg'
import ImageManMobile from '../../assets/shared/mobile/image-best-gear.jpg'

import theme from '../../styles/theme'

const FooterAbout = () => {
  return (
    <Section>
        <Container>
            <Wrapper className="wrapper">
                <div className="content">
                    <h2>Bringing you the <span>best</span> audio gear</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="image-wrapper">
                    <picture>
                        <source srcset={ImageManMobile} type='image/jpeg' media={theme.media.mobile}/>
                        <source srcset={ImageManTablet} type="image/jpeg" media={theme.media.tablet} />
                        <img src={ImageMan}/>
                    </picture>
                </div>
            </Wrapper>
        </Container>
    </Section>
  )
}

const Section = styled.section`
    margin-bottom: 10rem;

    .image-wrapper{
        flex-basis: 48.65%;

        img{
            width: 100%;
        }
    }


    h2{
        margin-bottom: 2rem;

        span{
            color: ${props => props.theme.colors.primary};
        }
    } 

    .content{
        flex-basis: 40%;
        margin-right: 30px;

        p{
            opacity: 0.5;
        }
    }

    @media ${props => props.theme.media.tablet} {
        .wrapper{
            flex-direction: column;
        }

        .image-wrapper{
            order: -1;
            margin-bottom: 63px;
        }

        .content{
            margin-right: 0;
            text-align: center;
            width: 83.16%;
        }
    }

    @media ${props => props.theme.media.mobile} {
        .image-wrapper{
            margin-bottom: 40px;
        }

        .content{
            width: 100%;
        }
    }
`

const Wrapper = styled(FlexWrapper)`
    
`

export default FooterAbout