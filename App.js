import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import * as firebase from 'firebase';
import { iconsMap, iconsLoaded } from './src/components/appIcons';
import { registerScreens } from "./src/components/Navigation";
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";



const firebaseConfig = {
  apiKey: 'AIzaSyDhhNgb1cGC8MQNvgwen6X3IQPwZ6I7rH0',
  databaseURL: 'https://giris-758a8.firebaseio.com',
}
firebase.initializeApp(firebaseConfig);

registerScreens();

iconsLoaded.then(() => {
    startApp();
});

function startApp() {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Login',
            title: 'Login',
            navigatorStyle: {},
        }

    });
}
