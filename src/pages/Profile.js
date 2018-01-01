import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity,TextInput, Form, Image,ImageBackground} from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import { BlurView, VibrancyView } from 'react-native-blur';



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
      <ImageBackground
      source={require('../images/furkan.jpg')}
      style={{ flex: 1, widht: undefined, height: undefined, alignItems: 'center', justifyContent: 'flex-start' }} >
        <View
        style={{
          height: 130,
          width: 130,
          borderRadius: 65,
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white' }} >

      <BlurView
      tint="white"
      intensity={50}
      style={...StyleSheet.absoluteFillObject,{position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,}}/>
          <Image
          style={{ height: 120, width: 120, borderRadius: 60 }}
          source={require('../images/furkan.jpg')}
          />
</View>

          <Text style={{ color: 'black', paddingTop: 18, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>  Hüseyin Furkan ÖZTÜRK </Text>
          <Text style={{ color: 'black', paddingTop: 18, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>Selçuk Üniversitesi </Text>
          <Text style={{ color: 'black', paddingTop: 18, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>Bilgisayar Mühendisliği </Text>
          <Text style={{ color: 'black', paddingTop: 18, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>18 Haziran 1996 </Text>
          <Text style={{ color: 'black', paddingTop: 18, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>Sivas </Text>

          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText} onPress={ ()=> this.clickLogout()}>ÇIKIŞ</Text>
          </TouchableOpacity>
        </ImageBackground>
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
  absolute: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
