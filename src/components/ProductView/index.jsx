import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import remarkGfm from "remark-gfm";
import ReactMakrdown from 'react-markdown'

import {Container, Flex, Button, CountBox} from '../'
import { addToCart } from '../../redux/cartSlice'
import theme from '../../styles/theme'

const ProductView = ({ data, productPage, order }) => {
  const { id, attributes } = data
  const dispatch = useDispatch()

  const [countProduct, setCountProduct] = useState(1)

  const increaseCountButtonHandle = () => {
    setCountProduct((prev) => prev + 1)
  }

  const decreaseCountButtonHandle = () => {
    if (countProduct > 1) {
      setCountProduct((prev) => prev - 1)
    }
  }

  const shortProductName = (name) => {
    name = name.split(' ')
    name.pop()
    name = name.join('')

    return name
  }

  const onAddToCartClickHandle = () => {
    const product = {
      count: countProduct,
      name: attributes.name,
      price: attributes.price,
      imageHeroDesktopUrl: attributes.imageHeroDesktop.data.attributes.url,
      id: id,
    }

    dispatch(addToCart(product))
    localStorage.setItem('cartProducts', product)
    console.log(localStorage.getItem('cartProducts'))
  }


  return (
    <>
      <Section>
        <Container>
          <Wrapper
            order={order}
            className={!productPage ? 'productView-category' : 'productView-page'}
          >
            <div className='img-wrapper'>
              {productPage ? (
                <picture>
                  <source srcset={attributes.imageHeroMobile.data.attributes.url} 
                  type="image/jpeg" alt="" media={theme.media.mobile2}/>
                  <source srcset={attributes?.imageHeroTablet.data.attributes.url} 
                  type="image/jpeg" alt="" media={theme.media.tablet}/>
                  <img
                    src={
                      attributes.imageHeroDesktop?.data?.attributes?.url
                    }
                    alt=''
                  />
                </picture>
              ) : (
                <picture>
                  <source
                    srcSet={
                      attributes?.imageHeroTabletForCategory?.data?.attributes?.url
                    }
                    type='image/jpeg'
                    media={theme.media.tablet}
                    alt=''
                  />
                  <source
                    srcSet={
                      attributes?.imageHeroMobile?.data?.attributes?.url
                    }
                    type='image/jpeg'
                    media={theme.media.mobile}
                    alt=''
                  />
                  <img
                    src={
                      attributes?.imageHeroDesktop?.data?.attributes?.url
                    }
                    alt=''
                  />
                </picture>
              )}
            </div>
            <div className='content'>
              {attributes.new && <p className='new-product'>New Product</p>}
              <h2>{attributes.name}</h2>
              <p>{attributes.description}</p>
              {productPage ? (
                <>
                  <p className='price'>$ {attributes.price}</p>
                  <Flex className='product-cart'>
                    <CountBox
                      count={countProduct}
                      decreaseCount={decreaseCountButtonHandle}
                      increaseCount={increaseCountButtonHandle}
                    />
                    <Button onClick={onAddToCartClickHandle}>
                      Add to cart
                    </Button>
                  </Flex>
                </>
              ) : (
                <>
                  <Button to={'/product/' + attributes.slug}>
                    See Product
                  </Button>
                </>
              )}
            </div>
          </Wrapper>
          {productPage && (
            <>
              <MoreAboutProduct className='more'>
                <div className='features'>
                  <h3>Features</h3>
                  {
                    attributes.features.split('\\n').map((item, index) => <><ReactMakrdown key={index} remarkPlugins={[remarkGfm]}>
                      {item}</ReactMakrdown><br /></>)
                  }
                </div>
                <div className='includes'>
                  <h3>In the box</h3>
                  <ul>
                    {attributes?.includes.map(({ quantity, item }, index) => (
                      <li key={index} className='includes-item'>
                        <p className='includes-quantity'>{quantity}x</p>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </MoreAboutProduct>
            </>
          )}
        </Container>
      </Section>
      {productPage && attributes?.galleryDesktop?.data && (
        <Gallery>
          <Container>
            <div className='grid'>
              {attributes.galleryDesktop?.data.map((item, index) => (
                <div className={`gallery-img_${index + 1}`} key={index}>
                  <img src={item.attributes.url} />
                </div>
              ))}
            </div>
          </Container>
        </Gallery>
      )}
      {productPage && attributes.recommended_products.data[0] && (
        <RecommendedProducts>
          <Container>
            <h2>you may also like</h2>
            <Flex className='recommended_products-wrapper'>
              {attributes.recommended_products.data.map((item) => (
                <div>
                  <div className='img-wrapper'>
                    <picture>
                      {item.attributes.imageMobileWide.data && <source srcSet={item.attributes.imageMobileWide.data.attributes.url} 
                      media={theme.media.mobile} type="image/jpeg"/>}
                      <source srcSet={item.attributes.imageHeroTablet.data.attributes.url} 
                      media={theme.media.tablet} type="image/jpeg"/>
                      <img
                        src={
                          item.attributes.imageHeroDesktop.data.attributes.url
                        }
                        alt={item.attributes.name}
                      />
                    </picture>
                  </div>
                  <h5>{item.attributes.name}</h5>
                  <Button to={'/product/' + item.attributes.slug}>
                    See product
                  </Button>
                </div>
              ))}
            </Flex>
          </Container>
        </RecommendedProducts>
      )}
    </>
  )
}


const Section = styled.div`
  .product-cart {
    gap: 16px;
    justify-content: flex-start;
  }
`

const Wrapper = styled(Flex)`
  gap: 20px;


  &.productView-category .img-wrapper {
    order: ${(props) => (props.order % 2 == 0 ? 0 : 1)};
  }

  &.productView-page {
    
  }

  &.productView-category {

  }

  .price{
    font-size: 1.125rem;
    font-weight:700;
    line-height: 139%;
  }

  .img-wrapper{
      flex-basis: 48.6%;

      img{
        width: 100%;
      }
    }

  .content {
    & > p {
      margin-bottom: 2.5rem;
      opacity: 0.5;
    }
    .price{
      opacity: 1;
    }
  }

  .new-product {
    color: ${(props) => props.theme.colors.primary};
    line-height: 19px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .content{
    flex-basis: 40%;
  }

  h2 {
    margin-bottom: 2rem;
  }


  @media ${(props) => props.theme.media.tablet} {
    &.productView-page{
      .img-wrapper{
        flex-basis: 40.8%;
      }

      .content{
        flex-basis: 49.3%;
      }


      h2{
        font-size: 1.75rem;
      }
    }

    &.productView-category{
      flex-direction: column;
      gap: 3.25rem;
    }

    &.productView-category{
        .img-wrapper{
          width: 100%;
          order: 0;
        }
      }
  }

  @media ${props => props.theme.media.mobile2} {
    &.productView-page{
      flex-direction: column;
      gap: 2rem;
      text-align: left;
    }
  }

`

const MoreAboutProduct = styled(Flex)`
  margin-top: 10rem;
  gap: 25px;
  align-items: flex-start;

  p {
    opacity: 0.5;
  }

  h3 {
    margin-bottom: 2rem;
  }

  .features {
    flex-basis: 57.2%;

    p{
      white-space: pre-wrap;
    }
  }

  .includes {
    flex-basis: 31.5%;
  }

  .includes-item {
    display: flex;
    gap: 21px;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .includes-quantity {
    opacity: 1;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
  }

  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
    gap: 7.5rem;

    .includes{
      display: flex;
      max-width: 550px;
      justify-content: space-between;
      gap: 20px;
      width: 100%;
    }
  }

  @media ${props => props.theme.media.mobile2} {
    .includes{
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`

const Gallery = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.427fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem 1.875rem;
  }

  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }

  .gallery-img_3 {
    grid-row: 1/3;
    grid-column: 2;
  }

  @media ${props => props.theme.media.mobile2} {
    .grid{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 2fr;
    }

    .gallery-img_3{
      grid-row: 3;
      grid-column: 1;
    }
  }
`

const RecommendedProducts = styled.section`
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 4rem;
  }

  .img-wrapper {
    margin-bottom: 2.5rem;
  }

  h5 {
    margin-bottom: 2rem;
  }

  .recommended_products-wrapper {
    gap: 30px;
    align-items: flex-start;

    img {
      width: 100%;
      height: 318px;
    }
  }

  @media ${props => props.theme.media.tablet} {
    .recommended_products-wrapper{
      gap: 11px;
    }

    h5{
      font-size: 1rem;
    }
  }

  @media ${props => props.theme.media.mobile2} {
    .recommended_products-wrapper{
      flex-wrap: wrap;
      justify-content: space-around;

      & > div {
        width: 48%;
      }
    }
  }

  @media ${props => props.theme.media.mobile} {
    .recommended_products-wrapper{
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 3.5rem;

      & > div {
        width: 100%;
      }

      img{
        height: auto;
      }
    }

    .img-wrapper{
      margin-bottom: 2rem;
    }
  }
`

export default ProductView
