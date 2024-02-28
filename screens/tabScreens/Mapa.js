import * as React from "react";
import { signOut } from "firebase/auth";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView, { Marker } from 'react-native-maps';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';

export default function Mapa() {
    const [origin, setOrigin] = React.useState({
        latitude: -16.39889,
        longitude: -71.535,
    });
    return (
        <View
        style={{ flex: 1, }}>
            <MapView
            style={{  flex: 1,   }}
            initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
            }}
            />
        </View>
    );
}