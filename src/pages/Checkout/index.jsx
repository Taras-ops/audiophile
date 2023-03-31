import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useForm} from 'react-hook-form'
import { Footer, Header, Container, Button, Input, InputSelect } from '../../components'


const Checkout = () => {
    const [paymentDetailsId, setPaymentDetailsId] = useState(0)
    const {products} = useSelector(state => state.cart)
    const {register, formState: { errors }, handleSubmit} = useForm()
    const navigate = useNavigate()

    const onClickGoBackHandle = () => {
        navigate(-1)
    }

  return (
    <>
        <Header />
        <Section>
            <Container>
                <a onClick={onClickGoBackHandle} className='link go-back-link'>Go Back</a>
                <div className="wrapper">
                    <div className="checkout">
                        <h3>Checkout</h3>
                        <form action="">
                            <div className='input-group'>
                                <p>Billing Details</p>
                                <div className='input-wrapper'>
                                    <Input errors={errors} placeholder='Alexei Ward' label="Name" register={register} required />
                                    <Input errors={errors} placeholder='alexei@mail.com' label="Email Address" register={register} required />
                                    <Input errors={errors} placeholder='+1 202-555-0136' label="Phone Number" register={register} required />
                                </div>
                            </div>
                            <div className='input-group'>
                                <p>shipping info</p>
                                <div className='input-wrapper'>
                                    <Input errors={errors} className="address-input" placeholder='1137 Williams Avenue' label="Address" register={register} required />
                                    <Input errors={errors} placeholder='10001' label="ZIP Code" register={register} required />
                                    <Input errors={errors} placeholder='New York' label="City" register={register} required />
                                    <Input errors={errors} placeholder='United States' label="Country" register={register} required />
                                </div>
                            </div>
                            <div className="input-group">
                                <p>Paymant Details</p>
                                <div className="input-wrapper">
                                    <InputSelect register={register} label="Payment Method" data={[
                                        {id: 0, name: "e-Money"},
                                        {id: 1, name: "Cash on Delivery"}
                                    ]} paymentDetailsId={paymentDetailsId} setPaymentDetailsId={setPaymentDetailsId}/>
                                </div>
                            </div>
                            {
                                paymentDetailsId == 0 ? <div className='input-group'>
                                    <div className="input-wrapper">
                                        <Input errors={errors} className="" placeholder='238521993' label="e-Money Number" register={register} required/>
                                         <Input errors={errors} className="" placeholder='6891' label="e-Money PIN" register={register} required/>
                                    </div>
                                </div> : <div>

                                </div>
                            }
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
        <Footer />
    </>
  )
}



const Section = styled.section`
    padding: 5rem 0 8.75rem;
    background-color: ${props => props.theme.colors.gray};

    .go-back-link{
        opacity: 0.5;
        text-transform: capitalize;
        font-weight: 500;
    }

    .wrapper{
        margin-top: 2.375rem;
        display: grid;
        grid-template-columns: 2.0857fr 1fr;

        & > div{
            background-color: ${props => props.theme.colors.white};
            border-radius: 8px;
        }
    }

    .checkout{
        padding: 3.375rem 3rem 3rem;
    }

    h3{
        margin-bottom: 2.56rem;
    }

    .input-group{
        & > p{
            margin-bottom: 1rem;
            color: ${props => props.theme.colors.primary};
            font-weight: 700;
            text-transform: uppercase;
            line-height: 192%;
            font-size: 0.8125rem;
        }
    }

    .input-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1.5rem;
        margin-bottom: 3.3125rem;
    }

    .address-input{
        grid-column: 1/3;
    }
`

export default Checkout