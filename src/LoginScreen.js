/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  AsyncStorage,
  View,
  Alert,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import Button from './common/Button';
import DefaultInput from './UI/DefaultInput/DefaultInput';
import HeadingText from './UI/HeadingText/HeadingText';
import MainText from './UI/MainText/MainText';
import backgroundImage from './assets/sublimelight.jpg';
import ButtonWithBackground from './UI/ButtonWithBackground/ButtonWithBackground';

type Props = {};
export default class LoginScreen extends Component<Props> {
  // state = {
  //   username: 'a', 
  //   password: ''
  // };
  constructor(props){
    super(props);
    Dimensions.addEventListener("change", (dims) => {
      this.setState({
          viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"
      })

  });
  }
  state = {
    viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
    authMode: 'login',
    controls: {
        email: {
            value: '',
            valid: true,
            validationRules: {
                isEmail: true
            }
        },
        password: {
            value: '',
            valid: true,
            validationRules: {
                minLength: 6
            }
        },
        confPassword: {
            value: '',
            valid: true,
            validationRules: {
                equalTo: "password"
            }
        }
    }
}
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      header: null
    };
  };

  // onPress = () => {
  //   console.log(this.state);
  //   // Alert.alert(this.state.username);
  //   this.props.navigation.navigate('Dashboard');
  // }
  onChangehandler = (key, value) => {
    this.setState(prevState => {
        return {
            ...prevState.controls,
            [key]: {
                ...prevState.controls[key],
                value: value
            }
        }
    })
}

gotoSignUp = () => {
  this.props.navigation.navigate('SignUp');
}
_signInAsync = async () => {
  await AsyncStorage.setItem('userToken', 'abc');
  this.props.navigation.navigate('Dashboard');
};
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText style={{color: '#fff'}}>Get Started !</HeadingText>
                    </MainText>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            placeholder="Enter Your Username"
                            style={styles.input}
                            onChangeText={(val) => this.onChangehandler('email', val)}
                            autoCorrect={false}
                            autoCapitalize="none"
                            // keyboardType="email-address"
                        />
                        <View
                            style={
                                this.state.viewMode === 'portrait' || this.state.authMode === 'login' 
                                ? styles.portraitpwContainerDirection 
                                : styles.landscapepwContainerDirection
                            }>
                            <View style={
                                this.state.viewMode === 'portrait' || this.state.authMode === 'login' ? styles.portraitpwWrapperWidth 
                                : styles.landscapepwWrapperWidth
                            }>
                                <DefaultInput
                                    placeholder="Enter Your Password"
                                    style={styles.input}
                                    onChangeText={(val) => this.onChangehandler('password', val)}
                                    secureTextEntry
                                />
                            </View>
                            {/* {confirmPass} */}
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    <ButtonWithBackground color="#e83e8c" onPress={this._signInAsync}>Sign in</ButtonWithBackground>
                    {/* <Text style={{color: '#fff', marginTop: 25}} onPress={this.gotoSignUp}>Don't have account? Sign up</Text> */}
                </View>
            </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    // width: "80%",
  },
  // input: {
  //   flex: 1,
  //   // flexDirection: 'row',
  //   justifyContent: "center",
  //   textAlign: "center",
  //   width: "100%",
  //   marginLeft: "10%",
  //   marginRight: "10%"
  // },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    backgroundColor: "yellow"
  },
  start: {
    textAlign: "center",
    color: "#333333",
    // marginBottom: 5,
    backgroundColor: "green"
  },
  modalView: {
    flex: 1,
    justifyContent: "flex-end"
  },
  inputContainer: {
    width: "80%"
},
inputContainer: {
  width: "80%"
},
input: {
    // backgroundColor: "#eee",
    borderColor: "#bbb",
    borderWidth: 0
},
backgroundImage: {
    width: "100%",
    flex: 1
},
portraitpwContainerDirection: {
    flexDirection: "column",
    justifyContent: "flex-start"
},
portraitpwWrapperWidth: {
    width: "100%"
},
landscapepwContainerDirection: {
    flexDirection: "row",
    justifyContent: "space-between"
},
landscapepwWrapperWidth: {
    width: "45%"
},
});
