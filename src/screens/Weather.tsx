import React from 'react';
import { Component } from "react";

import { View, Text, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../styles/color/WeatherConditions';
import colors from "../styles/color";
import { WEATHER_API } from 'react-native-dotenv'


const Outfits = {
  90: ['Tanktop', 'Shorts', 'Flipflops', 'Sunglasses'],
  80: ['Short Sleeved Top', 'Shorts', 'Sandels', 'Sunglasses'],
  70: ['Short Sleeved Top', 'Jeans', 'Sneakers'],
  60: ['Long Sleeved Top', 'Light Jacket', 'Pants', 'Sneakers'],
  50: ['Long Sleeved Top', 'Coat', 'Pants', 'Boots'],
  cold: ['Long Sleeved Top', 'Sweater', 'Winter Coat', 'Pants', 'Boots']
}


 export default class Weather extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      temperature: null,
      weatherCondition: null
    }
  }

  componentDidMount(){
    // if doesn't work, hard code seattle
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
        console.log('HEEEERE')
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
      },
      error => {
        this.setState({
          error: 'Error getting weather conditions.'
        });
      }
    );
  }

  fetchWeather(lat, lon){
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${WEATHER_API}&units=imperial`
    )
    .then(response => response.json()
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
      });
    }));
  }

  makeOutfit = (temperature) => {
    let outfit = null
    if(temperature >= 90) {
      outfit = Outfits[90]
    } else if(temperature <= 90 && temperature >=80) {
        outfit = Outfits[80]
    } else if(temperature <= 80 && temperature >=70) {
        outfit = Outfits[70]
    } else if(temperature <= 70 && temperature >=60) {
        outfit = Outfits[60]
    } else if(temperature <= 60 && temperature >=50) {
        outfit = Outfits[50]
    } else if(temperature < 50) {
        outfit = Outfits['cold']
    }
    return outfit
  }


  render(){ 
    const { temperature, weatherCondition } = this.state
    // let outfit = this.callFunction
    let outfit = this.makeOutfit(temperature)
  if (weatherCondition != null) {

    return (
     
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[weatherCondition].color }
        ]}
      >
        <Text style={styles.text}>
          Sweater Weather
        </Text>

        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={72}
            name={weatherConditions[weatherCondition].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.text}>{weatherConditions[weatherCondition].title}</Text>   
        </View>

        <Text style={styles.title}>Today's Outfit</Text>
        
        <View>
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
 }


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

