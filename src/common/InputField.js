import React, { Component } from "react";
import { TextInput } from "react-native";

class InputField extends Component {
  render() {
    const { viewStyle, inputStyle, labelText, button } = styles;
    return (
      <TextInput
        onChangeText={this.props.onChangeFunc}
        keyboardType={this.props.keyboard}
        value={this.props.value}
        placeholder={this.props.placeholder}
        style={inputStyle}
        secureTextEntry={this.props.secureTextEntry}
        underlineColorAndroid="#999"
      />
    );
  }
}

const styles = {
  viewStyle: {},
  inputStyle: {
    backgroundColor: "#fff",
    // padding: 15,
    // marginLeft: 20,
    // marginRight: 20,
    borderRadius: 7,
    marginBottom: 10,
    marginTop: 10
  }
};

export default InputField;
