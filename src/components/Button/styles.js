import styled from 'styled-components';
import { colors } from '../styles/theme';

export const Button = styled.span`
    position: relative;
    padding: 0.4rem 3rem;
    border: 1px solid ${colors.black};
    text-decoration: none;
    cursor: pointer;
    color: ${props => (props.light ? colors.white : colors.black)};
    background: ${props => (props.filled ? colors.black : '')};
    font-weight: 600;
    transition: all 0.4s ease 0s;
    z-index: 0;
    ::before {
        content: '';
        position: absolute;
        inset: 0px;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s, -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        transform: scale(0, 1);
        transform-origin: right center;
        background: ${props => (props.light ? colors.white : colors.black)};
        z-index: -1;
    }
    :hover {
        color: ${props => (props.light ? colors.black : colors.white)};
    }
    :hover::before {
        transform: scale(1, 1);
        transform-origin: left center;
    }
    @media (max-width: 575px) {
        padding: 0.4rem 1.5rem;
    }
`;
