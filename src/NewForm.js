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

const NewForm = props => (
  <ScrollView>
    <View style={{ padding: 25 }}>
      {/* <Text style={styles.sectionHeading}>Section 1: Shop/Entity Details</Text> */}
      <View style={styles.selectBox}>
        <Text>Name of the Entity* </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('entityName', val)}
          value={props.inputs.entityName}
          keyboard="default"
        />
        { props.inputs.errors.entityName ? <Text style={{color: 'red'}}>{props.inputs.errors.entityName}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Street Address 1* </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('streetAddress1', val)}
          value={props.inputs.streetAddress1}
          keyboard="default"
        />
        { props.inputs.errors.streetAddress1 ? <Text style={{color: 'red'}}>{props.inputs.errors.streetAddress1}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Street Address 2* </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('streetAddress2', val)}
          value={props.inputs.streetAddress2}
          keyboard="default"
        />
        { props.inputs.errors.streetAddress2 ? <Text style={{color: 'red'}}>{props.inputs.errors.streetAddress2}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Street Address 3 </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('streetAddress3', val)}
          value={props.inputs.streetAddress3}
          keyboard="default"
        />
      </View>
      <View style={styles.selectBox}>
        <Text>Area/Locality </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('area', val)}
          value={props.inputs.area}
          keyboard="default"
        />
      </View>
      <View style={styles.selectBox}>
        <Text>City* </Text>
        <Picker
          selectedValue={props.inputs.city}
          onValueChange={(itemValue) =>
            props.onChange('city', itemValue)
          }
        >
          <Picker.Item value="" label="Please select anyone" />
          <Picker.Item value="kanpur" label="kanpur" />
          <Picker.Item value="Delhi" label="Delhi" />
          <Picker.Item value="Lucknow" label="Lucknow" />
          <Picker.Item value="Auraiya" label="Auraiya" />
        </Picker>
        { props.inputs.errors.city ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.city}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>State* </Text>
        <Picker
          selectedValue={props.inputs.states}
          onValueChange={(itemValue) =>
            props.onChange('states', itemValue)
          }
        >
          <Picker.Item value="" label="Please select anyone" />
          <Picker.Item value="up" label="UP" />
          <Picker.Item value="Delhi" label="Delhi" />
          <Picker.Item value="mp" label="MP" />
          <Picker.Item value="haryana" label="Haryana" />
        </Picker>
        { props.inputs.errors.states ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.states}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Pin Code* </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('pinCode', val)}
          value={props.inputs.pinCode}
          keyboard="default"
        />
        { props.inputs.errors.pinCode ? <Text style={{color: 'red'}}>{props.inputs.errors.pinCode}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Zone </Text>
        <Picker
          selectedValue={props.inputs.zone}
          onValueChange={(itemValue) =>
            props.onChange('zone', itemValue)
          }
        >
          <Picker.Item value="" label="Please select anyone" />
          <Picker.Item value="kanpur" label="EST" />
          <Picker.Item value="Delhi" label="GMT" />
        </Picker>
      </View>
      <View style={styles.selectBox}>
        <Text>Latitude/Longitude* </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('latLong', val)}
          value={props.inputs.latLong}
          keyboard="default"
        />
      </View>
      <View style={styles.selectBox}>
        <Text>Chain/Stand alone entity* </Text>
        <Picker
          selectedValue={props.inputs.chainEntity}
          onValueChange={(itemValue) =>
            props.onChange('chainEntity', itemValue)
          }
        >
          <Picker.Item value="" label="Please select anyone" />
          <Picker.Item value="kanpur" label="kanpur" />
          <Picker.Item value="Delhi" label="Delhi" />
          <Picker.Item value="Lucknow" label="Lucknow" />
          <Picker.Item value="Auraiya" label="Auraiya" />
        </Picker>
        { props.inputs.errors.chainEntity ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.chainEntity}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>If Chain Store, name of parent chain </Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('chainParentName', val)}
          value={props.inputs.chainParentName}
          keyboard="default"
        />
      </View>
      <Text>Billing System*</Text>
      <View style={styles.selectBox}>
        <Text>No of POS Terminal</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('noOfPos', val)}
          value={props.inputs.noOfPos}
          keyboard="default"
        />
      </View>
      <View style={styles.selectBox}>
        <Text>Store Opening Time*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('openingTime', val)}
          value={props.inputs.openingTime}
          keyboard="default"
        />
        { props.inputs.errors.openingTime ? <Text style={{color: 'red'}}>{props.inputs.errors.openingTime}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Store Closing Time*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('closingTime', val)}
          value={props.inputs.closingTime}
          keyboard="default"
        />
        { props.inputs.errors.closingTime ? <Text style={{color: 'red'}}>{props.inputs.errors.closingTime}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Weekly Off Day* </Text>
        <Picker
          selectedValue={props.inputs.weeklyOffDay}
          onValueChange={(itemValue) =>
            props.onChange('weeklyOffDay', itemValue)
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
        { props.inputs.errors.weeklyOffDay ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.weeklyOffDay}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Shop Photograph-inside*</Text>
        <View style={styles.plusIconContainer}>
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'Confirm',
            'Choose One',
            [
              {text: 'Camera', onPress: () => props.handleChoosePhotoProof('photographInside', 'camera')},
              {
                text: 'Library',
                onPress: () => props.handleChoosePhotoProof('photographInside', 'library'),
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
        { props.inputs.errors.photographInside ? <Text style={{color: 'red'}}>{props.inputs.errors.photographInside}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Shop Photograph-outside*</Text>
        <View style={styles.plusIconContainer}>
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'Confirm',
            'Choose One',
            [
              {text: 'Camera', onPress: () => props.handleChoosePhotoProof('photographOutside', 'camera')},
              {
                text: 'Library',
                onPress: () => props.handleChoosePhotoProof('photographOutside', 'library'),
              },
              {text: 'Cancel', onPress: () => console.log('OK Pressed'), style: 'cancel'},
            ],
            {cancelable: false},
          );
        }
        }>
          <Image
            source={plusIcon}
            style={{ width: 50, height: 50, marginLeft: 5 }}
          />
          </TouchableOpacity>
        </View>
        { props.inputs.errors.photographOutside ? <Text style={{color: 'red'}}>{props.inputs.errors.photographOutside}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Type of Outlet* </Text>
        <Picker
          selectedValue={props.inputs.typeOfOutlet}
          onValueChange={(itemValue) =>
            props.onChange('typeOfOutlet', itemValue)
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
        { props.inputs.errors.typeOfOutlet ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.typeOfOutlet}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text style={{ paddingBottom: 10 }}>Store Format* </Text>
        <RadioForm
          radio_props={radio_props_store_format}
          initial={props.inputs.storeFormat}
          onPress={(val)=>props.onChange('storeFormat', val)}
        />
        { props.inputs.errors.storeFormat ? <Text style={{color: 'red'}}>{props.inputs.errors.storeFormat}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Store Contact Number*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('storeContactNo', val)}
          value={props.inputs.storeContactNo}
          keyboard="default"
        />
        { props.inputs.errors.storeContactNo ? <Text style={{color: 'red'}}>{props.inputs.errors.storeContactNo}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Alternative Store Contact</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('alternateContactStore', val)}
          value={props.inputs.alternateContactStore}
          keyboard="default"
        />
      </View>
      <View style={styles.selectBox}>
        <Text>Store Size in Sq. Foot*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('storeSize', val)}
          value={props.inputs.storeSize}
          keyboard="default"
        />
        { props.inputs.errors.storeSize ? <Text style={{color: 'red'}}>{props.inputs.errors.storeSize}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Store Pan Number*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('storePan', val)}
          value={props.inputs.storePan}
          keyboard="default"
        />
        { props.inputs.errors.storePan ? <Text style={{color: 'red'}}>{props.inputs.errors.storePan}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Entity Type* </Text>
        <Picker
          selectedValue={props.inputs.entityType}
          onValueChange={(itemValue) =>
            props.onChange('entityType', itemValue)
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
        { props.inputs.errors.entityType ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.entityType}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Establishment Proof* </Text>
        <Picker
          selectedValue={props.inputs.establishmentProffType}
          onValueChange={(itemValue) =>
            props.onChange('establishmentProffType', itemValue)
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
        { props.inputs.errors.establishmentProffType ? <Text style={{color: 'red', marginLeft: 10}}>{props.inputs.errors.establishmentProffType}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Establishment Proof No*</Text>
        <InputField
          onChangeFunc={(val)=>props.onChange('establishmentProofNo', val)}
          value={props.inputs.establishmentProofNo}
          keyboard="default"
        />
        { props.inputs.errors.establishmentProofNo ? <Text style={{color: 'red'}}>{props.inputs.errors.establishmentProofNo}</Text> : null}
      </View>
      <View style={styles.selectBox}>
        <Text>Establishment Photo Proof*</Text>
        <View style={styles.plusIconContainer}>
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'Confirm',
            'Choose One',
            [
              {text: 'Camera', onPress: () => props.handleChoosePhotoProof('establishmentPhotoProof', 'camera')},
              {
                text: 'Library',
                onPress: () => props.handleChoosePhotoProof('establishmentPhotoProof', 'library'),
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
        { props.inputs.errors.establishmentPhotoProof ? <Text style={{color: 'red'}}>{props.inputs.errors.establishmentPhotoProof}</Text> : null}
      </View>
      <View>
        <Button onPress={()=>props.gotoNextTab(1)}>Next</Button>
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

export default NewForm;
