import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';

import {ThemeContext} from '../../theme';

const Spinner = ({size = 'large', color = '', style = {}}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <ActivityIndicator
      style={style}
      size={size}
      color={color || theme.primaryColor}
    />
  );
};

export default Spinner;
