import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import colors from "../styles/color"
import RoundedButton from '../components/buttons/RoundedButton'

export default class LoggedOut extends Component{
  render () {
    return (
    <View style={styles.wrapper}>
      <View style={styles.welcomeWrapper}>
        <Image 
          style={styles.logo}
          source={require('../img/partly-sunny.png')}
         />
         <Text style={styles.welcomeText}>
           Welcome to Partly Sunny!
         </Text>
         <RoundedButton
          text='Login'
          backgroundColor={colors.white}
         />
         <RoundedButton
          text='Create an Account'
          // textColor={colors.white}
          backgroundColor={colors.white}
         />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01 
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 100,
    height: 80,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  }
});