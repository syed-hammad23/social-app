import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useAuthStore} from '../../store/useAuthStore';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import {Button} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {
  startBackgroundTracking,
  stopBackgroundTracking,
} from '../../services/backgroundLocationService';
import {useTrackingStore} from '../../store/useTrackingStore';

type NavType = NativeStackNavigationProp<MainStackParamList>;

export default function HomeScreen() {
  const openSheet = useBottomSheetStore(state => state.openSheet);
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  const navigation = useNavigation<NavType>();
  const {isTracking} = useTrackingStore();

  const handleOpenSheet = () => {
    openSheet(
      <View>
        <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 10}}>
          Hello from Bottom Sheet
        </Text>

        <Text>This content is coming dynamically from Home Screen.</Text>
      </View>,
    );
  };

  const handleToggleTracking = async () => {
    if (isTracking) {
      await stopBackgroundTracking();
    } else {
      await startBackgroundTracking();
    }
  };

  return (
    <View style={{padding: 20}}>
      <Text>Welcome {user?.name}</Text>
      <Text onPress={logout} style={{marginTop: 20}}>
        Logout
      </Text>
      <Button title="Open Bottom Sheet" onPress={handleOpenSheet} />
      <Button title="Open Map" onPress={() => navigation.navigate('Map')} />
      <Button
        title={isTracking ? 'Stop Tracking' : 'Start Tracking'}
        onPress={handleToggleTracking}
      />
    </View>
  );
}
