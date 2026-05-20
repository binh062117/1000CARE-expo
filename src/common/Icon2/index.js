import React from 'react';

import icons from '~/assets/icons';
import Colors from '../Colors/Colors';
const Icon = ({name, color, size, ...props}) => {
  const Svg = icons[name];

  if (!Svg) {
    throw `Icon ${name} not found`;
  }

  const colorProp = name.endsWith('outlined') ? {stroke: color} : {fill: color};

  return <Svg {...colorProp} width={size} height={size} {...props} />;
};

Icon.defaultProps = {
  color: Colors.systemColor2,
  size: 24,
};

export default Icon;
