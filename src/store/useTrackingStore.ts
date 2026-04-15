import { create } from "zustand";

type TrackingState = {
  isTracking: boolean;
  setTracking: (value: boolean) => void;
};

export const useTrackingStore = create<TrackingState>((set) => ({
  isTracking: false,
  setTracking: (value) => set({ isTracking: value }),
}));