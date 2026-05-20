import { Platform, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { asyncStorage } from '~/store/index';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function registerForPushNotificationsAsync() {
  try {
    if (!Device.isDevice) {
      console.log('Push notifications only work on physical devices');
      return null;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') {
      console.log('Permission denied for notifications');
      return null;
    }

    const projectId = Constants.expoConfig?.extra?.eas?.projectId || Constants.easConfig?.projectId;
    if (!projectId) {
      console.warn('Missing EAS Project ID in config');
    }

    const tokenResponse = await Notifications.getExpoPushTokenAsync({
      projectId: projectId || 'your-default-project-id'
    });
    const token = tokenResponse.data;
    
    console.log('Expo Push Token:', token);
    
    // Store token securely or using asyncStorage
    await SecureStore.setItemAsync('expo_push_token', token);
    
    // TODO: Send this token to your backend instead of the FCM token
    
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    
    return token;
  } catch (error) {
    console.error('Error getting push token:', error);
    return null;
  }
}

export function initNotificationListeners() {
  const notificationListener = Notifications.addNotificationReceivedListener(notification => {
    console.log('Foreground notification received:', notification);
  });

  const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
    const data = response.notification.request.content.data;
    console.log('User tapped notification with data:', data);
    
    // TODO: Handle navigation based on data here
    // Example: navigationService.navigate('OrderDetails', { orderId: data.orderId });
  });

  return () => {
    Notifications.removeNotificationSubscription(notificationListener);
    Notifications.removeNotificationSubscription(responseListener);
  };
}
