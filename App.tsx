import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {useAuthStore} from './src/store/useAuthStore';
import {Toast, BottomSheet} from './src/components';
import {notificationService} from './src/services/notificationService';

export default function App() {
  const hydrate = useAuthStore(state => state.hydrate);

  useEffect(() => {
    hydrate();
    initNotifications();
  }, []);

  const initNotifications = async () => {
    const permission = await notificationService.requestPermission();

    if (permission) {
      const token = await notificationService.getToken();
      console.log('FCM Token:', token);

      // TODO: send token to backend
    }

    notificationService.setupListeners();
  };

  return (
    <>
      <AppNavigator />

      {/* GLOBAL UI LAYERS */}
      <Toast />
      <BottomSheet />
    </>
  );
}
