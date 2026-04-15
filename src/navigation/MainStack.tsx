import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingScreen';
import MapScreen from '../screens/map/MapScreen';

import {MainStackParamList} from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
