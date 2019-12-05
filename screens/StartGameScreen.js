import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard // API
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = props => {
    const [value, setValue] = React.useState("");

    const handleInput = userInput => setValue(userInput.replace(/[^0-9]/g, ""));
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.screenHeader}>Start a new game</Text>
                <Card style={styles.card}>
                    <Text style={styles.cardHeader}>Select a number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={handleInput}
                        value={value}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button
                                color={Colors.primary}
                                title="Confirm"
                                onPress={() => {}}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                color={Colors.paragraph}
                                title="Reset"
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.background,
        flex: 1,
        padding: 20,
        alignItems: "center"
    },
    screenHeader: {
        color: Colors.headline,
        fontSize: 20,
        marginVertical: 10
    },
    card: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center"
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
    },
    button: {
        width: 120
    },
    input: {
        width: 50,
        textAlign: "center",
        fontSize: 20
    }
});

export default StartGameScreen;
