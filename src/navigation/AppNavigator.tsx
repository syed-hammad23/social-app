import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthStore } from "../store/useAuthStore";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

export default function AppNavigator() {
  const token = useAuthStore((state) => state.token);

  return (
    <NavigationContainer>
      {token ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}