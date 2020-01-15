import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../styles/color/WeatherConditions';
import colors from "../styles/color";

const Outfits = {
  90: ['Tanktop', 'Shorts', 'Flipflops', 'Sunglasses'],
  80: ['Short Sleeved Top', 'Shorts', 'Sandels', 'Sunglasses'],
  70: ['Short Sleeved Top', 'Jeans', 'Sneakers'],
  60: ['Long Sleeved Top', 'Light Jacket', 'Pants', 'Sneakers'],
  50: ['Long Sleeved Top', 'Coat', 'Pants', 'Boots'],
  cold: ['Long Sleeved Top', 'Sweater', 'Winter Coat', 'Pants', 'Boots']
}

const Weather = ({ weather, temperature }) => {

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
          {/* <Text style={styles.subtitle}>
            {weatherConditions[weather].subtitle}
          </Text> */}
        </View>
        <View>
          
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
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
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    color: '#fff'
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