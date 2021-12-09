import styled from 'styled-components';
import { colors } from '../styles/theme';

export const CookiePolicy = styled.div`
    padding: 2rem 1rem;
    bottom: 0;
    z-index: 9999;
    background: ${colors.white};
    h4 {
        font-weight: bold;
    }
    .actions {
        gap: 1.4rem;
    }

    @media (max-width: 575px) {
        .r {
            flex-direction: column;
        }
        .actions {
            width: 100%;
            margin-top: 1rem;
        }
        .fifty {
            width: 100%;
        }
    }
`;
