import React, {useContext} from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import { HeaderContext } from '../../context'
import { deleteFromCart, decreaseCountProduct, increaseCountProduct } from '../../redux/cartSlice'
import {Container, CountBox, Flex, Button} from '../'

const Cart = ({activeCart}) => {
  const dispatch = useDispatch()
  const {products, totalPrice} = useSelector(state => state.cart)
  const {changeOverlay} = useContext(HeaderContext)

  const onClickProductIncreaseCountHandle = (id) => {
    dispatch(increaseCountProduct(id))
  }

  const onClickProductDecreaseCountHandle = (id) => {
    dispatch(decreaseCountProduct(id))
  }

  const onClickRemoveProductsHandle = () => {
    dispatch(deleteFromCart())
  }

  const shortProductName = (name) => {
    name = name.split(' ')
    name.pop()
    name = name.join('')

    return name
  }

  const onClickCheckoutButton = () => {
    changeOverlay()
  }

  return (
    <CartStyled >
      <div className="overlay"></div>
      <Container className="container">
        <Box activeCart={activeCart}>
          <Flex className="cart-header">
            <h6>Cart ({products.length})</h6>
            <a onClick={onClickRemoveProductsHandle} className='remove-products'>Remove all</a>
          </Flex>
          <div className="products-wrapper">
            {
              products.length == 0 ? <>
                  <p className='basket-empty'>Your basket is empty!</p>
              </> : products?.map((item => <Flex className="product" key={item.id}>
                <div className='img-wrapper'>
                  <img src={item.imageHeroDesktopUrl}/>
                </div>
                <div className="product-about">
                  <p className='product-name'>{shortProductName(item.name)}</p>
                  <p className='price'>$ {item.price}</p>
                </div>
                <CountBox type="sm" count={item.count} id={item.id} increaseCount={onClickProductIncreaseCountHandle} decreaseCount={onClickProductDecreaseCountHandle}/>
              </Flex>))
            }
          </div>
          {products.length !== 0 && <div className="cart-bottom">
            <Flex className="total">
              <p className='total-total'>Total</p>
              <p className="total-price">$ {totalPrice}</p>
            </Flex>
            <Button to="/checkout" onClick={onClickCheckoutButton}>Checkout</Button>
          </div>}
        </Box>
      </Container>
    </CartStyled>
  )
}

const CartStyled = styled.div`
  .container{
    position: relative;
  }
`

const Box = styled.div`
  padding: 31px 33px 31px 31px;
  z-index: 50;
  position: absolute;
  top: 130px;
  right: ${props => props.activeCart ? '40px': '-1000px'};
  border-radius: 8px;
  background: ${props => props.theme.colors.white};
  min-width: 377px;
  transition: all .3s ease-in;

  .basket-empty{
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
  }

  .cart-header{
    margin-bottom: 2rem;
  }

  .remove-products{
    text-decoration: underline;
    font-weight: 500;
    opacity: 0.5;
    font-size: 0.9375rem;
    transition: color .2s ease-in, opacity .2s ease-in;

    &:hover{
      color: ${props => props.theme.colors.primary};
      opacity: 1;
    }
  }

  .product-name{
    font-size: .9375rem;
    font-weight: 700;
  }

  .product-about{
    margin-right: 20px;
  }

  .img-wrapper{
    width: 64px;
    height: 64px;
    margin-right: 1rem;

    img{
      width: inherit;
      height: 100%;
      border-radius: 8px;
    }
  }

  .cart-bottom{
    margin-top: 2rem;

    .total{
      margin-bottom: 1.5rem;
    }

    .total-total{
      font-weight: 500;
      font-size: 0.9375rem;
      text-transform: uppercase;
      opacity: 0.5;
    }

    .total-price{
      font-weight: 700;
      font-size: 1.125rem;
    }

    a{
      width: 100%;
      text-align: center;
    }
  }


  @media ${props => props.theme.media.mobile2} {
    min-width: auto;
  }
`

export default Cart