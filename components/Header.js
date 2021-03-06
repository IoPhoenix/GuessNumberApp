import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 60,
        paddingBottom: 10,
        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: Colors.headline,
        fontSize: 20
    }
});

export default Header;
