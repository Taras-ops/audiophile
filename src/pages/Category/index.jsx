import React, {useEffect} from 'react'
import { Categories, CategoryIntro, Footer, FooterAbout, Header, ProductView } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from "../../redux/categorySlice";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';


const Category = () => {
  const dispatch = useDispatch()
  const {category} = useParams()
  const data = useSelector(state => state.category)

  useEffect(() => {
    dispatch(fetchCategory(category))
  }, [category])

  return (
    <>
        <Helmet>
          <title>audiophile - category: {category}</title>
        </Helmet>
        <Header bottomLine/>
        <CategoryIntro category={category}/>
        <ProductsWrapper>
            {
                data.products.map((item, index) => <ProductView key={index} order={index} data={item}/>)
            }
        </ProductsWrapper>
        <Categories />
        <FooterAbout />
        <Footer />
    </>
  )
}

const ProductsWrapper = styled.div`
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 10rem;

    @media ${props => props.theme.media.tablet} {
      gap: 7.5rem;
      padding: 7.5rem 0;
    }
`

export default Category