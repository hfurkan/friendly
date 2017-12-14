

import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text
} from 'react-native';
import firebase from 'firebase';
import Login from './src/pages/Login';
import Spinner from './src/components/spinner';

export default class App extends Component<{}> {
  state= { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp(
      {
    apiKey: 'AIzaSyDhhNgb1cGC8MQNvgwen6X3IQPwZ6I7rH0',
    authDomain: 'giris-758a8.firebaseapp.com',
    databaseURL: 'https://giris-758a8.firebaseio.com',
    projectId: 'giris-758a8',
    storageBucket: 'giris-758a8.appspot.com',
    messagingSenderId: '501599023554'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}
  clickLogout() {
      firebase.auth().signOut();
  }
  renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={this.clickLogout.bind(this)}>Çıkış</Text>
        </TouchableOpacity>
      );
      case false:
        return (
          <Login />
        );
    default:
        return (
          <View>
          <Spinner size="large" />
          </View>
        );
  }
}
render() {
  return (
    <View style={styles.container}>
    {this.renderContent()}
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
