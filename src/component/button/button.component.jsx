import {
  BaseButton,
  googleSignInButton,
  invertedButton,
} from './button.styles';

export const BUTTON_TYPE_CLASS = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: googleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: invertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomeButton = getButton(buttonType);
  return <CustomeButton {...otherProps}>{children}</CustomeButton>;
};

export default Button;
