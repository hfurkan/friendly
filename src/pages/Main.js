import React, { Component } from 'react';
import { Platform,
        StyleSheet,
        View,
        Text,
        TouchableOpacity,
        TextInput,
        ScrollView
      } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> FURKAN </Text>
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
  }
});
