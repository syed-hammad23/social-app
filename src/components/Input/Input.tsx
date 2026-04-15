import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

import { colors } from "../../theme/colors";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  isSearch?: boolean;
  onSearchPress?: () => void;
};

export default function Input({
  label,
  error,
  isSearch = false,
  onSearchPress,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Label */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Input Box */}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focused,
          !!error && styles.errorBorder,
        ]}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor="#9CA3AF"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Search Button */}
        {isSearch && (
          <TouchableOpacity onPress={onSearchPress} style={styles.searchBtn}>
            <Text style={styles.searchText}>🔍</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },

  label: {
    marginBottom: 6,
    fontSize: 14,
    color: "#111827",
    fontWeight: "500",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    color: "#111827",
  },

  focused: {
    borderColor: colors.primary,
  },

  errorBorder: {
    borderColor: "#EF4444",
  },

  searchBtn: {
    paddingHorizontal: 8,
  },

  searchText: {
    fontSize: 16,
  },

  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "#EF4444",
  },
});