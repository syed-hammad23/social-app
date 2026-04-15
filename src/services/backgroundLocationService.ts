import BackgroundService from "react-native-background-actions";
import { locationService } from "./locationService";
import { useTrackingStore } from "../store/useTrackingStore";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const task = async () => {
  while (BackgroundService.isRunning()) {
    const loc = await locationService.getCurrentLocation();

    console.log("Background Location:", loc);

    await sleep(10000);
  }
};

export const startBackgroundTracking = async () => {
  if (BackgroundService.isRunning()) return;

  await BackgroundService.start(task, {
    taskName: "LocationTracking",
    taskTitle: "Tracking Location",
    taskDesc: "App is tracking your location",
    taskIcon: {
      name: "ic_launcher",
      type: "mipmap",
    },
  });

  // ✅ update global state
  useTrackingStore.getState().setTracking(true);
};

export const stopBackgroundTracking = async () => {
  if (!BackgroundService.isRunning()) return;

  await BackgroundService.stop();

  // ✅ update global state
  useTrackingStore.getState().setTracking(false);
};