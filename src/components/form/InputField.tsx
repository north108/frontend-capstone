import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from '../../styles/color'

class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType ==='text' || props.inputType ==='email')
    };
    
    this.toggleShowPassword = this.toggleShowPassword.bind(this)
  }

  toggleShowPassword() {
    this.setState ({
      secureInput: !this.state.secureInput
    });
  }

  render() {
    const { 
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      onChangeText
     } = this.props;
     const { secureInput } = this.state
     const color = labelColor || colors.white;
     const fontSize = labelTextSize || 14;
     const inputColor = textColor || colors.white;
     const borderBottom = borderBottomColor || 'transparent';
    return (
      <View style={styles.wrapper}>
        <Text style={[{ color, fontSize, }, styles.label]}>{labelText}</Text>
        {inputType ==='password' ? (  
          <TouchableOpacity
          style={styles.showButton}
          onPress={this.toggleShowPassword}
          >
            <Text style={styles.showButtonText}>
              {secureInput ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        ) : null }
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputField
          ]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    marginBottom: 10
  },
  label: { 
    fontWeight: "700", 
    marginBottom: 10 
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 4,
    paddingBottom: 4
  },
  showButton: {
    position: "absolute",
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: "700"
  }
});

export default InputField;