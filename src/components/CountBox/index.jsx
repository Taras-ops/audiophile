import React from 'react'

import styled from 'styled-components'

const CountBox = ({count, increaseCount, decreaseCount, type, id}) => {
  const onClickIncreaseCount = () => {
    increaseCount(id)
  }

  const onClickDecreaseCount = () => {
    decreaseCount(id)
  }

  return (
    <CountBoxStyled type={type || ''}>
        <button onClick={type == 'sm' ? onClickDecreaseCount : decreaseCount}>-</button>
        <p>{count}</p>
        <button onClick={type == 'sm' ? onClickIncreaseCount : increaseCount}>+</button>
    </CountBoxStyled>
  )
}


const CountBoxStyled = styled.div`
    display: flex;
    align-items: center;
    padding: ${props => props.type == 'sm' ? '7px 11.5px' : '15px 15.5px'};
    background-color: ${(props) => props.theme.colors.gray};
    font-weight: bold;
    font-size: 0.8125rem;
    button {
      opacity: 0.25;
      font-weight: 700;
      transition: color .2s ease-in, opacity .2s ease-in;

      &:hover{
        opacity: 1;
        color: ${props => props.theme.colors.primary};
      }
    }
    p {
      width: 16px;
      margin: ${props => props.type == 'sm' ? '0 13px 0 12px' : '0 21px 0 20px'};
    }
`

export default CountBox