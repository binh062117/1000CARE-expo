import React, {useContext} from 'react';
import {View, StyleSheet, TextInput as InputComponent} from 'react-native';

import Text from '../Text/index';
import {ThemeContext} from '../../theme';
import {DIMENS, SPACING, TYPOGRAPHY} from '../../constants';
import {isNonEmptyString} from '../../utils';

const TextInput = ({
  containerStyle = {},
  inputContainerStyle,
  inputStyle,
  disabled = false,
  label = '',
  labelStyle = {},
  errorMessage = '',
  leftIcon = null,
  rightIcon = null,
  placeholderTextColor = '',
  assignRef = () => {},
  ...props
}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={containerStyle}>
      {isNonEmptyString(label) && (
        <Text style={[styles.label(theme), labelStyle]}>{label}</Text>
      )}
      <View
        style={StyleSheet.flatten([
          styles.inputContainer(disabled, theme),
          inputContainerStyle,
        ])}>
        {leftIcon && (
          <View
            style={StyleSheet.flatten([
              styles.iconContainer,
              styles.leftIconContainer,
            ])}>
            {leftIcon}
          </View>
        )}

        <InputComponent
          placeholderTextColor={placeholderTextColor || theme.labelTextColor}
          underlineColorAndroid={theme.transparent}
          editable={!disabled}
          style={[
            styles.input(theme),
            disabled && styles.disabledInput(theme),
            inputStyle,
          ]}
          ref={component => assignRef && assignRef(component)}
          {...props}
        />

        {rightIcon && (
          <View
            style={StyleSheet.flatten([
              styles.iconContainer,
              styles.rightIconContainer,
            ])}>
            {rightIcon}
          </View>
        )}
      </View>
      {isNonEmptyString(errorMessage) && (
        <Text style={styles.error(theme)}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: theme => ({
    ...TYPOGRAPHY.formLabel(theme),
    marginBottom: SPACING.tiny,
  }),
  inputContainer: (disabled, theme) => ({
    flexDirection: 'row',
    backgroundColor: theme.surfaceColor,
    borderWidth: DIMENS.common.borderWidth,
    borderRadius: DIMENS.common.borderRadius,
    alignItems: 'center',
    borderColor: disabled ? theme.disabledDarkColor : theme.labelTextColor,
    minHeight: DIMENS.common.textInputHeight,
  }),
  input: theme => ({
    ...TYPOGRAPHY.formInput(theme),
    backgroundColor: 'transparent',
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    flex: 1,
  }),
  disabledInput: theme => ({
    color: theme.disabledColor,
  }),
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.tiny,
  },
  leftIconContainer: {
    paddingStart: SPACING.small,
  },
  rightIconContainer: {
    paddingEnd: SPACING.small,
  },
  error: theme => ({
    ...TYPOGRAPHY.formError(theme),
    margin: SPACING.tiny,
  }),
});

export default TextInput;
