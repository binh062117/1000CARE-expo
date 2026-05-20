import { Dimensions, StyleSheet } from 'react-native';
import Toast from 'react-native-simple-toast';

import Colors from '~/common/Colors/Colors';

const { width } = Dimensions.get('window');
const toastStyle = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    width: width - 32,
    marginBottom: 16,
    padding: 16,
  },

  containerTabStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    width: width - 32,
    marginBottom: 16,
    padding: 16,
  },

  textStyle: {
    fontSize: 14,
    alignSelf: 'stretch',
    color: Colors.white,
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
});

export const showToast = (message, duration = 1000, options = {}, containerStyle = {}, textStyle = {}) => {
  // Chuyển đổi duration từ milliseconds sang seconds cho react-native-simple-toast
  const durationInSeconds = duration / 1000;

  // Xác định gravity dựa trên position (mặc định là bottom)
  let gravity = Toast.BOTTOM;
  if (options.position === 'top') {
    gravity = Toast.TOP;
  } else if (options.position === 'center') {
    gravity = Toast.CENTER;
  }

  // react-native-simple-toast có API đơn giản hơn
  // Sử dụng showWithGravity để có thể điều chỉnh vị trí
  Toast.showWithGravity(
    message,
    durationInSeconds < 2 ? Toast.SHORT : Toast.LONG,
    gravity
  );
};

// Nếu bạn muốn có thêm các method khác tương tự như tiny-toast
export const showToastWithGravity = (message, duration = Toast.SHORT, gravity = Toast.BOTTOM) => {
  Toast.showWithGravity(message, duration, gravity);
};

export const showShortToast = (message) => {
  Toast.show(message);
};

export const showLongToast = (message) => {
  Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
};
