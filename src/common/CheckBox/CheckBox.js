import React from 'react';
import {View, StyleSheet} from 'react-native';

import CheckBoxIcon from './CheckBoxIcon';
import Text from '../Text';
import TouchReceptor from '../TouchReceptor/TouchReceptor';
import {SPACING, DIMENS} from '../../constants';
import {isNonEmptyString} from '../../utils';

const CheckBox = ({
  checked = false,
  onPress = () => {},
  title = '',
  disabled = false,
  iconRight = false,
  size = DIMENS.common.checkboxIconSize,
  checkedIcon = 'check-box',
  uncheckedIcon = 'check-box-outline-blank',
  iconType = 'material',
  containerStyle = {},
  titleStyle = {},
}) => {
  const checkBoxIconProps = {
    size,
    checked,
    iconType,
    checkedIcon,
    uncheckedIcon,
  };

  const accessibilityState = {
    checked: !!checked,
  };

  return (
    <TouchReceptor
      accessibilityRole="checkbox"
      accessibilityState={accessibilityState}
      testID="checkbox"
      disabled={disabled}
      onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        {!iconRight && <CheckBoxIcon {...checkBoxIconProps} />}
        {isNonEmptyString(title) && (
          <Text
            style={StyleSheet.flatten([styles.text(iconRight), titleStyle])}>
            {title}
          </Text>
        )}
        {iconRight && <CheckBoxIcon {...checkBoxIconProps} />}
      </View>
    </TouchReceptor>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: iconRight => ({
    flexShrink: 1,
    marginStart: iconRight ? 0 : SPACING.tiny,
    marginEnd: iconRight ? SPACING.tiny : 0,
  }),
});

export default CheckBox;
