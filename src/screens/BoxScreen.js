import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.firstChild}>
                <Text>Box #1</Text>
            </View>
            <View style={styles.secondChild}>
                <Text>Box #2</Text>
            </View>
            <View style={styles.thirdChild}>
                <Text>Box #3</Text>
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    firstChild: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        textAlign: 'center'
    },
    secondChild: {
        top: 100,
        width: 100,
        height: 100,
        backgroundColor: 'green',
        justifyContent: 'center',
        textAlign: 'center'
    },
    thirdChild: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',justifyContent: 'center',
        textAlign: 'center'
    }
});

export default BoxScreen;