import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline base dimensions (based on iPhone X / 11 / 13 / 14 / 15 standard sizes)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const s = (size) => {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH / guidelineBaseWidth) * size);
};

export const vs = (size) => {
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT / guidelineBaseHeight) * size);
};

export const ms = (size, factor = 0.5) => {
  return PixelRatio.roundToNearestPixel(size + (s(size) - size) * factor);
};

export const fs = (size) => {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH / guidelineBaseWidth) * size);
};
