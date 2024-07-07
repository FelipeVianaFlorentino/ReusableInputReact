import React, { useEffect, useRef } from 'react';
import './Input.css';

const Input = ({label, type, id}) => {

    const inputRef = useRef(null);
    const labelRef = useRef(null);

    useEffect(() => {
        const input = inputRef.current;
        const label = labelRef.current;

        const handleFocus = () => {
            label.classList.add('label-active');
        };

        const handleBlur = () => {
            if (input.value === '') {
                label.classList.remove('label-active');
            }
        };

        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);

        return () => {
            input.removeEventListener('focus', handleFocus);
            input.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <div className='input-container'>
            <label ref={labelRef} htmlFor={id} >{label}</label>
            <input ref={inputRef} type={type} id={id} className='meu-input' />
        </div>
    );
};

export default Input;