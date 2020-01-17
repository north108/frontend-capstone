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


  onLogin = async() => {
    fetch('http://localhost:3200/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    }).then((response) => response.json())
      .then(() => {
        Alert.alert('Welcome', 'You have succesfully logged in');
        this.props.navigation.navigate('App')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  goToSignup = () => this.props.navigation.navigate('Signup')

  render() {
    return(
      <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            {/* <Text style={styles.loginHeader}>Login</Text> */}
          
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
          <Button title='Login' color="#f194ff" onPress={this.onLogin}  />
          {/* <RoundedButton
          text='Create an Account'
          // textColor={colors.white}
          backgroundColor={colors.white}
         /> */}
          <Button title='Go to Signup' color="#f194ff" onPress={this.goToSignup}/>
        </View>
      </KeyboardAvoidingView>
    )
   }

  // onLogin = async() => {
  //   const{ email, password} = this.state

  //   try{
  //     if (email.length > 0 && password.length > 0) {
  //       this.props.navigation.navigate('App')
  //     }
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  // onLogin = async() => {
  //   fetch('http://localhost:3200/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //   }).then((response) => response.json())
  //   .then((response) => {
  //     if(typeof(response.message) != 'undefined'){
  //       Alert.alert('Error', `Error: ${response.message}`);
        
  //     } else {
  //       this.setState({
  //         id: response._id
  //       });
  //       this.props.navigation.navigate('App')
  //       Alert.alert('Welcome', 'You have succesfully logged in');
  //     }
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }

  // goToSignup = () => this.props.navigation.navigate('Signup')

  // render() {
  //   return (
  //     <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
  //       <View style={styles.scrollViewWrapper}>
  //         <ScrollView style={styles.scrollView}>
  //           <Text style={styles.loginHeader}>Login</Text>
  //           <InputField 
  //             labelText='EMAIL ADDRESS'
  //             onChangeText={this.handleEmailChange}
  //             labelTextSize={14}
  //             labelColor={colors.white}
  //             textColor={colors.white}
  //             borderBottomColor={colors.white}
  //             inputType='email'
  //             customStyle={{marginBottom:30}}
  //           />
  //           <InputField 
  //             labelText="PASSWORD" 
  //             onChangeText={this.handlePasswordChange}
  //             labelTextSize={14} 
  //             labelColor={colors.white} 
  //             textColor={colors.white} 
  //             borderBottomColor={colors.white} 
  //             inputType="password"  
  //             customStyle={{marginBottom:30}}

  //           />
  //         </ScrollView>
  //         {/* <NextButton  handlePress={this.Login.bind(this)}/> */}
  //         <Button title='Login' onPress={this.onLogin} color="#f194ff" />
  //         {/* <RoundedButton
  //         text='Create an Account'
  //         // textColor={colors.white}
  //         backgroundColor={colors.white}
  //        /> */}
  //         <Button title='Go to Signup' onPress={this.goToSignup} color="#f194ff"/>
  //       </View>
  //     </KeyboardAvoidingView>
  //   );
  // }
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