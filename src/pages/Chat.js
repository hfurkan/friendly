import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity , TextInput, FlatList,Image,Dimensions} from 'react-native';
import * as firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";

import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends Component{
  static navigatorStyle={
    tabBarHidden: true,
  }
  state={
    message: [],
  //  user: this.state.first_name,
  //  profile: this.state.id,

  }
  componentWillMount() {
  // const {user,profile}=this.state;
  // this.chatID= user.uid > profile.uid? user.uid+ '-' + profile.uid:profile.uid+ '-' +user.uid
    this.watchChat()

  }

  watchChat =() => {
    firebase.database().ref('messages').on('value', snap => {
      let messages=[]
      snap.forEach(message=>{
        messages.push(message.val())
      })
      messages.reverse()
      this.setState({ messages })
    })
  }

  onSend=(message) => {
  //  const {user,profile}=this.state
    relationMessage={}
    firebase.database().ref('messages').push({ ...message[0], createdAt: new Date().getTime(),
    })
  }
  render(){
    const {user,profile}=this.state
    const avatar = `https://graph.facebook.com/picture?height=80`
    return(
      <View style={{flex:1}}>
        <GiftedChat
          messages={this.state.messages}
        //  user={{_id:user.uid,avatar}}
          onSend={this.onSend}
          />

      </View>
    )
  }




}
