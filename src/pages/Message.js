import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity , TextInput ,FlatList, Image, Dimensions} from 'react-native';
import * as firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import Login from './Login';

export default class Mesaj extends Component {
  state={
    userList: []
  }
  componentWillMount() {

      firebase.database().ref().child('users').once('value', (snap) => {
        let userList = [];
        snap.forEach((user) => {
          const { first_name, id, uid } = user.val();
          userList.push({ first_name, id, uid })
        })
        this.setState({ userList })
      })
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
      data={this.state.userList}
      keyExtractor={(item,index)=>item.first_name}
      renderItem={({item})=>
      <Image style={{height:70,width: 70,borderRadius:35}} source={{uri:`https://graph.facebook.com/${item.id}/picture?height=200`}} />
    } />
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
   inputBox: {
      width: 300,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#ffffff',
      marginVertical: 10
    },
});
