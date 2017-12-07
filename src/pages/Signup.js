import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          <Logo />
          <Form type="Kayıt Ol" />
          <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>
          Hesabınız var mı?
          </Text>
          <Text onPress={() => Actions.login()} style={styles.signupButton}>
          Giriş Yapınız
          </Text>

          </View>
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});
