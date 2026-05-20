import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import TouchReceptor from '../TouchReceptor/TouchReceptor';
import {ThemeContext} from '../../theme';
import {DIMENS} from '../../constants';

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
  const {theme} = useContext(ThemeContext);
  const shadow = type === SHADOW ? shadowStyle(theme) : {};

  return (
    <ViewGroup {...(onPress && {onPress, disabled})}>
      <View
        style={StyleSheet.flatten([
          styles.container(type, theme),
          shadow,
          style,
        ])}>
        {children}
      </View>
    </ViewGroup>
  );
};

const shadowStyle = theme => ({
  shadowColor: theme.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
});

const styles = {
  container: (type, theme) => ({
    borderWidth: type === OUTLINE ? DIMENS.common.borderWidth : 0,
    borderColor: theme.borderColor,
    borderRadius: DIMENS.common.borderRadius,
    backgroundColor: theme.surfaceColor,
  }),
};

export default Card;
