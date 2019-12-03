import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.screenHeader}>Start a new game</Text>
            <View style={styles.card}>
                <Text style={styles.cardHeader}>Select a number</Text>
                <TextInput />
                <View style={styles.buttonsContainer}>
                    <Button
                        color="#ff8ba7"
                        title="Confirm"
                        onPress={() => {}}
                    />
                    <Button color="#594a4e" title="Reset" onPress={() => {}} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#fffffe",
        flex: 1,
        padding: 20,
        alignItems: "center"
    },
    screenHeader: {
        color: "#33272a",
        fontSize: 20,
        marginVertical: 10
    },
    card: {
        padding: 10,
        paddingTop: 20,
        width: "80%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#faeee7",
        shadowColor: "#594a4e",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.35,
        elevation: 5,
        borderRadius: 5
    },
    cardHeader: {
        color: "#594a4e",
        fontSize: 18
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});

export default StartGameScreen;
