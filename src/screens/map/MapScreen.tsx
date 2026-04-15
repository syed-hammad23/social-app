import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { locationService } from "../../services/locationService";

type LocationType = {
  latitude: number;
  longitude: number;
};

export default function MapScreen() {
  const [location, setLocation] = useState<LocationType | null>(null);

  const getLocation = async () => {
    const hasPermission = await locationService.requestPermission();

    if (!hasPermission) return;

    const loc = await locationService.getCurrentLocation();
    setLocation(loc);
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation
    >
      <Marker coordinate={location} title="You are here" />
    </MapView>
  );
}