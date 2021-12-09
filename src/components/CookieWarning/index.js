import * as React from 'react';
import Button from '../Button';
import { CookiePolicy } from './styles';

export default function CookieWarning({ cookieWarning }) {
    return (
        <>
            {!localStorage.getItem('isNotNew') && (
                <CookiePolicy className='position-sticky w-100 d-flex justify-content-center flex-column' ref={cookieWarning}>
                    <div className='container d-flex align-items-center justify-content-between r'>
                        <div className='me-3'>
                            <h4>Notice</h4>
                            <p className='m-0'>We use cookies to measure the performance of our site, personalize your experience and for advertising purposes.</p>
                        </div>
                        <div className='d-flex align-items-center actions'>
                            <Button className='fifty'>Reject</Button>
                            <Button
                                className='fifty'
                                filled
                                light
                                onClick={() => {
                                    cookieWarning.current.classList.add('d-none');
                                    localStorage.setItem('isNotNew', true);
                                }}
                            >
                                Accept
                            </Button>
                        </div>
                    </div>
                </CookiePolicy>
            )}
        </>
    );
}
