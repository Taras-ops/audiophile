import React from 'react'

import styled from 'styled-components'

const InputSelect = ({label, register, required, className, paymentDetailsId, setPaymentDetailsId, data}) => {

    const onClickInputRadioHandle = (id) => {
        setPaymentDetailsId(id)
    }

  return (
    <>
        <Label>{label}</Label>
        <div>
            {
                data.map(({id, name}) => <InputStyled className={paymentDetailsId === id ? 'active' : ''} onClick={() => onClickInputRadioHandle(id)} key={id}>
                    <input 
                        {...register(label, {required})}
                        type='radio'
                        key={id}
                        value={name}
                        id={id}
                    />
                    <label htmlFor={id}>{name}</label>
                </InputStyled>)
            }
        </div>
    </>
  )
}

const Label = styled.label`
    letter-spacing: -0.214286px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 133%;
    display: block;
`

const InputStyled = styled.div`
    width: 100%;
    padding: 1.125rem 1.5rem 1.1875rem;
    border-radius: 8px;
    border: 1px solid #CFCFCF;
    background: none;
    outline: none;
    transition: all .2s ease-in;
    letter-spacing: -0.25px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    &.active{
        border: 1px solid ${props => props.theme.colors.primary};
    }


    label{
        letter-spacing: -0.214286px;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 133%;
        display: block;

    }

    input{

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

export default InputSelect