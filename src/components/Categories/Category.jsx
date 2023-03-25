import React from 'react'
import styled from 'styled-components'
import ButtonShop from '../Button/ButtonShop'

const Category = ({title, image, link}) => {
  return (
    <CategoryStyled>
        <div className="image-wrapper">
            <img src={image} alt={title + ' image'}/>
        </div>
        <h6>{title}</h6>
        <ButtonShop link={'category/' + link}/>
    </CategoryStyled>
  )
}

const CategoryStyled = styled.div`
    padding: 116px 0 30px;
    position: relative;
    text-align: center;
    border-radius: .5rem;
    background: ${props => props.theme.colors.gray};
    flex: 1;

    @media ${props => props.theme.media.tablet} {
        padding: 88px 0 22px;
    }

    .image-wrapper{
        position: absolute;
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        
        img{
            width: 100%;
        }
    }

    h6{
        margin-bottom: 15px;
    }


    @media(max-width: 800px) {
        padding-top: 70px;

        .image-wrapper{
            width: 170px;
        }
    }

    @media ${props => props.theme.media.tablet} {
        .image-wrapper{
            max-width: 130px;
            top: -40px;

            img{
                width: 100%;
            }
        }
    }
`

export default Category