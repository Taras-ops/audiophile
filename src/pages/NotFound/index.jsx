import React from 'react'
import styled from 'styled-components'
import { Container, Footer, Header } from '../../components'
import { Helmet } from 'react-helmet-async'

import NotFoundImage from '../../assets/notFound/undraw_page_not_found_re_e9o6.svg'

const NotFound = () => {
  return (
    <>
        <Helmet>
            <title>audiophile - NotFound</title>
        </Helmet>
        <Header />
        <Section>
            <Container>
                <div className="img-wrapper">
                    <img src={NotFoundImage} alt="not Found illustration"/>
                </div>
                <h2>Opps! You seem to be lost.</h2>
            </Container>
        </Section>
        <Footer />
    </>
  )
}

const Section = styled.section`
    padding: 7rem 0;
    text-align: center;

    .img-wrapper{
        max-width: 600px;
        margin: 0 auto 40px;

        img{
            width: 100%;
        }
    }

    h2{
        color: ${props => props.theme.colors.primary};
    }
`

export default NotFound