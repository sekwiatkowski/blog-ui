import styled from 'styled-components';
import { colors } from '../styles/theme';

export const MobileNav = styled.div`
    opacity: ${props => (props.menuOpen ? 1 : 0)};
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    position: relative;
    z-index: 9999;
    background: ${colors.white};
    transition: all 0.3s ease;
    .nav-mobile-element {
        position: relative;
        color: ${colors.black};
        text-decoration: none;
        margin: 1rem 0;
        font-family: 'Montserrat', sans-serif;
    }
    .nav-mobile-element:hover::after {
        content: '';
        background: ${colors.black};
        bottom: -3px;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
    #close-menu {
        position: absolute;
        top: 30px;
        right: 40px;
        cursor: pointer;
    }
`;
