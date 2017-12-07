import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Image
          style={{ width: 40, height: 70 }}
          source={require('../images/logo1.jpg')}
      />
      <Text style={styles.logoText}>Bitirme Projesi</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)'
  }
});
