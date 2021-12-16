import styled from 'styled-components';
import { colors } from '../styles/theme';

export const FooterSection = styled.div`
    padding: 4rem 1rem;
    border-top: 1px solid ${colors.black};
    .footer-link {
        position: relative;
        color: ${colors.black};
        text-decoration: none;
    }
    .footer-link:hover::after {
        content: '';
        background: ${colors.black};
        bottom: -3px;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
    .footer-logo {
        margin-left: 1rem;
        font-size: 4.7rem;
        font-weight: 200;
        img {
            max-width: 230px;
            width: 100%;
            height: auto;
        }
    }
    .gap-responsive {
        row-gap: 2rem;
        column-gap: 4rem;
    }

    @media (max-width: 502px) {
        .gap-responsive {
            flex-direction: column;
        }
        .footer-logo {
            font-size: 3rem;
        }
    }
`;
export const FooterInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: ${colors.black};
    color: ${colors.white};
    .social-media {
        margin-left: 1rem;
        display: flex;
        gap: 4.5rem;
        a {
            position: relative;
            color: ${colors.white} !important;
            text-decoration: none;
        }
        a:hover::after {
            content: '';
            background: ${colors.white};
            bottom: -1px;
            height: 2px;
            left: 0;
            position: absolute;
            transition: width 0.3s ease-in-out;
            width: 100%;
        }
    }

    @media (max-width: 560px) {
        .social-media {
            flex-direction: column;
            gap: 1rem;
        }
    }
`;
