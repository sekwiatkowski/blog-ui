import React from 'react';
import NoticeElement from '../NoticeElement';
import { Header } from './styles';
import { colors } from '../styles/theme';

export default function HeaderElement({ setMenuOpen, logo, children }) {
    return (
        <>
            <NoticeElement />
            <Header className='d-flex w-100'>
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
                        <a className='d-inline-flex icon' href='#' rel='noopener noreferrer'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={30} height={30} fill={colors.black}>
                                <path d='M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z' />
                            </svg>
                        </a>
                        <a className='d-inline-flex' href='#' rel='noopener noreferrer'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width={30} height={30} fill={colors.black}>
                                <path d='M 8 2 C 5.960938 2 4.15625 2.210938 3.058594 2.375 C 2.160156 2.507813 1.445313 3.210938 1.28125 4.113081 C 1.140625 4.902344 1 6.054688 1 7.5 C 1 8.945313 1.140625 10.097656 1.28125 10.886719 C 1.445313 11.789063 2.160156 12.488281 3.058594 12.625 C 4.160156 12.789063 5.972656 13 8 13 C 10.027344 13 11.835938 12.789063 12.9375 12.625 L 12.941406 12.625 C 13.839844 12.492188 14.554688 11.789063 14.71875 10.886719 C 14.859375 10.09375 15 8.941406 15 7.5 C 15 6.054688 14.859375 4.902344 14.714844 4.113081 C 14.554688 3.210938 13.839844 2.507813 12.941406 2.375 C 11.84375 2.210938 10.039063 2 8 2 Z M 8 3 C 9.96875 3 11.730469 3.203125 12.792969 3.363081 C 13.261719 3.433594 13.640625 3.800781 13.730469 4.289063 C 13.863081 5.027344 14 6.121094 14 7.5 C 14 8.878906 13.863081 9.972656 13.734375 10.707031 C 13.644531 11.199219 13.265625 11.566406 12.792969 11.636719 C 11.722656 11.792969 9.957031 12 8 12 C 6.042969 12 4.273438 11.792969 3.207031 11.636719 C 2.738281 11.566406 2.355469 11.199219 2.265625 10.707031 C 2.136719 9.96875 2 8.878906 2 7.5 C 2 6.117188 2.136719 5.027344 2.265625 4.289063 C 2.355469 3.800781 2.734375 3.433594 3.203125 3.367188 L 3.207031 3.367188 C 4.269531 3.207031 6.03125 3 8 3 Z M 6 5 L 6 10 L 11 7.5 Z' />
                            </svg>
                        </a>
                    </div>
                </div>
            </Header>
        </>
    );
}
