import React from 'react';
import './TextBox.css';

function TextBox(props) {
    return (
        <div className='textBox'>
            <input id={props.id} name={props.name}></input>
            <label htmlFor={props.id}></label>
        </div>
    );
};

export default TextBox;