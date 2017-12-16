import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { iconsMap, iconsLoaded } from './src/components/appIcons';
import { registerScreens } from "./src/components/Navigation";
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";

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
