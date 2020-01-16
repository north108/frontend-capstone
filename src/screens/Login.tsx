import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Alert, Button } from "react-native";
import colors from "../styles/color";
import InputField from "../components/form/InputField"
import NextButton from "../components/buttons/NextButton"


export default class Login extends Component{

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      location: '',
      id: '',
      error: ''
    }
  }

  handleEmailChange = email => {
    this.setState({
      email: email
    });
  };

  handlePasswordChange = password => {
    this.setState({
      password: password
    })
  }

  Login = async() => {
    fetch('http://localhost:3200/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => response.json())
    .then((response) => {
      if(typeof(response.message) != 'undefined'){
        Alert.alert('Error', `Error: ${response.message}`);
      } else {
        this.setState({
          id: response._id
        });
        Alert.alert('Welcome', 'You have succesfully logged iin');
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField 
              labelText='EMAIL ADDRESS'
              onChangeText={this.handleEmailChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType='email'
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText="PASSWORD" 
              onChangeText={this.handlePasswordChange}
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="password"  
              customStyle={{marginBottom:30}}

            />
          </ScrollView>
          <NextButton  handlePress={this.Login.bind(this)}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  }
  
});