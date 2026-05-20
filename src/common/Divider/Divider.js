import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeContext} from '../../theme';
import {DIMENS} from '../../constants';

const Divider = ({vertical = false, style = {}}) => {
  const {theme} = useContext(ThemeContext);
  return <View style={[styles.divider(vertical, theme), style]} />;
};

const styles = StyleSheet.create({
  divider: (vertical, theme) => ({
    display: 'flex',
    height: vertical ? '100%' : DIMENS.common.borderWidth,
    width: vertical ? DIMENS.common.borderWidth : '100%',
    backgroundColor: theme.borderColor,
  }),
});

export default Divider;
