import React from 'react';
import './Title.css';

function Title(props) {
    return(
        <div className='App-title'>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Title;