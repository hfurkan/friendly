import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  ActivityIndicator
} from 'react-native';
import * as  firebase from 'firebase';
import Spinner from '../components/spinner';
import Logo from '../components/Logo';
import { iconsMap, iconsLoaded } from '../components/appIcons';
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";


export default class Login extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test1@test.com',
      password: '123456',
    };
    this.clickLogin = this.clickLogin.bind(this);
    this.loginSucces = this.loginSucces.bind(this);
    this.loginSucces1 = this.loginSucces1.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.loginFail = this.loginFail.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentWillMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.goToHome()
        console.log('ifs');
      } else {
        console.log('else');
      }
    });
  }

  clickLogin() {
    const { email, password } = this.state;

    if (email === '' || password === '') {
      Alert.alert(
        'Mesaj',
        'Her İki Alanda Dolu Olmalı!',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
         this.loginSucces()
        })
        .catch(() => {
         this.loginFail()
        });
    }
  }

  loginSucces() {
    this.goToHome
  }
  loginSucces1() {
    this.goToHome();
  }

  goToHome() {
    console.log("goto");
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Anasayfa",
          screen: "tab_Home",
          icon: iconsMap["home"],
          title: "Anasayfa"
        },
        {
          label: "Profil",
          screen: "Profile",
          icon: iconsMap["v-card"],
          title: "Profile"
        },
         {
            label: "Bildirimler",
            screen: "Notifications",
            icon: iconsMap["flash"],
            title: "Bildirimler"
          },
          {
            label: "Ayarlar",
            screen: "Message",
            icon: iconsMap["cog"],
            title: "Message"
          },
          {
            label: "Konum",
            screen: "Map",
            icon: iconsMap["cog"],
            title: "Konum"

          }
      ],
      animationType: Platform.OS === "ios" ? "fade" : "fade",
      tabsStyle: {
        tabBarButtonColor: "#797979",
        tabBarSelectedButtonColor: 'blue',
        tabBarBackgroundColor: "white",
        tabFontFamily: "Avenir-Medium",
        tabBarTextFontFamily: "Avenir-Medium",

      },
      appStyle: {
        navBarHidden: true,
        statusBarTextColorSchemeSingleScreen: 'light'
      }
    })
  }

  loginFail() {
    console.log('hatalı');
    Alert.alert(
      'Mesaj',
      'Kullanıcı Adı veya Şifre hatalı!!',
      [
        { text: 'Tamam', onPress: () => null }
      ]
    );
  }

  renderButton() {
    return (
      <TouchableOpacity
        onPress={this.clickLogin}
        style={styles.button}>
        <Text style={styles.buttonText}>Giriş</Text>
      </TouchableOpacity>);


  }

  render() {


    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder="E-mail"
            placeholderTextColor="#ffffff"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            secureTextEntry
            style={styles.inputBox}
            placeholder="Şifre"
            placeholderTextColor="#ffffff"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          {this.renderButton()}

        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>
            Hesabınız yok mu?
          </Text>

          <Text >
            Kayıt Ol
          </Text>
        </View>
      </View>
    );


  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center'
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  }

});
