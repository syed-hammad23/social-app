import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import {useBottomSheetStore} from '../../store/useBottomSheetStore';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function BottomSheet() {
  const {visible, content, closeSheet} = useBottomSheetStore();

  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.wrapper}>
      {/* BACKDROP */}
      <TouchableWithoutFeedback onPress={closeSheet}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      {/* SHEET */}
      <Animated.View style={[styles.sheet, {transform: [{translateY}]}]}>
        <View style={styles.handle} />

        {content}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    zIndex: 9999,
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  sheet: {
    height: SCREEN_HEIGHT * 0.4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },

  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
