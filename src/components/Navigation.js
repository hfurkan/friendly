import React from "react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";


import { Navigation } from "react-native-navigation";



export function registerScreens() {
  Navigation.registerComponent("tab_Home", () => Home);
  Navigation.registerComponent("Login", () => Login);
  Navigation.registerComponent("Profile", () => Profile);
  Navigation.registerComponent("Settings", () => Settings);
  Navigation.registerComponent("Notifications", () => Notifications);
}
