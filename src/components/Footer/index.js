import * as React from 'react';
import { FooterInfo, FooterSection } from './styles';

export default function Footer({ children, notice, socialMedia, className }) {
    return (
        <>
            <FooterSection className={`${className ? ` ${className}` : ''}`}>
                <div className='container d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center flex-wrap gap-responsive'>{children}</div>
                    <span className='footer-logo'>Logo</span>
                </div>
            </FooterSection>
            <FooterInfo>
                <div className='container d-flex align-items-center justify-content-between'>
                    <span>{notice}</span>
                    <div className='social-media'>
                        {socialMedia.map((item, index) => (
                            <a href={item.link} rel='noopener noreferrer' key={index}>
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>
            </FooterInfo>
        </>
    );
}
