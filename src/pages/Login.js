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
import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import FBSDK, {LoginManager, GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import { iconsMap, iconsLoaded } from '../components/appIcons';


import Spinner from '../components/spinner';
import Logo from '../components/Logo';




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
    this.renderButton = this.renderButton.bind(this);
    this.fbAuth = this.fbAuth.bind(this);
  }
  state={
    showSpinner:true
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
            icon: iconsMap["bell"],
            title: "Bildirimler"
          },
          {
            label: "Mesajlar",
            screen: "Message",
            icon: iconsMap["message"],
            title: "Mesajlar"
          },
          {
            label: "Konum",
            screen: "Map",
            icon: iconsMap["map"],
            title: "Konum",
            color:"red"
          },
          {
            label: "Chat",
            screen: "Chat",
            icon: iconsMap["cog"],
            title: "Chat"
          },
          {
            label: "UserProfile",
            screen: "UserProfile",
            icon: iconsMap["cog"],
            title: "UserProfile"
          }
      ],
      animationType: Platform.OS === "ios" ? "fade" : "fade",
      tabsStyle: {
        tabBarButtonColor: "#fff",
        tabBarSelectedButtonColor: 'fff',
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


  renderButton() {
    return (
      <TouchableOpacity
        onPress={this.clickLogin}
        style={styles.button}>
        <Text style={styles.buttonText}>Giriş</Text>
      </TouchableOpacity>);
  }

/*  ComponentDidMount() {
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
          this.firebaseRef = firebase.database().ref('users')
          this.firebaseRef.child(auth.uid).on('value', snap => {
            const user = snap.val()
            if (user != null) {
              this.firebaseRef.child(auth.uid).off('value')
              this.goToHome(user)
            }
          })
      }
      else {
        this.setState({ showSpinner: false })
      }
    })
  }
  authenticate=(token) =>{
    const provider = firebase.auth.FacebookAuthProvider
    const credential = provider.credential(token)
    return firebase.auth().signInWithCredential(credential)
  }
  createUser=(uid, userData) => {
    const defaults = {
      uid,
    }
    firebase.database().ref('users').child(uid).update({ ...userData, ...defaults })
  }
  login=async() => {
    this.setState({ showSpinner: true })
    const ADD_ID = '118844592179080'
    const options = {
      permissions: ['public_profile'],
    }
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
    if (type === 'success') {
      const fields =[ 'id', 'first_name']
      const response= await fetch(`http://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`)
      const userData= await response.json()
      const {uid}= await this.authenticate(token)

      this.createUser(uid,userData)
    }
    else {
      this.setState({showSpinner: false})
    }
  }*/
  fbAuth(){
      LoginManager.logInWithReadPermissions(['public_profile']).then(
        () => {

          const infoRequest = new GraphRequest(
            "/me?fields=id,name,last_name,link,email,first_name,gender", 
            null,
            this.goToHome,
        );
        new GraphRequestManager().addRequest(infoRequest).start();
        }
      )
     

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
          <View>
          <TouchableOpacity
            onPress={() => this.fbAuth()}
            style={styles.button}>
            <Text style={styles.buttonText}>Facebook Login</Text>
          </TouchableOpacity>
          </View>
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
