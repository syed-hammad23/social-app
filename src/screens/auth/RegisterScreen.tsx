import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Input, Button} from '../../components';
import {useAuthStore} from '../../store/useAuthStore';

export default function RegisterScreen({navigation}: {navigation: any}) {
  const register = useAuthStore(s => s.register);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const res = await register(name, email, password);

    if (res?.success) {
      navigation.replace('Home');
    } else {
      Alert.alert(res.message);
    }
  };

  return (
    <View style={{padding: 20}}>
      <Input placeholder="Name" onChangeText={setName} />
      <Input placeholder="Email" onChangeText={setEmail} />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
