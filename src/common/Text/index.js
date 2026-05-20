import React from 'react';
import {Text as RNText} from 'react-native-elements';

import styles from './styles';
import Colors from '../Colors/Colors';

const Text = ({
  variant = 'body',
  color,
  upperCase,
  style,
  children,
  center,
  left,
  right,
  ...otherProps
}) => {
  const variantStyle = styles[variant];

  const customStyle = {};
  if (upperCase) {
    customStyle.textTransform = 'uppercase';
  }
  customStyle.color = color || Colors.textColor2;

  if (center) {
    customStyle.textAlign = 'center';
  }
  if (left) {
    customStyle.textAlign = 'left';
  }
  if (right) {
    customStyle.textAlign = 'right';
  }

  return (
    <RNText style={[variantStyle, customStyle, style]} {...otherProps}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  variant: 'body',
};

export default Text;
