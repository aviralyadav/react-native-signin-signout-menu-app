import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
} from 'react-native';
import {Button, Icon, ListItem, Left, Right, Body, Switch} from 'native-base';

import styls from './styles';
// import Button from './Button';

export default class SideBar extends Component {
    constructor(props){
        super(props);
    }
    _signOutAsync = async (props) => {
      await AsyncStorage.clear();
      props.navigate('Auth');
    };
  render() {
    return (
      <View style={styls.controlPanel}>
        <Text onPress={() => {
            this.props.closeDrawer();
          }} style={{textAlign: 'right', paddingRight: 20, paddingTop: 10}}>
          <Icon name="times" type="FontAwesome" />
        </Text>
        <ListItem icon onPress={()=>{this.props.prop.navigate('Profile');this.props.closeDrawer()}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="user" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem icon onPress={()=>{this.props.prop.navigate('NewForm');this.props.closeDrawer()}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="check-square-o" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text>New Form</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem icon onPress={()=>{this.props.prop.navigate('NewForm');this.props.closeDrawer()}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="check-square-o" type="FontAwesome"/>
              </Button>
            </Left>
            <Body>
              <Text>Saved Form</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem icon onPress={()=>{this._signOutAsync(this.props.prop);this.props.closeDrawer()}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="sign-out" type="FontAwesome"/>
              </Button>
            </Left>
            <Body>
              <Text>Sign out</Text>
            </Body>
            <Right/>
          </ListItem>
      </View>
    )
  }
}
