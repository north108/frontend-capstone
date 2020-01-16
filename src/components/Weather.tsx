import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../styles/color/WeatherConditions';
import colors from "../styles/color";

const Weather = ({ weather, temperature, outfit }) => {

  if (weather != null) {

    return (
     
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[weather].color }
        ]}
      >
        <Text style={styles.text}>
          Sweater Weather
        </Text>

        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={72}
            name={weatherConditions[weather].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.text}>{weatherConditions[weather].title}</Text>   
        </View>
        <Text style={styles.title}>Today's Outfit</Text>
      <View style={styles.bodyContainer}>
          <Text>
            {outfit.map((item, index)=>(
              <Text style={styles.text} key={index}>{item}{'\n'}</Text>
            ))}
          </Text>
        </View>

      </View>
    

    );
  } else {
    return (
      <View>
        <Text>Oh no, something went wrong</Text>
      </View>
    )
  };
};


const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingLeft: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  logo: {
    width: 52,
    height: 43,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15
  },
  text: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 25,
    color: colors.white,
    fontWeight: "300",
    textAlign: "center"
  }
});

export default Weather;