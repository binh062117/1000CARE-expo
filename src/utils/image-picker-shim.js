import * as ImagePicker from 'expo-image-picker';

export const launchCamera = async (options, callback) => {
  try {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      ...options,
    });
    if (callback) callback(result);
    return result;
  } catch (error) {
    if (callback) callback({ error });
  }
};

export const launchImageLibrary = async (options, callback) => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      ...options,
    });
    if (callback) callback(result);
    return result;
  } catch (error) {
    if (callback) callback({ error });
  }
};

export default {
  launchCamera,
  launchImageLibrary,
};
