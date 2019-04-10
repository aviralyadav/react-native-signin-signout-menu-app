import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

const ButtonWithBackground = (props) => {
    const content = (<View style={[styles.button, { backgroundColor: props.color }]}>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>{props.children}</Text>
    </View>);
    if (Platform.OS === 'android') {
        return <TouchableNativeFeedback onPress={props.onPress}>
            {content}
        </TouchableNativeFeedback>
    }
    return <TouchableOpacity onPress={props.onPress}>
        {content}
    </TouchableOpacity>

};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        // borderColor: "black",
        borderWidth: 1,
        width: '80%',
    },

});

export default ButtonWithBackground;