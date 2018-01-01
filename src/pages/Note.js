import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput , Image} from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import { iconsMap, iconsLoaded } from '../components/appIcons';

export default class Note extends Component {

  render() {
    return (
        <View key={this.props.keyval} style={styles.note}>
        <Image
        style={styles.profilepicWrap}
        source={require('../images/furkan.jpg')}
        />

          <Text style={styles.noteText2}>{this.props.val.note}</Text>
          <Text style={styles.noteText}>{this.props.val.date} Ardıçlı Mah. Selçuklu</Text>



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
    padding: 8,
    paddingLeft: 40,
    bottom: 1
  },
  noteText2: {
    paddingLeft: 40,
    color: 'white',
  },
  noteDelete: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 65,
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
       bottom: 65,
       backgroundColor: '#1c313a',
       width: 50,
       height: 50,
       borderRadius: 50,
       alignItems: 'center',
       justifyContent: 'center',
       elevation: 5
     },
     profilepicWrap: {
       position: 'absolute',
       zIndex: 11,
       left: 15,
       bottom: 65,
       width: 50,
       height: 50,
       borderRadius: 25,
       alignItems: 'center',
       justifyContent: 'center',
       elevation: 5
     },
});
