import React, {useContext} from 'react';
import Icon from '../Icon/Icon';
import {ThemeContext} from '../../theme';

const CheckBoxIcon = ({
  size,
  iconType,
  checked,
  checkedIcon,
  uncheckedIcon,
}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Icon
      name={checked ? checkedIcon : uncheckedIcon}
      type={iconType}
      size={size}
      // color={checked ? theme.primaryColor : theme.iconColor}
      color={checked ? theme.primaryColor : '#CCCCCC'}
    />
  );
};

export default CheckBoxIcon;
