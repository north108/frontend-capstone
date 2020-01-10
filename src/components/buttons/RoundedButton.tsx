import React, { Component } from 'react';
import propTypes from 'prop-types'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../../styles/color'

interface CustomProps {
  text: string,
  backgroundColor: string,
  // textColor: string
}

export default class RoundedButton extends Component<CustomProps> {
  render() {
    const { text, backgroundColor } = this.props
    return (
      <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    )
  }
}

// RoundedButton.propTypes = {
//   text: propTypes.string.isRequired
// };

const styles = StyleSheet.create ({
  wrapper: {
    padding: 15,
    display: "flex",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    color: colors.green01
  }
});