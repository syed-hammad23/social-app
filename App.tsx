import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {useAuthStore} from './src/store/useAuthStore';
import {Toast, BottomSheet} from './src/components';

export default function App() {
  const hydrate = useAuthStore(state => state.hydrate);

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <>
      <AppNavigator />

      {/* GLOBAL UI LAYERS */}
      <Toast />
      <BottomSheet />
    </>
  );
}
