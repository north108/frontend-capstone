// source: https://dev.to/kris/airbnb-clone-with-react-native-part-2-login-screen-ui-3nn5
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LoggedOut from "./src/screens/LoggedOut";
import Login from "./src/screens/Login"
import MainScreen from './src/screens/MainScreen'
import Weather from './src/components/Weather'
import { WEATHER_API } from 'react-native-dotenv'



export default class App extends Component {

  state = {
    isLoggedIn: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  }

  componentDidMount(){
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

    if (this.state.isLoggedIn) {
      return <Weather weather={weatherCondition} temperature={temperature} />
    } else {
      return <LoggedOut />
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
