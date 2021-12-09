import { createGlobalStyle } from 'styled-components'
import Montserrat from '..fonts/Montserrat.ttf'
import MontserratBold from '../fonts/Montserrat-Bold.ttf'
import MontserratLight from '..fonts/Montserrat-Light.ttf'
import { colors } from './theme'

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
    }

    @font-face {
        font-family: 'Montserrat-Bold';
        src: url(${MontserratBold});
    }

    @font-face {
        font-family: 'Montserrat-Light';
        src: url(${MontserratLight});
    }

    html {
        scroll-behavior: auto !important;
    }

    body {
        font-family: 'Montserrat', sans-serif !important;
        overflow: ${(props) => (props.menuOpen ? 'hidden' : 'auto')};
    }

    hr {
        background-color: ${colors.gray} !important;
    }

    .big-text {
        font-size: 3.75rem;
        font-family: 'Montserrat-Bold', sans-serif;
    }

    .medium-text-1 {
        font-size: 2.25rem;
    }

    .medium-text {
        font-size: 1.5rem;
    }

    .small-text {
        font-size: 1rem;
        font-family: 'Montserrat-Light', sans-serif;
    }

    .gray-text {
        color: ${colors.gray}
    }

    .padding-border {
        padding: 0 1rem;
    }

    @media (min-width: 1400px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
            max-width: 85rem !important;
        }
    }

    .bottom {
        padding-bottom: 8rem;
    }

    @media (max-width: 1137px) {
        .container-xxl {
            max-width: 856px;
        }
    }
`
