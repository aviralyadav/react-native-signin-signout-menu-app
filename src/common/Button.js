import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

class Button extends Component {
  render() {
    const {buttonText, buttonStyle} = styles;
    return (
    <TouchableOpacity 
          onPress={this.props.onPress}
          style={buttonStyle}
      >
        <Text style={buttonText}>{this.props.children}</Text>
    </TouchableOpacity>
    );
  }
}

const styles = {
  buttonText: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10,
    
    
  },
  buttonStyle: {
    //flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5, 
    marginLeft: 5,
    
  }
}

export default Button;