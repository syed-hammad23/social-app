import {NavigatorScreenParams} from '@react-navigation/native';

/**
 * 🔐 AUTH STACK TYPES
 */
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

/**
 * 📱 BOTTOM TAB TYPES
 */
export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

/**
 * 🧭 MAIN STACK TYPES (includes tabs + extra screens)
 */
export type MainStackParamList = {
  Tabs: NavigatorScreenParams<BottomTabParamList>;
  Profile: undefined;
  Settings: undefined;
  Map: undefined; // 👈 add this
};

/**
 * 🌍 ROOT NAVIGATION TYPES
 */
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainStackParamList>;
};
