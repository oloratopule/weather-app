import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SearchBar({ fetchWeatherData }) {
  const [cityName, setCityName] = useState('');

  return (
    <View style={styles.textInput}>
    <View>
      <TextInput
        placeholder="Enter City Name"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <FontAwesome5
      style={styles.icon}
        name="search-location"
        size={16}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 35,
    borderWidth: '1px',
    width: '300px',
    height: '40px',
    paddingLeft: '10px',
    marginBottom: '10px',
    borderRadius: 25,
    borderColor: 'lightgray',
    marginHorizontal: 10,
    marginVertical: 25,
  },
  icon:{
    marginLeft:'80%'
  }
});
