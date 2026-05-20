import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../Text/index';
import {ThemeContext} from '../../theme';
import {SPACING} from '../../constants';

const INFO = 'info';
const SUCCESS = 'success';
const ERROR = 'error';

const defaultProps = {
  type: INFO,
};

const MessageView = ({message, type}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text type="body" style={styles.text(type, theme)}>
        {message}
      </Text>
    </View>
  );
};

const getTextColor = (type, theme) => {
  switch (type) {
    case SUCCESS:
      return theme.successColor;
    case ERROR:
      return theme.errorColor;
    default:
      return theme.bodyTextColor;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: (type, theme) => ({
    textAlign: 'center',
    padding: SPACING.small,
    color: getTextColor(type, theme),
  }),
});


MessageView.defaultProps = defaultProps;

export default MessageView;
