import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ArrowImage from '../../assets/shared/desktop/icon-arrow-right.svg'

const ButtonShop = ({link}) => {
  return (
    <ButtonShopStyled to={`/${link}`}>
        <p>Shop</p>
        <img src={ArrowImage} alt="arrow icon"/>
    </ButtonShopStyled>
  )
}


const ButtonShopStyled = styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    gap: 13px;

    &:hover{
        p{
            color: ${props => props.theme.colors.primary};
            opacity: 1;
        }
    }
    
    p{
        opacity: 0.5;
        letter-spacing: 1px;
        font-weight: 700;
        line-height: 138%;
        font-size: .7rem;

        transition: color .2s ease-in, opacity .2s ease-in;
    }

    img{
        width: 5px;
    }
`

export default ButtonShop