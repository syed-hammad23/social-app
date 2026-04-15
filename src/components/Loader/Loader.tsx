import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type LoaderProps = {
  size?: "small" | "large";
  color?: string;
  fullScreen?: boolean;
};

export default function Loader({
  size = "large",
  color = colors.primary,
  fullScreen = false,
}: LoaderProps) {
  if (fullScreen) {
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }

  return (
    <View style={styles.inline}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  inline: {
    justifyContent: "center",
    alignItems: "center",
  },
});
