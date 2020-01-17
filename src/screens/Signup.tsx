import React from 'react'
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Alert, Button } from "react-native";
import colors from "../styles/color";
import InputField from "../components/form/InputField"

export default class Signup extends React.Component {

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
    });
  };

  handleFirstNameChange = firstName => {
    this.setState({
      firstName: firstName
    });
  };

  handleLastNameChange = lastName => {
    this.setState({
      lastName: lastName
    });
  };

  handlelocationChange = location => {
    this.setState({
      location: location
    });
  };

  goToLogin = () => this.props.navigation.navigate('Login')

  onSignUp = async() => {
    fetch('http://localhost:3200/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        location:this.state.location
      })
    }).then((response) => response.json())
      .then(() => {
        Alert.alert('Welcome', 'You have succesfully created an account');
        this.props.navigation.navigate('App')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return(
      <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            {/* <Text style={styles.loginHeader}>Login</Text> */}
            <InputField 
              labelText='FIRST NAME'
              onChangeText={this.handleFirstNameChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType='email'
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText='LAST NAME'
              onChangeText={this.handleLastNameChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType='email'
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText='CITY'
              onChangeText={this.handlelocationChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType='email'
              customStyle={{marginBottom:30}}
            />
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
          {/* <NextButton  handlePress={this.Login.bind(this)}/> */}
          <Button title='Create Account' color="#f194ff" onPress={this.onSignUp}  />
          {/* <RoundedButton
          text='Create an Account'
          // textColor={colors.white}
          backgroundColor={colors.white}
         /> */}
          {/* <Button title='Go to Signup' color="#f194ff" onPress={this.goToSignup}/> */}
        </View>
      </KeyboardAvoidingView>
    )
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
  },
  buttonWrapper: {
    padding: 15,
    display: "flex",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: 'center',
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    color: colors.green01
    // background=colors.white
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    color: colors.green01
  }
});