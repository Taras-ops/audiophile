import React from 'react'

import styled from 'styled-components'

const Input = ({label, register, required, placeholder, className}) => {
  return (
    <InputStyled className={className}>
        <label>{label}</label>
        <input type='text' {...register(label, {required})} placeholder={placeholder}/>
        <p className='error'></p>
    </InputStyled>
  )
}

const InputStyled = styled.div`
    label{
        letter-spacing: -0.214286px;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 133%;
        margin-bottom: .5625rem;
        display: block;
    }

    input{
        width: 100%;
        padding: 1.125rem 1.5rem 1.1875rem;
        border-radius: 8px;
        border: 1px solid #CFCFCF;
        background: none;
        outline: none;
        transition: all .2s ease-in;
        letter-spacing: -0.25px;
        font-weight: 700;
        caret-color: ${props => props.theme.colors.primary};

        &::placeholder{
            opacity: 0.4;
            mix-blend-mode: normal;
            font-size: 14px;
        }

        &:focus, &:hover{
            border: 1px solid ${props => props.theme.colors.primary};
        }
    }
`

export default Input