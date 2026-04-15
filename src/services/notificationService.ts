import messaging from "@react-native-firebase/messaging";
import { Platform } from "react-native";

class NotificationService {
  async requestPermission() {
    const authStatus = await messaging().requestPermission();

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    return enabled;
  }

  async getToken(): Promise<string | null> {
    const token = await messaging().getToken();
    return token;
  }

  async setupListeners() {
    // Foreground
    messaging().onMessage(async remoteMessage => {
      console.log("Foreground Notification:", remoteMessage);
    });

    // Background
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log("Background Notification:", remoteMessage);
    });

    // App opened from notification
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log("Opened from background:", remoteMessage);
    });

    // App opened from quit state
    const initialNotification = await messaging().getInitialNotification();
    if (initialNotification) {
      console.log("Opened from quit:", initialNotification);
    }
  }
}

export const notificationService = new NotificationService();