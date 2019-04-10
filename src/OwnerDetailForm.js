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

const OwnerDetail = props => (
  <ScrollView>
    <View style={{ padding: 25 }}>
      {/* <Text style={styles.sectionHeading}>
        Section 2: Shop Owner(s) / Authorised Signatory(ies) KYC
      </Text> */}
      <View style={styles.selectBox}>
        <Text>Name Of Owner/Authorised Signatory*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('nameOfOwner', val)}
          value={props.inputs.nameOfOwner}
          keyboard="default"
        />
        { props.inputs.errors.nameOfOwner ? <Text style={{color: 'red'}}>{props.inputs.errors.nameOfOwner}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Mobile No*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('mobile', val)}
          value={props.inputs.mobile}
          keyboard="default"
        />
        { props.inputs.errors.mobile ? <Text style={{color: 'red'}}>{props.inputs.errors.mobile}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Email*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('email', val)}
          value={props.inputs.email}
          keyboard="default"
        />
        { props.inputs.errors.email ? <Text style={{color: 'red'}}>{props.inputs.errors.email}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>DOB</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('dob', val)}
          value={props.inputs.dob}
          keyboard="default"
        />
      </View>
      <View style={styles.selectBox}>
        <Text style={{ paddingBottom: 10 }}>Gender* </Text>
        <RadioForm
          radio_props={radio_props_gender}
          initial={props.inputs.gender}
          onPress={(val)=>props.onChange('gender', val)}
        />
        { props.inputs.errors.gender ? <Text style={{color: 'red'}}>{props.inputs.errors.gender}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>ID Proof Type* </Text>
        <Picker
          selectedValue={props.inputs.idProofType}
          onValueChange={(itemValue) =>
            props.onChange('idProofType', itemValue)
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
        { props.inputs.errors.idProofType ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.idProofType}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>ID Proof No*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('idProofNo', val)}
          value={props.inputs.idProofNo}
          keyboard="default"
        />
        { props.inputs.errors.idProofNo ? <Text style={{color: 'red'}}>{props.inputs.errors.idProofNo}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>ID Proof Image*</Text>
        <View style={styles.plusIconContainer}>
        <TouchableOpacity onPress={() => {
            Alert.alert(
                'Confirm',
                'Choose One',
                [
                  {text: 'Camera', onPress: () => props.handleChoosePhotoProof('idProofImage', 'camera')},
                  {
                    text: 'Library',
                    onPress: () => props.handleChoosePhotoProof('idProofImage', 'library'),
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
        { props.inputs.errors.idProofImage ? <Text style={{color: 'red'}}>{props.inputs.errors.idProofImage}</Text> : null}
      </View>
      <View>
        <Button onPress={()=>props.gotoNextTab(2)}>Next</Button>
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

export default OwnerDetail;
