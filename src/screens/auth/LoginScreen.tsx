import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Input, Button} from '../../components';
import {useAuthStore} from '../../store/useAuthStore';
import { useToastStore } from "../../store/useToastStore";

export default function LoginScreen({navigation}: {navigation: any}) {
  const login = useAuthStore(s => s.login);
  const toast = useToastStore.getState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await login(email, password);

    if (res.success) {
      toast.showToast('Login successful', 'success');
      navigation.replace('Home');
    } else {
      toast.showToast(res.message, 'error');
    }
  };

  return (
    <View style={{padding: 20}}>
      <Input placeholder="Email" onChangeText={setEmail} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        error={password?.length < 6 ? 'Password too short' : ''}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
