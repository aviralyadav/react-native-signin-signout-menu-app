import React, { Component } from "react";
// import { View, Text, TextInput } from "react-native";
import NewForm from "./NewForm";
import ImagePicker from "react-native-image-picker";
import validateInput from "./common/Validation";

import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  View,
  Text,
  Left,
  Right,
  Title,
  Body,
  Icon,
  Button,
  ActionSheet
} from "native-base";

import OwnerDetail from "./OwnerDetailForm";
import BankDetail from "./BankDetailForm";

var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const ShopDetail = (props) => {
  return (
    <View>
      <NewForm
        onChange={props.onChange}
        inputs={props.inputs}
        handleChoosePhotoProof={props.handleChoosePhotoProof}
        onSubmitForm={props.onSubmitForm}
        gotoNextTab={props.gotoNextTab}
      />
    </View>
  );
};

export default class FormTabs extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "A Nested Details Screen"),
      header: null
    };
  };
  state = {
    entityName: "",
    streetAddress1: "",
    streetAddress2: "",
    streetAddress3: "",
    area: "",
    city: "",
    states: "",
    zone: "",
    pinCode: "",
    chainEntity: "",
    closingTime: "",
    openingTime: "",
    weeklyOffDay: "",
    chainParentName: "",
    noOfPos: "",
    photographInside: "",
    photographOutside: "",
    typeOfOutlet: "",
    storeFormat: "",
    alternateContactStore: "",
    storeContactNo: "",
    storePan: "",
    storeSize: "",
    entityType: "",
    establishmentProffType: "",
    establishmentProofNo: "",
    establishmentPhotoProof: "",
    nameOfOwner: "",
    mobile: "",
    email: "",
    dob: "",
    idProofType: "",
    idProofNo: "",
    idProofImage: "",
    accountHolderName: "",
    ifsc: "",
    bankAccount: "",
    bankName: "",
    errors: "",
    gender: "",
    passbookImage: "",
    latLong: "",
    activeTab: 0
  };

  onChange = (name, value) => {
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };
  isValid = () => {
    console.log(this.state);
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };
  handleChoosePhotoProof = (proofName, option) => {
    
    console.log('choose photo');
    const options = {
      noData: true,
    }
    if(option === 'camera') {
      ImagePicker.launchCamera(options, response => {
        if (response.uri) {
          switch(proofName){
            case 'photographInside': this.setState({ photographInside: response });break;
            case 'idProofImage': this.setState({idProofImage: response});break;
            case 'photographOutside': this.setState({photographOutside: response});break;
            case 'establishmentPhotoProof': this.setState({establishmentPhotoProof: response});break;
            case 'passbookImage': this.setState({passbookImage: response});break;
          }
          
        }
      })
    } else if (option === 'library'){
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        switch(proofName){
          case 'photographInside': this.setState({ photographInside: response });break;
          case 'idProofImage': this.setState({idProofImage: response});break;
          case 'photographOutside': this.setState({photographOutside: response});break;
          case 'establishmentPhotoProof': this.setState({establishmentPhotoProof: response});break;
          case 'passbookImage': this.setState({passbookImage: response});break;
        }
        
      }
    })
  }
  }
  onSubmitForm = e => {
    e.preventDefault();
    console.log("render validation");
    if (this.isValid()) {
      this.setState({ errors: {} });
      console.log(this.state);
    }
  };
  gotoNextTab = (val) => {
    this.setState({
      activeTab: val
    })
  }
  render() {
    console.log(this.state)
    return (
      <Container>
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
            <Title>New Form</Title>
          </Body>
          <Right />
        </Header>
        <Tabs page={this.state.activeTab} locked={true}>
          <Tab heading="Shop">
            <ShopDetail
              onChange={this.onChange}
              inputs={this.state}
              handleChoosePhotoProof={this.handleChoosePhotoProof}
              onSubmitForm={this.onSubmitForm}
              gotoNextTab={this.gotoNextTab}
            />
          </Tab>
          <Tab heading="Owner">
            <OwnerDetail
              onChange={this.onChange}
              inputs={this.state}
              handleChoosePhotoProof={this.handleChoosePhotoProof}
              onSubmitForm={this.onSubmitForm}
              gotoNextTab={this.gotoNextTab}
            />
          </Tab>
          <Tab heading="Bank">
            <BankDetail
              onChange={this.onChange}
              inputs={this.state}
              handleChoosePhotoProof={this.handleChoosePhotoProof}
              onSubmitForm={this.onSubmitForm}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
