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
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { Icon, Header, Left, Right, Button, Title, Body } from "native-base";
// import Button from "./common/Button";

import backgroundImage from "./assets/sublimelight.jpg";
import imageIcon from "./images/icon.png";
import ActionButton from 'react-native-action-button';
import ButtonWithBackground from "./UI/ButtonWithBackground/ButtonWithBackground";
import SideBar from "./SideBar";
import Drawer from "react-native-drawer";

class DashboardScreenNew extends Component {

  componentDidMount() {
    
    // Animated.timing(this.animatedValue, {
    //   toValue: 150,
    //   duration: 1500
    // }).start();
  }
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source={imageIcon}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // };
  constructor(props) {
    super(props);
    this.state = {
      dashboardItems: [
        { name: "Pending", code: "#1abc9c" },
        { name: "OPEN", code: "#3498db" },
        { name: "New Form", code: "#2ecc71" },
        { name: "Draft", code: "#9b59b6" }
      ]
    };
    // animatedValue = new Animated.Value(0)
  }
  
  openNewForm = () => {
    Alert.alert("New form");
    // this.props.navigation.navigate('NewForm');
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dashboard",
      //   headerTitle: 'Header',
      header: null,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#be6cb3"
      },
      headerLeft: (
        <TouchableOpacity onPress={() => this.openDrawer()}>
          <Image
            style={{ width: 50, height: 50, marginLeft: 5 }}
            source={imageIcon}
          />
        </TouchableOpacity>
      )
    };
  };
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => {
                  this.props.openDrawer();
                }}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Dashboard</Title>
            </Body>
            <Right />
          </Header>
          <View style={styles.heading}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
              March 25
            </Text>
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

          <View style={styles.socialButton}>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>New Icons</Text>

                <Text>Mobile App</Text>
              </View>
            </View>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>8:30</Text>

                <Text>AM</Text>
              </View>
            </View>
          </View>
          <View style={styles.socialButton}>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Coffee Break</Text>

                <Text />
              </View>
            </View>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>10:00</Text>

                <Text>AM</Text>
              </View>
            </View>
          </View>
          <View style={styles.socialButton}>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Design Standups</Text>

                <Text>Hangouts</Text>
              </View>
            </View>
            <View style={{ padding: 30 }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>02:30</Text>

                <Text>PM</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 110 }}>
          <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.prop.navigation.navigate("NewForm")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton>
            
          </View>
          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
  icon: {
    width: 24,
    height: 24
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    // flexDirection: 'row',
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

  textInput: {
    color: "#fff",
    fontSize: 14
  },

  heading: {
    // backgroundColor: "cornflowerblue",
    // opacity: 0.5,
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

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
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
  }
});

class DashboardScreen extends Component {
  state = {
    tweenDuration: 250,
      tweenEasing: 'easeInOutBounce',
      
  };
  openDrawer(){
    this.drawer.open()
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dashboard",
      //   headerTitle: 'Header',
      header: null,
    }
  };
  tweenHandler=(ratio) => {
    var r0 = -ratio/6
    var r1 = 1-ratio/6
    var t = [
               r1,  r0,  0,  0,
               -r0, r1,  0,  0,
               0,   0,   1,  0,
               0,   0,   0,  1,
            ]
    return {
      main: {
        style: {
          transformMatrix: t,
          opacity: 1 - ratio/2,
        },
      }
    }
  }
  render() {
    return (
      <Drawer
      ref={c => this.drawer = c}
        type="overlay"
        content={<SideBar prop={this.props.navigation} closeDrawer={() => {
          this.drawer.close();
        }} />}
        tapToClose={true}
        openDrawerOffset={0.3} // 10% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={styles}
        tweenHandler={this.tweenHandler}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptTap={true}
      >
        <DashboardScreenNew prop={this.props} openDrawer={this.openDrawer.bind(this)} />
      </Drawer>
    );
  }
}

export default DashboardScreen;
