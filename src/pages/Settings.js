import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";

export default class Settings extends Component {
  render() {
    return (
      <View>
      <TextInput
        style={styles.button}
        placeholder="Ayarlar"
        placeholderTextColor="#ffffff"
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 11
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
   inputBox: {
      width: 300,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#ffffff',
      marginVertical: 10
    },
});
