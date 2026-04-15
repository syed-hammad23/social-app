import Geolocation from "react-native-geolocation-service";
import { PermissionsAndroid, Platform } from "react-native";

class LocationService {
  async requestPermission(): Promise<boolean> {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }

  getCurrentLocation(): Promise<{
    latitude: number;
    longitude: number;
  }> {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => reject(error),
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    });
  }

  watchLocation(callback: (coords: any) => void) {
    return Geolocation.watchPosition(
      (position) => {
        callback(position.coords);
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
        interval: 5000,
      }
    );
  }

  clearWatch(id: number) {
    Geolocation.clearWatch(id);
  }
}

export const locationService = new LocationService();