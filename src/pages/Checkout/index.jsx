import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useForm} from 'react-hook-form'
import { Footer, Header, Container, Button } from '../../components'

const Checkout = () => {
    const {products} = useSelector(state => state.cart)

  return (
    <>
        <Header />
        <Section>
            <Container>
                <a className='go-back-link'>Go Back</a>
            </Container>
        </Section>
        <Footer />
    </>
  )
}


const Section = styled.section`
    min-height: 100vh;
`

export default Checkout