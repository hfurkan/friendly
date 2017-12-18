import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import { iconsMap, iconsLoaded } from '../components/appIcons';

export default class Note extends Component {

  render() {
    return (
        <View key={this.props.keyval} style={styles.note}>
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>Sil</Text>
          </TouchableOpacity>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 40,
    paddingRight: 240,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed'
  },
  begen: {
    padding: 20,
    paddingRight: 200,
    borderBottomWidth: 2,
    borderBottomColor: 'blue'
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63'
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: 'white'
  },

});
