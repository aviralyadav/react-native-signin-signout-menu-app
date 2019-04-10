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
  TouchableHighlight,
  View,
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import Button from "./common/Button";
import DefaultInput from "./UI/DefaultInput/DefaultInput";
import HeadingText from "./UI/HeadingText/HeadingText";
import MainText from "./UI/MainText/MainText";
import backgroundImage from "./assets/sublimelight.jpg";
import twitter from "./assets/twitter.png";
import fb from "./assets/fb.png";
import ButtonWithBackground from "./UI/ButtonWithBackground/ButtonWithBackground";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

var radio_props_gender = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" }
];

type Props = {};
export default class SignUpScreen extends Component<Props> {
  // state = {
  //   username: 'a',
  //   password: ''
  // };
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", dims => {
      this.setState({
        viewMode:
          Dimensions.get("window").height > 500 ? "portrait" : "landscape"
      });
    });
  }
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    authMode: "login",
    controls: {
      email: {
        value: "",
        valid: true,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: true,
        validationRules: {
          minLength: 6
        }
      },
      confPassword: {
        value: "",
        valid: true,
        validationRules: {
          equalTo: "password"
        }
      }
    }
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "A Nested Details Screen"),
      header: null
    };
  };

  onPress = () => {
    console.log(this.state);
    // Alert.alert(this.state.username);
    this.props.navigation.navigate("Dashboard");
  };
  onChangehandler = (key, value) => {
    this.setState(prevState => {
      return {
        ...prevState.controls,
        [key]: {
          ...prevState.controls[key],
          value: value
        }
      };
    });
  };
  gotoSignIn = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
              Sign up
            </Text>
          </View>
          <View style={styles.socialButton}>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={twitter} style={{ width: 50, height: 50 }} />

                <Text>Connect with Twitter</Text>
              </View>
            </View>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={fb} style={{ width: 50, height: 50 }} />

                <Text>Connect with Facebook</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 70,
              borderBottomColor: "#fff",
              borderBottomWidth: 1
            }}
          >
            <View
              style={{
                justifyContent: "center",
                paddingTop: 25,
                flexDirection: "row"
              }}
            >
              <Image source={fb} style={{ width: 20, height: 20 }} />
              <Text> or use your email address</Text>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inputContainer}>
                <DefaultInput
                  placeholder="Enter Your Name"
                  style={styles.input}
                  onChangeText={val => this.onChangehandler("email", val)}
                  autoCorrect={false}
                  autoCapitalize="none"
                  // keyboardType="email-address"
                />
                <DefaultInput
                  placeholder="Enter Your Username"
                  style={styles.input}
                  onChangeText={val => this.onChangehandler("email", val)}
                  autoCorrect={false}
                  autoCapitalize="none"
                  // keyboardType="email-address"
                />

                <DefaultInput
                  placeholder="Enter Your Password"
                  style={styles.input}
                  onChangeText={val => this.onChangehandler("password", val)}
                  secureTextEntry
                />
                <View style={styles.selectBox}>
                  <Text style={{ paddingBottom: 10 }}>Gender </Text>
                  <RadioForm
                    radio_props={radio_props_gender}
                    initial={this.state.gender}
                    onPress={val => this.onChange("gender", val)}
                    // labelHorizontal={true}
                    formHorizontal={true}
                  />
                  {/* {props.inputs.errors.gender ? (
                    <Text style={{ color: "red" }}>
                      {props.inputs.errors.gender}
                    </Text>
                  ) : null} */}
                </View>
              </View>
            </TouchableWithoutFeedback>
            <ButtonWithBackground color="#e83e8c" onPress={this.buttonHandler}>
              Continue
            </ButtonWithBackground>
            <Text
              style={{ color: "#fff", marginTop: 25 }}
              onPress={this.gotoSignIn}
            >
              Already have account? Sign in
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0
    // justifyContent: "center",
    // alignItems: 'center',
    // width: "80%",
  },
  heading: {
    backgroundColor: "cornflowerblue",
    opacity: 0.5,
    padding: 20
  },
  socialButton: {
    borderBottomColor: 1,
    borderBottomWidth: 1,
    // flex: 1,
    height: 140,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: "100%"
  },
  selectBox: {
    // flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    marginBottom: 20
  },
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
    width: "95%",
    marginTop: 10
  },

  input: {
    // backgroundColor: "#eee",
    height: 50,
    marginBottom: 0,
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
  }
});
