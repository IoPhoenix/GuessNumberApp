import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../constants/colors";

const Input = props => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: Colors.paragraph,
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 20
    }
});

export default Input;
