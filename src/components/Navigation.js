import React from "react";
import { Navigation } from "react-native-navigation";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Message from "../pages/Message";
import Maps from '../pages/Map';
import Chat from '../pages/Chat';
import UserProfile from '../pages/UserProfile';





export function registerScreens() {
  Navigation.registerComponent("tab_Home", () => Home);
  Navigation.registerComponent("Profile", () => Profile);
  Navigation.registerComponent("Message", () => Message);
  Navigation.registerComponent("Notifications", () => Notifications);
  Navigation.registerComponent("Map", () => Maps);
  Navigation.registerComponent("Chat", () => Chat);
  Navigation.registerComponent("UserProfile", () => UserProfile);
  Navigation.registerComponent("Login", () => Login);

}
