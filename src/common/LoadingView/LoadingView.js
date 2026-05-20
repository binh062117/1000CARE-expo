import React, { useContext } from 'react';
import { View } from 'react-native';
import Spinner from '../Spinner/Spinner';
import { ThemeContext } from '../../theme';
import dimens from '~/constants/dimens';

const LoadingView = ({ size = 'large', backgroundColor = null }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container(backgroundColor, theme)}>
      <Spinner size={size} />
    </View>
  );
};

const styles = {
  container: (backgroundColor, theme) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: dimens.common.WINDOW_HEIGHT / 2 - 15,
    left: dimens.common.WINDOW_WIDTH / 2 - 15,
    backgroundColor: !backgroundColor ? theme.transparent : backgroundColor,
  }),
};

export default LoadingView;
