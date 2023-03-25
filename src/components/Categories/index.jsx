import React from 'react'
import styled from 'styled-components'

import HeadphonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakersImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import Category from './Category'
import { Flex, Container } from '..'

const Categories = () => {
    const categoriesData = [
        {
            title: 'Headphones',
            image: HeadphonesImage,
            link: 'headphones',
        },
        {
            title: 'Speakers',
            image: SpeakersImage,
            link: 'speakers',
        },
        {
            title: 'Earphones',
            image: EarphonesImage,
            link: 'earphones',
        }
    ]

  return (
    <CategoriesStyled>
        <Container>
            <Flex className="wrapper">
                {
                    categoriesData.map((item) => <Category key={item.title} {...item}/>)
                }
            </Flex>
        </Container>
    </CategoriesStyled>
  )
}


const CategoriesStyled = styled.section`
    padding: 10rem 0 10rem;

    .wrapper{
        align-items: flex-end;
        gap: 30px;
    }

    @media(max-width: 800px) {
        .wrapper{
            gap: 10px;
        }
    }

    @media (max-width: 530px) {
        .wrapper{
            flex-direction: column;

            & > div{
                width: 100%;

                &:not(:last-child) {
                    margin-bottom: 4.25rem;
                }
            }
        }
    }
`

export default Categories