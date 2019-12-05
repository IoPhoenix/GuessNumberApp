import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        paddingTop: 20,
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        shadowColor: Colors.paragraph,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.35,
        elevation: 5,
        borderRadius: 5
    }
});

export default Card;
