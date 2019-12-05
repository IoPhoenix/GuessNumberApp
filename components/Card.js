import React from "react";
import { StyleSheet, View } from "react-native";

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
        backgroundColor: "#faeee7",
        shadowColor: "#594a4e",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.35,
        elevation: 5,
        borderRadius: 5
    }
});

export default Card;
