import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        overflow-x: hidden;
    }

    body.overflow{
        overflow-y: hidden;
    }

    @media (max-height: 600px) {
        body.overflow{
            overflow-y: auto;
        }
    }

    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    a.link{
        text-transform: uppercase;
        font-weight: 700;
        font-size: .8125rem;
        line-height: 192%;
        letter-spacing: 2px;
        transition: color .2s ease-in, opacity .2s ease-in;

        &:hover{
            color: ${props => props.theme.colors.primary};
            opacity: 1;
        }
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }

    h1{
        font-weight: 700;
        font-size: 3.5rem;
        letter-spacing: 2px;
        line-height: '104%';
        text-transform: uppercase;

        @media ${props => props.theme.media.tablet} {
            font-size: 2.8rem;
        }

        @media ${props => props.theme.media.mobile} {
            font-size: 2.25rem;
        }
    }

    h2{
        font-weight: 700;
        font-size: 2.5rem;
        letter-spacing: 1.5px;
        line-height: 110%;
        text-transform: uppercase;

        @media ${props => props.theme.media.mobile} {
            font-size: 1.75rem;
        }
    }

    h3{
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: 1.15px;
        line-height: 112%;
        text-transform: uppercase;

        @media ${props => props.theme.media.mobile} {
            font-size: 1.5rem;
        }
    }

    h4{
        font-weight: 700;
        font-size: 1.75rem;
        letter-spacing: 2px;
        line-height: 136%;
        text-transform: uppercase;

        @media ${props => props.theme.media.mobile} {
            font-size: 1.5rem;
        }
    }

    h5{
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: 1.7px;
        line-height: 137.5%;
        text-transform: uppercase;
    }

    h6{
        font-weight: 700;
        font-size: 1.125rem;
        letter-spacing: 1.3px;
        line-height: 138.8889%;
        text-transform: uppercase;

        @media ${props => props.theme.media.tablet} {
            font-size: .9375rem;
        }
    }

    .overline{
        font-weight: 400;
        font-size: .875rem;
        letter-spacing: 10px;
        line-height: 135.7%;
        text-transform: uppercase;
    }

    .subtitle{
        font-weight: 700;
        font-size: .8125rem;
        letter-spacing: .9px;
        line-height: 192.3%;
        text-transform: uppercase;
    }
    
    p{
        font-weight: 500;
        font-size: .9375rem;
        line-height: 167%;
    }
`


export default Global