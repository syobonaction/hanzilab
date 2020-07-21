import React from 'react';
import './styles.scss';

function SubCategory(props) {
  return (
    <div className='App-subcategory'>
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default SubCategory;