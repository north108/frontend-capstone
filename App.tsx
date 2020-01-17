// source: https://dev.to/kris/airbnb-clone-with-react-native-part-2-login-screen-ui-3nn5
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LoggedOut from "./src/screens/LoggedOut";
import Login from "./src/screens/Login"
import MainScreen from './src/screens/MainScreen'
import Weather from './src/screens/Weather'
import { WEATHER_API } from 'react-native-dotenv'
import AppContainer from './src/navigation'

const Outfits = {
  90: ['Tanktop', 'Shorts', 'Flipflops', 'Sunglasses'],
  80: ['Short Sleeved Top', 'Shorts', 'Sandels', 'Sunglasses'],
  70: ['Short Sleeved Top', 'Jeans', 'Sneakers'],
  60: ['Long Sleeved Top', 'Light Jacket', 'Pants', 'Sneakers'],
  50: ['Long Sleeved Top', 'Coat', 'Pants', 'Boots'],
  cold: ['Long Sleeved Top', 'Sweater', 'Winter Coat', 'Pants', 'Boots']
}


export default class App extends Component {

  state = {
    isLoggedIn: false,
    temperature: 0,
    weatherCondition: null,
    error: null,
    outfit: null
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
      // console.log(json);
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
      });
    }));
  }

  render() {
    const {
      temperature,
      weatherCondition
    } = this.state;

    if (this.state.isLoggedIn && temperature >= 90) {
      return <Weather weather={weatherCondition} temperature={temperature} outfit={Outfits[90]} />
    } else if (this.state.isLoggedIn && temperature <= 90 && temperature >=80) {
      return <Weather weather={weatherCondition} temperature={temperature} outfit={Outfits[80]} />
    } else if (this.state.isLoggedIn && temperature <= 80 && temperature >=70) {
      return <Weather weather={weatherCondition} temperature={temperature} outfit={Outfits[70]} />
    } else if (this.state.isLoggedIn && temperature <= 70 && temperature >=60) {
      return <Weather weather={weatherCondition} temperature={temperature} outfit={Outfits[60]} />
    } else if (this.state.isLoggedIn && temperature <= 60 && temperature >=50) {
      return <Weather weather={weatherCondition} temperature={temperature} outfit={Outfits[50]} />
    } else if (this.state.isLoggedIn && temperature <= 50){
      return <Weather weather={weatherCondition} temperature={temperature} outfit={Outfits['cold']} />
    }
    else {
      return <AppContainer />
    }
    // return <Login />;
    // // <LoggedOut />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
