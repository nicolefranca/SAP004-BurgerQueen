import React from 'react';

const Input = (props) => {
    return (
        <input type= {props.type} className = {props.className} placeholder = {props.placeholder} />
    );
}

export default Input;


