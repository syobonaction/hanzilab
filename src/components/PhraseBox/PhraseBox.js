import React from 'react';
import TextBox from '../TextBox/TextBox';
import './PhraseBox.less';

function PhraseBox(props) {
    return (
        <div className='App-phraseBox'>
            <TextBox id='test' name='test'/>
        </div>
    );
};

export default PhraseBox;