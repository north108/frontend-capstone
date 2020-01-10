import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from '../../styles/color'

interface InputCustomProps {
  labelText: string,
  labelTextSize: number
}

class InputField extends Component {
  render() {
    const { 
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle
     } = this.props;

     const color = labelColor || colors.white;
     const fontSize = labelTextSize || 14;
     const inputColor = textColor || colors.white;
     const borderBottom = borderBottomColor || 'transparent';
    return (
      <View style={styles.wrapper}>
        <Text style={[{ color, fontSize, }, styles.label]}>{labelText}</Text>
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputField
          ]}
          secureTextEntry={inputType === 'password'}
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
    paddingTop: 5,
    paddingBottom: 5
  }
});

export default InputField;