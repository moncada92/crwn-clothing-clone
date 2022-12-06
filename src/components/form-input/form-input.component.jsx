import React from 'react';
import './form-input.style.scss'

const FormInput = ({labelText, ...attrInput}) => {
  return (
    <div className='group'>

      <input className='form-input' {...attrInput}/>

      {labelText && (
        <label className={`${attrInput.value.length ? 'shrink' : ''} form-input-label `} >
          {labelText}
        </label>
      )}
      
    </div>
  );
};

export default FormInput;