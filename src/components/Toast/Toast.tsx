import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {useToastStore} from '../../store/useToastStore';

export default function Toast() {
  const {visible, message, type} = useToastStore();

  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 50,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 2200);
    }
  }, [visible]);

  if (!visible) return null;

  const bgColor =
    type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6';

  return (
    <Animated.View
      style={[
        styles.container,
        {backgroundColor: bgColor, transform: [{translateY: slideAnim}]},
      ]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    padding: 14,
    borderRadius: 10,
    zIndex: 9999,
    elevation: 10,
  },

  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
