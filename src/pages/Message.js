import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity , TextInput, FlatList,Image,Dimensions} from 'react-native';
import * as firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import Login from './Login';
import Chat from './Chat';
const {width,height} = Dimensions.get('window');

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

      <View style={{alignItems: 'center', justifyContent: 'center', width: width - 40, paddingBottom: 10}}>
        <Text style={{color: 'white', fontWeight: 'bold' , fontSize: 22}} > Sohbet Ekranı </Text>
      </View>

      <FlatList
      data={this.state.userList}
      keyExtractor={(item, index) => item.first_name}
      renderItem={({ item }) =>

      <TouchableOpacity onPress={() => this.props.navigator.push({
        screen: 'Chat',
        title: 'Chat',
        //passProps: { user:this.state.user, this.state.profile}
      })}>
      <View style={{
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        padding: 5,
        width: width,
      }}>
      <Image style={{ height: 70, width: 70, borderRadius: 35 }} source={{ uri: `https://graph.facebook.com/${item.id}/picture?height=200` }} />

        <View style={{ alignItems: 'center', justifyContent: 'center' }} >

      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{item.first_name}</Text>

        </View>

      </View>
      <View style={{ width: width, height: 1, backgroundColor: 'white' }} />
      </TouchableOpacity>
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
