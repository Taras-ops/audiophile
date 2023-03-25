import React, {useState, useEffect} from 'react'
import { Categories, Container, Footer, FooterAbout, Header, ProductView, SnipperLoader } from '../../components'
import { useParams, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const Product = () => {
  const {slug} = useParams()
  const {data, loading} = useSelector(state => state.product)
  const navigate = useNavigate()
  
  const currentProduct = data.filter((item => item.attributes.slug === slug))[0]
  
  const onClickGoBackHandle = () => {
    navigate(-1)
  }

  return (
    <>
        <Helmet>
          <title>audiophile - product:</title>
        </Helmet>
        {loading ? <>
          <SnipperLoader />
        </> : <> <Helmet>
          <title>audiophile - product: ${currentProduct.attributes.name}</title>
        </Helmet> <Header />
        <ProductViewSection>
            <Container className="link-wrapper">
               <a onClick={onClickGoBackHandle} className="link">Go Back</a>
            </Container>
        </ProductViewSection>
        <ProductView productPage data={currentProduct}/>
        <Categories/>
        <FooterAbout />
        <Footer /></>}
    </>
  )
}


const ProductViewSection = styled.section`
  padding: 5rem 0 0;

  .link-wrapper{
    margin-bottom: 56px;
  }

  .link{
    opacity: 0.5;
    text-transform: capitalize;
    display: block;
    font-weight: 500;
  }
`

export default Product