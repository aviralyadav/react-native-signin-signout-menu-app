import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Right,
  Title,
  Body,
  Icon,
  Button
} from "native-base";
import DefaultInput from "./UI/DefaultInput/DefaultInput";
import HeadingText from "./UI/HeadingText/HeadingText";
import MainText from "./UI/MainText/MainText";
import backgroundImage from "./assets/sublimelight.jpg";
import imageIcon from "./images/icon.png";
import banner from "./assets/banner-2.jpg";
import signal from "./assets/signal.png";
import calendar from "./assets/calendar.png";
import plusIcon from "./images/plus.png";
import fb from "./assets/fb.png";
import ButtonWithBackground from "./UI/ButtonWithBackground/ButtonWithBackground";
import ActionButton from "react-native-action-button";

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",
      header: null
    };
  };

  constructor(props) {
    super(props);
  }
  openNewForm = () => {
    Alert.alert("New form");
    // this.props.navigation.navigate('NewForm');
  };
  render() {
    let renderImage = null;
    if(banner){
      renderImage = <Image source={banner} style={styles.image} />;
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1 }}>
          <View style={styles.placeholder}>
            {renderImage}
          </View>
          <View style={styles.heading}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
              March 25
            </Text>
            <Text>Good Job, 90% more completed tasks this month.</Text>
          </View>
          <View style={styles.socialButton}>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>36</Text>

                <Text>COMPLETED</Text>
              </View>
            </View>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>4</Text>

                <Text>OVERDUE</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomView}>
          <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate("NewForm")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bottomView: {
    height: 110,
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    height: 150,
    width: "100%",
    backgroundColor: "#eee"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  icon: {
    width: 24,
    height: 24
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: "center"
  },
  buttonText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heading: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    padding: 20
  },
  socialButton: {
    borderBottomColor: 1,
    borderBottomWidth: 1,
    // flex: 1,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: "100%"
  },

  backgroundImage: {
    width: "100%",
    flex: 1
  }
});

export default ProfileScreen;
