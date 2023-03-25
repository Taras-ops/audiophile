import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = (props) => {
    let CurrentButton
    switch (props.type) {
        case 'outlined':
            CurrentButton = ButtonOutlinedStyled
            break;
        default:
            CurrentButton = ButtonContainedStyled
            break;
    }

  return (
    <> 
        <CurrentButton {...props}>{props.children}</CurrentButton>
    </>
  )
}

const ButtonStyled = styled(Link)`
    padding: 15px 29.5px 15px 31.5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: .8125rem;
    line-height: 128.5%;
    display: inline-block;
    cursor: pointer;
    color: ${props => props.theme.colors.white};
`

const ButtonContainedStyled = styled(ButtonStyled)`
    background: ${props => props.color == 'black' ? props.theme.colors.black : props.theme.colors.primary};
    transition: background .2s ease-in;

    &:hover{
        background: ${props => props.color == 'black' ? props.theme.colors.balckHover : props.theme.colors.lightOrange};
    }
`

const ButtonOutlinedStyled = styled(ButtonStyled)`
    border: 1px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
    transition: background .2s ease-in, color .2s ease-in;

    &:hover{
        background: ${props => props.theme.colors.black};
        color: ${props=> props.theme.colors.white};
    }
`

export default Button