import React from 'react';
import NoticeElement from '../NoticeElement';
import { Header } from './styles';
import { colors } from '../styles/theme';

export default function HeaderElement({ setMenuOpen, logo, children, noticeText, className, socialMedia }) {
    return (
        <>
            <NoticeElement>{noticeText}</NoticeElement>
            <Header className={`d-flex w-100${className ? ` ${className}` : ''}`}>
                <div className='container d-flex w-100 justify-content-between align-items-center small-text'>
                    <div className='d-flex align-items-center responsive'>
                        <span id='logo'>Logo</span>
                        {children}
                        <svg
                            id='menu-icon'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width={30}
                            height={30}
                            fill={colors.black}
                            onClick={() => setMenuOpen(prev => !prev)}
                        >
                            <path d='M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z' />
                        </svg>
                    </div>
                    <div className='d-flex align-items-center'>
                        {socialMedia &&
                            socialMedia.map((item, index) => (
                                <a key={index} className='d-inline-flex icon' href={item.link} rel='noopener noreferrer'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={30} height={30} fill={colors.black}>
                                        <path d='M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z' />
                                    </svg>
                                </a>
                            ))}
                    </div>
                </div>
            </Header>
        </>
    );
}
