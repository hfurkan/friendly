import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
    this.clickLogout = this.clickLogout.bind(this);
  }

  clickLogout() {
  //  firebase.auth().signOut();
  /*  this.props.navigator.resetTo({
      screen: 'Login',
      title: 'Giriş',
      passProps: {},
      animated: true,
      animationType: 'fade',
});*/
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.clickLogout()} >
          <Text style={styles.buttonText}>Çıkış</Text>
        </TouchableOpacity>
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
  }
});
