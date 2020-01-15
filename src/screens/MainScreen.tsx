import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Image } from "react-native";
import colors from "../styles/color";



export default class MainScreen extends Component{
  render() {
    return(
      <View style={styles.wrapper}>
        <View style ={styles.welcomeWrapper}>
        <Image 
          style={styles.logo}
          source={require('../img/partly-sunny.png')}
         />
        <Text style={styles.welcomeText}>
          Sweater Weather
        </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 10,
    padding: 20
  },
  logo: {
    width: 52,
    height: 43,
    marginTop: 5,
    marginBottom: 10
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  }
});