import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard, // API
    Alert
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = props => {
    const [value, setValue] = React.useState("");
    const [confirmed, setConfirmed] = React.useState(false);
    const [number, setNumber] = React.useState(undefined);

    const handleInput = userInput => setValue(userInput.replace(/[^0-9]/g, ""));

    const resetInput = () => {
        setValue("");
        setConfirmed(false);
    };

    const confirmInput = () => {
        const chosenNumber = parseInt(value);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
            Alert.alert("Invalid number", "Number must be between 1 and 99", [
                { text: "Ok", style: "destructive", onPress: resetInput }
            ]);
            return;
        }
        setConfirmed(true);
        setValue(""); // will be queued for next re-render
        setNumber(parseInt(value));
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Text style={styles.confirmation}>Chosen Number: {number}</Text>
        );
    }

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
                                onPress={confirmInput}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                color={Colors.paragraph}
                                title="Reset"
                                onPress={resetInput}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
