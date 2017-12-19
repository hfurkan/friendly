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

          <TouchableOpacity /*onPress={this.addYorum.bind(this)}*/ style={styles.noteDelete2}>
            <Text style={styles.noteDeleteText}>Yorum Yap</Text>
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
    borderBottomColor: 'black'
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63'
  },
  noteDelete: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 60,
    backgroundColor: '#1c313a',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  noteDeleteText: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
/*  button: {
       width: 50,
       backgroundColor: '#1c313a',
       borderRadius: 50,
       zIndex: 11,
       right: -120,
       bottom: 75,
       height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       elevation: 5
     },
     buttonText: {
       fontSize: 10,
       color: '#ffffff',
       textAlign: 'center'
     },*/
     button: {
       backgroundColor: '#2980b9',
       borderRadius: 25,
       marginVertical: 5,
       paddingVertical: 5,
       position: 'absolute',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10,
       top: 10,
       bottom: 10,
       right: 10,
       width: 40,
       height: 90,
     },
     buttonText: {
       paddingLeft: 20,
       borderLeftWidth: 10,
       borderLeftColor: '#E91E63'
     },
     noteDelete2: {
       position: 'absolute',
       zIndex: 11,
       right: 65,
       bottom: 60,
       backgroundColor: '#1c313a',
       width: 50,
       height: 50,
       borderRadius: 50,
       alignItems: 'center',
       justifyContent: 'center',
       elevation: 5
     },
});
