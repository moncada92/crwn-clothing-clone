import React from 'react';
import {Group, InputForm, FormInputLabel} from './form-input.style.jsx'

const FormInput = ({labelText, ...attrInput}) => {
  return (
    <Group>

      <InputForm {...attrInput}/>

      {labelText && (
        <FormInputLabel shrink={attrInput.value.length} >
          {labelText}
        </FormInputLabel>
      )}
      
    </Group>
  );
};

export default FormInput;