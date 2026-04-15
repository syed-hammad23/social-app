import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors } from "../../theme/colors";

type HeaderProps = {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;

  rightText?: string;
  onRightPress?: () => void;

  style?: ViewStyle;
};

export default function Header({
  title,
  showBack = false,
  onBackPress,
  rightText,
  onRightPress,
  style,
}: HeaderProps) {
  return (
    <View style={[styles.container, style]}>
      {/* Left: Back Button */}
      <View style={styles.left}>
        {showBack ? (
          <TouchableOpacity onPress={onBackPress}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 60 }} />
        )}
      </View>

      {/* Center: Title */}
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Right Action */}
      <View style={styles.right}>
        {rightText ? (
          <TouchableOpacity onPress={onRightPress}>
            <Text style={styles.rightText}>{rightText}</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 60 }} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.primary,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 2,
    alignItems: "center",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  backText: {
    fontSize: 16,
    color: "#fff",
  },
  rightText: {
    fontSize: 16,
    color: "#fff",
  },
});
