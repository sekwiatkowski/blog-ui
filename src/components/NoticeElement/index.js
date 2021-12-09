import React from 'react';
import { NoticeDiv } from './styles';

export default function NoticeElement({ children }) {
    return (
        <NoticeDiv>
            <div className='container'>{children}</div>
        </NoticeDiv>
    );
}
