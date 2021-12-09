import * as React from 'react';
import { Button } from './styles';

export default function ButtonElement({ children, href, light = false, filled = false, className, onClick }) {
    return (
        <div className='d-flex'>
            <Button href={href} light={light} filled={filled} onClick={onClick} className={className}>
                {children}
            </Button>
        </div>
    );
}
