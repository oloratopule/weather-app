import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import SearchBar from './SearchBar';

export default function Weather({ weatherData, fetchWeatherData }) {
  const haze = require('../assets/haze.jpg');
  const rainy = require('../assets/rain.jpg');
  const snow = require('../assets/snow.jpg');
  const cloudy = require('../assets/clouds.jpg');
  const sunny = require('../assets/sunset.jpg');

  const [BackgroundImage, setBackgroundImage] = useState(null);

  const {
    weather,
    name,
    main: { temp, humidity },
    wind: { speed },
  } = weatherData;
  const [{ main }] = weather;

  useEffect(() => {
    setBackgroundImage(getBackgroundImage('main'));
  }, [weatherData]);

  function getBackgroundImage() {
    if (weather === 'Snow') return snow;
    if (weather === 'Clear') return sunny;
    if (weather === 'Rain') return rainy;
    if (weather === 'Haze') return haze;
    if (weather === 'Cloudy') return cloudy;
    return sunny;
  }
  let textColor = BackgroundImage !== sunny ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        style={styles.background}
        resizeMode="cover">
        <SearchBar />

        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              ...styles.headerText,
              fontWeight: 'bold',
              fontSize: 46,
              color: 'white',
            }}>
            {name}
          </Text>
          <Text
            style={{
              ...styles.headerText,
              fontWeight: 'bold',
              color: 'white', fontSize: 20
            }}>
            {main}
          </Text>
          <Text style={{ ...styles.headerText, color: 'white', fontSize: 15 }}>
            {temp} °C
          </Text>
         
            <Text style={{ fontSize: 20, color: 'white',  fontWeight: 'bold' }}>Humidity</Text>
            <Text style={{ fontSize: 15, color: 'white'}}>{humidity}%</Text>
          

          
            <Text style={{ fontSize: 20, color: 'white',   fontWeight: 'bold'  }}>WindSpeed</Text>
            <Text style={{ fontSize: 15, color: 'white' }}>{speed} m/s</Text>
         
        </View>

       
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'white',
  },
  headerText: {
    fontSize: 36,
    marginTop: 10,
    color: 'white',
  },
  background: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  // extraInfo: {
  //   flexDirection: 'row',
  //   marginTop: 20,
  //   justifyContent: 'space-between',
  //   padding: 10,
  // },
  // info: {
  //   width: Dimensions.get('screen').width,
  //   padding: 10,
  //   borderRadius: 15,
  //   justifyContent: 'center',
  // },
});
