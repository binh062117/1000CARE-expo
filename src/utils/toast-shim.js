import { ToastAndroid, Platform, Alert } from 'react-native';

const Toast = {
  SHORT: 2000,
  LONG: 3500,
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  CENTER: 'CENTER',
  show: (message, duration) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, duration === 3500 ? ToastAndroid.LONG : ToastAndroid.SHORT);
    } else {
      console.log('Toast:', message);
    }
  },
  showWithGravity: (message, duration, gravity) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        message,
        duration === 3500 ? ToastAndroid.LONG : ToastAndroid.SHORT,
        gravity === 'TOP' ? ToastAndroid.TOP : gravity === 'CENTER' ? ToastAndroid.CENTER : ToastAndroid.BOTTOM
      );
    } else {
      console.log('Toast:', message, gravity);
    }
  },
};

export default Toast;
