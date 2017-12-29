import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity,TextInput, Form, Image} from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";



export default class Profile extends Component {
  clickLogout() {
   firebase.auth().signOut();
   Navigation.startSingleScreenApp({
       screen: {
           screen: 'Login',
           title: 'Login',
           navigatorStyle: {},
       }

   });
 }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.profilepicWrap}>
          <Image
          style={styles.profilepic}
          source={require('../images/furkan.jpg')}
          />
          </View>
          <Text style={styles.inputBox}>E-mail   :  h.furkanoztrk@gmail.com</Text>
          <Text style={styles.inputBox}>Kullanıcı Adı    :  furkanoztrk</Text>
          <Text style={styles.inputBox}>Yaşadığı Şehir  :  Konya</Text>
          <Text style={styles.inputBox}>Doğum Tarihi    :  18 Haziran 1996</Text>
          <Text style={styles.inputBox}>Cep-Tel              :  05068062732</Text>
          <TouchableOpacity

            style={styles.button}>
            <Text style={styles.buttonText} onPress={ ()=> this.clickLogout()}>ÇIKIŞ</Text>
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
    padding: 5,
  },
  inputBox: {
    width: 350,
    height: 35,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
    textAlign: 'left',
  },
  profilepic: {
    padding: 1,
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,

  },
  profilepicWrap: {
    padding: 1,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,

  },button: {
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
});
