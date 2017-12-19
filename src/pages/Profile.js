import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity,TextInput, Form} from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";


export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.inputBox}>E-mail:    test1@test.com</Text>
          <Text style={styles.inputBox}>Kullanıcı Adı:    Deneme Kullanıcı</Text>
          <Text style={styles.inputBox}>Şehir:    Konya</Text>
          <Text style={styles.inputBox}>Yaş:   21</Text>
          <Text style={styles.inputBox}>Eğitim:   Üniversite</Text>
          <Text style={styles.inputBox}>Doğum Tarihi:   18/06/1996</Text>
          <Text style={styles.inputBox}>Cep-Tel:   05068062732</Text>

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
    padding: 75,
  },
  inputBox: {
    width: 350,
    height: 35,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
  },
});
