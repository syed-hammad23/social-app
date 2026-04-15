import React from 'react';
import {View, Text} from 'react-native';
import {useAuthStore} from '../../store/useAuthStore';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import {Button} from '../../components';

export default function HomeScreen() {
  const openSheet = useBottomSheetStore(state => state.openSheet);
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);

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

  return (
    <View style={{padding: 20}}>
      <Text>Welcome {user?.name}</Text>
      <Text onPress={logout} style={{marginTop: 20}}>
        Logout
      </Text>
      <Button title="Open Bottom Sheet" onPress={handleOpenSheet} />
    </View>
  );
}
