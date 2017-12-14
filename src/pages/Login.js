import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from 'firebase';
import Spinner from '../components/spinner';
import Logo from '../components/Logo';

export default class Login extends Component<{}> {
state={ email: '', password: '', loading: false };
clickLogin() {
  this.setState({ loading: true });
  const { email, password } = this.state;

  if (email === '' || password === '') {
    this.setState({ loading: false });
    Alert.alert(
      'Mesaj',
      'Her İki Alanda Dolu Olmalı!',
      [
        { text: 'Tamam', onPress: () => null }
      ]
    );
  }
  else {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.loginSucces.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.loginSucces.bind(this))
      .catch(this.loginFail.bind(this));
    });
  }
  }
    loginSucces() {
      console.log('başarılı');
      this.setState({ loading: false });
    }
    loginFail() {
      console.log('hatalı');
        this.setState({ loading: false });
      Alert.alert(
        'Mesaj',
        'Kullanıcı Adı veya Şifre hatalı!!',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
    }
    renderButton() {
      if (!this.state.loading) {
        return (<TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={this.clickLogin.bind(this)}>Giriş</Text>
        </TouchableOpacity>);
      }
      return <Spinner size="small" />;
    }


render() {
  return (
      <View style={styles.container}>
          <Logo />
          <View style={styles.container}>
        <TextInput
        style={styles.inputBox}
        placeholder="E-mail"
        placeholderTextColor="#ffffff"
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        />
        <TextInput
        secureTextEntry
        style={styles.inputBox}
        placeholder="Şifre"
        placeholderTextColor="#ffffff"
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        />
        {this.renderButton()}

          </View>
          <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>
          Hesabınız yok mu?
          </Text>

          <Text >
          Kayıt Ol
          </Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center'
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
  }

  });
