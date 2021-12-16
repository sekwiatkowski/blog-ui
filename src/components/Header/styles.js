import styled from 'styled-components';
import { colors } from '../styles/theme';

export const Header = styled.header`
    background: ${colors.white};
    padding: 1.8rem 1rem;
    color: ${colors.black};
    max-height: 87px;
    border-bottom: 1px solid ${colors.gray};
    #logo {
        margin-right: 6rem;
        max-width: 110px;
        width: 100%;
        height: auto;
    }
    .nav-link-element {
        position: relative;
        color: ${colors.black};
        text-decoration: none;
        margin: 0 1.5rem;
        font-family: 'Montserrat', sans-serif;
    }
    .nav-link-element:hover::after {
        content: '';
        background: ${colors.black};
        bottom: -3px;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
    .icon:first-child {
        margin-right: 2.8rem;
        @media (max-width: 385px) {
            margin-right: 1rem;
        }
    }
    #menu-icon {
        display: none;
        cursor: pointer;
    }

    @media (max-width: 1199px) {
        .nav-link-element {
            display: none;
        }
        #menu-icon {
            margin-left: auto;
            margin-right: 2.8rem;
            display: block;
        }
        .responsive {
            width: 100%;
        }
    }

    @media (max-width: 385px) {
        .icon {
            margin-right: 1rem;
        }
        #menu-icon {
            margin-right: 1rem;
        }
    }
`;
