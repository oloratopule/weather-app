import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

// You can import from local files

import Weather from './Screens/Weather';
import SearchBar from './Screens/SearchBar';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default function App() {
  const API_Key = 'd85fb07a38b3bb76c200412aa9c05014';

  

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
    setLoaded(false);

    const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_Key}`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
    setLoaded(true);
  }

  useEffect(() => {
    fetchWeatherData('Kimberley');
    console.log(weatherData);
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={36} />
      </View>
    );
  } else if (weatherData === null) {
    return (
      <View>
        <SearchBar fetchWeatherData={fetchWeatherData} />
        <Text style={styles.primaryText}></Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     <SearchBar fetchWeatherData={fetchWeatherData} />
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
  },
  primaryText:{
    margin:20,
    fontSize:28,
  },
})
