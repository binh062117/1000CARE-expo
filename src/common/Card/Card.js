import React from 'react';
import {View, StyleSheet} from 'react-native';

import TouchReceptor from '../TouchReceptor/TouchReceptor';
import {DIMENS} from '../../constants';
import { s } from '~/utils/responsive';
import { brandColors, brandShadow } from '~/design-system/tokens';

const OUTLINE = 'outline';
const CLEAR = 'clear';
const SHADOW = 'shadow';

const Card = ({
  type = OUTLINE,
  style = {},
  onPress = null,
  disabled = false,
  children,
}) => {
  const ViewGroup = onPress ? TouchReceptor : React.Fragment;
  const shadow = type === SHADOW ? shadowStyle() : {};

  return (
    <ViewGroup {...(onPress && {onPress, disabled})}>
      <View
        style={StyleSheet.flatten([
          styles.container(type),
          shadow,
          style,
        ])}>
        {children}
      </View>
    </ViewGroup>
  );
};

const shadowStyle = () => ({
  ...brandShadow.soft,
});

const styles = {
  container: (type) => ({
    borderWidth: type === OUTLINE ? DIMENS.common.borderWidth : 0,
    borderColor: brandColors.borderSoft,
    borderRadius: s(24),
    backgroundColor: brandColors.surface,
  }),
};

export default Card;
