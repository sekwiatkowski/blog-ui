import styled from 'styled-components';
import { colors } from '../styles/theme';

export const NoticeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.black};
    color: ${colors.white};
    padding: 0.5rem 0;
    font-family: 'Montserrat-Light', sans-serif;
    strong {
        font-family: 'Montserrat-Bold', sans-serif;
        font-weight: 600;
    }
`;
