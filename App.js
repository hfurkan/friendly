/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

const App = () => {
  return (

    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
        <Scene key="register" component={Signup} title="Kayıt Menüsü"  />
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App;
