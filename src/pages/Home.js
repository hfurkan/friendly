import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import Note from './Note';

export default class Home extends Component {

constructor(props) {
  super(props);
  this.state = {
    noteArray: [],

    noteText: '',

  };
}

  render() {
    let notes = this.state.noteArray.map((val, key) => {
    return <Note key={key} keyval={key} val={val}
          deleteMethod={() => this.deleteNote(key)} />
  });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}> Note </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
        <View style={styles.note}>
          <Text style={styles.noteText}>2017/12/19</Text>
          <Text style={styles.noteText}>Deneme Paylaşımı</Text>

          <TouchableOpacity onPress={this.deleteNote.bind(this)} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>Sil</Text>
          </TouchableOpacity>

          <TouchableOpacity /*onPress={this.addYorum.bind(this)}*/ style={styles.noteDelete2}>
            <Text style={styles.noteDeleteText}>Yorum Yap</Text>
          </TouchableOpacity>

        </View>
          {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TextInput
           style={styles.textInput}
           onChangeText={(noteText) => this.setState({ noteText })}
           value={this.state.noteText}
           placeholder='Paylaşım yapınız'
           placeholderTextColor='white'
           underlineColorAndroid='transparent'>
          </TextInput>

        </View>

        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>



      </View>
    );
  }
    addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() +
        "/" + (d.getMonth() + 1) +
        "/" + d.getDate(),
        'note': this.state.noteText
      });

      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' });
    }
    }

    deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 415,
    backgroundColor: '#1c313a',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 18,
    padding: 15,
    color: 'white',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 75,
    backgroundColor: '#1c313a',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
/*   button: {
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
        width: 100,
        backgroundColor: '#2980b9',
        borderRadius: 25,
        marginVertical: 5,
        paddingVertical: 5
      },
      buttonText: {
        fontSize: 10,
        fontWeight: '100',
        color: '#ffffff',
        textAlign: 'center'
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
        bottom: 75,
        backgroundColor: '#1c313a',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
      },
      noteDelete2: {
        position: 'absolute',
        zIndex: 11,
        right: 65,
        bottom: 75,
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
      note: {
        position: 'relative',
        padding: 40,
        paddingRight: 240,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
      },
});
