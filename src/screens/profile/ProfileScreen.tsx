import React from 'react';
import {View, Text} from 'react-native';
import {useAuthStore} from '../../store/useAuthStore';
import {Header} from '../../components';

export default function ProfileScreen() {
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);

  return <Header title="Profile" />;
}
