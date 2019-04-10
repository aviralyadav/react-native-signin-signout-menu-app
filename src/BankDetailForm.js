import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Picker,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import InputField from "./common/InputField";
import Button from "./common/Button";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
// import ImagePicker from 'react-native-image-picker'
const plusIcon = require("./images/plus.png");
// console.log(plusIcon);

var radio_props_store_format = [
  { label: "Closed", value: '0' },
  { label: "Open", value: '1' },
  { label: "Semi-Closed", value: '2' }
];

var radio_props_gender = [
  { label: "Male", value: '0' },
  { label: "Female", value: '1' }
];

const BankDetail = props => (
  <ScrollView>
    <View style={{ padding: 25 }}>
      {/* <Text style={styles.sectionHeading}>Section 3: Bank Account Details</Text> */}
      <View style={styles.selectBox}>
        <Text>Bank Name* </Text>
        <Picker
          selectedValue={props.inputs.bankName}
          onValueChange={(itemValue) =>
            props.onChange('bankName', itemValue)
          }
        >
          <Picker.Item value="" label="Please select anyone" />
          <Picker.Item value="Sunday" label="Sunday" />
          <Picker.Item value="Monday" label="Monday" />
          <Picker.Item value="Tuesday" label="Tuesday" />
          <Picker.Item value="Wednesday" label="Wednesday" />
          <Picker.Item value="Thursday" label="Thursday" />
          <Picker.Item value="Friday" label="Friday" />
          <Picker.Item value="Saturday" label="Saturday" />
        </Picker>
        { props.inputs.errors.bankName ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.bankName}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Bank Account Number*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('bankAccount', val)}
          value={props.inputs.bankAccount}
          keyboard="default"
        />
        { props.inputs.errors.bankAccount ? <Text style={{color: 'red'}}>{props.inputs.errors.bankAccount}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>IFSC Code*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('ifsc', val)}
          value={props.inputs.ifsc}
          keyboard="default"
        />
        { props.inputs.errors.ifsc ? <Text style={{color: 'red'}}>{props.inputs.errors.ifsc}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Account Holder Name*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('accountHolderName', val)}
          value={props.inputs.accountHolderName}
          keyboard="default"
        />
        { props.inputs.errors.accountHolderName ? <Text style={{color: 'red'}}>{props.inputs.errors.accountHolderName}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Photograph of Cheque Leaf/Passbook*</Text>
        <View style={styles.plusIconContainer}>
        <TouchableOpacity onPress={() => {
            Alert.alert(
                'Confirm',
                'Choose One',
                [
                  {text: 'Camera', onPress: () => props.handleChoosePhotoProof('passbookImage', 'camera')},
                  {
                    text: 'Library',
                    onPress: () => props.handleChoosePhotoProof('passbookImage', 'library'),
                  },
                  {text: 'Cancel', onPress: () => console.log('OK Pressed'), style: 'cancel'},
                ],
                {cancelable: false},
              );
        }}>
          <Image
            source={plusIcon}
            style={{ width: 50, height: 50, marginLeft: 5 }}
          />
          </TouchableOpacity>
        </View>
        { props.inputs.errors.passbookImage ? <Text style={{color: 'red'}}>{props.inputs.errors.passbookImage}</Text> : null}
      </View>
      <View>
        <Button onPress={props.onSubmitForm}>Submit</Button>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingVertical: 20
  },
  selectBox: {
    flex: 1,
    paddingTop: 20
    
  },
  sectionHeading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "lightgreen"
  },
  plusIconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default BankDetail;
