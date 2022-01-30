import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CarItem from "./components/CarItem/index";
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <CarItem />
      <StatusBar style="auto" />
    </View>
  );
}

