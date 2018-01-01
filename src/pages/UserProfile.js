import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity , TextInput, FlatList,ImageBackground,Image,Dimensions} from 'react-native';
import * as firebase from 'firebase';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import { BlurView, VibrancyView } from 'react-native-blur';

const {width,height}=Dimensions.get('window');

export default class UserProfile extends Component{
  static navigatorStyle={
    tabBarHidden: true,
  }

    render() {
      return (
          <ImageBackground
          source={require('../images/kağan.jpg')}
            style={{ flex: 1, widht: undefined, height: undefined, alignItems: 'center', justifyContent: 'flex-start' }} >

          <BlurView
          tint="white"
          intensity={95}
          style={StyleSheet.absoluteFill,{position:'absolute',left:0,right:0,top:0,bottom:0}}/>

          <View
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
            marginTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white' }} >

            <Image
              style={{ height: 120, width: 120, borderRadius: 60 }}
              source={require('../images/kağan.jpg')} />

          </View>

          <Text style={{ color: 'white', paddingTop: 20, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>  Kağan Balga </Text>
          <Text style={{ color: 'white', paddingTop: 20, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>Selçuk Üniversitesi </Text>
          <Text style={{ color: 'white', paddingTop: 20, fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20 }}>Bilgisayar Mühendisliği </Text>

          </ImageBackground>

      );
    }
}
