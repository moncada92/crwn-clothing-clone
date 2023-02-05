import React from 'react';

import { BaseButton, GoogleButtonSignIn, InvertedButton } from './button.styles'

/**
 * default
 * 
 * inverted
 * 
 * google sign in
 */

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const selectButton = (typeButton = 'base') => (
  {
    [BUTTON_TYPE_CLASSES.base] : BaseButton,
    [BUTTON_TYPE_CLASSES.google] : GoogleButtonSignIn,
    [BUTTON_TYPE_CLASSES.inverted] : InvertedButton,
  }[typeButton]
)

const Button = ({children, buttonType, ...otherProps}) => {

  const CustomBottom = selectButton(buttonType)

  return (
    <CustomBottom {...otherProps}>
      {children}
    </CustomBottom>
  );
};

export default Button;