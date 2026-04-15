import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (email: string, password: string) => Promise<any>;
  register: (name: string, email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  hydrate: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,

  login: async (email, password) => {
    set({ loading: true });

    try {
      // replace with API
      const fakeResponse = {
        user: { id: 1, name: "Hammad", email },
        token: "token123",
      };

      await AsyncStorage.setItem("token", fakeResponse.token);
      await AsyncStorage.setItem("user", JSON.stringify(fakeResponse.user));

      set({
        user: fakeResponse.user,
        token: fakeResponse.token,
        loading: false,
      });

      return { success: true };
    } catch (e) {
      set({ loading: false });
      return { success: false };
    }
  },

  register: async (name, email, password) => {
    set({ loading: true });

    try {
      const fakeResponse = {
        user: { id: 1, name, email },
        token: "token123",
      };

      await AsyncStorage.setItem("token", fakeResponse.token);
      await AsyncStorage.setItem("user", JSON.stringify(fakeResponse.user));

      set({
        user: fakeResponse.user,
        token: fakeResponse.token,
        loading: false,
      });

      return { success: true };
    } catch (e) {
      set({ loading: false });
      return { success: false };
    }
  },

  logout: async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");

    set({ user: null, token: null });
  },

  hydrate: async () => {
    const token = await AsyncStorage.getItem("token");
    const user = await AsyncStorage.getItem("user");

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
      });
    }
  },
}));