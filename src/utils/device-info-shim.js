import * as Device from 'expo-device';
import { Platform } from 'react-native';
import * as Application from 'expo-application';

const DeviceInfo = {
  getUniqueId: () => Device.osBuildId || 'unknown',
  getSystemVersion: () => Device.osVersion || 'unknown',
  getSystemName: () => Device.osName || Platform.OS,
  getModel: () => Device.modelName || 'unknown',
  getVersion: () => Application.nativeAppVersion || '1.0.0',
  getBuildNumber: () => Application.nativeBuildVersion || '1',
  getBrand: () => Device.brand || 'unknown',
  getDeviceId: () => Device.designName || 'unknown',
};

export default DeviceInfo;
