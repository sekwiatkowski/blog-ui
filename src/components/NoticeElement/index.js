import React from 'react';
import { NoticeDiv } from './styles';

export default function NoticeElement({ text }) {
    return (
        <NoticeDiv>
            <div className='container'>{text}</div>
        </NoticeDiv>
    );
}
