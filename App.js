
import React from 'react';
import { View } from 'react-native';
import WeatherScreen from './Src/Screens/WeatherScreen';
//Navigation
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <WeatherScreen />
    </View>
  );
};

export default App;
