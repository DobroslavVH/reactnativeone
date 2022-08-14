import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () =>{
    return <Text style={styles.textStyle}>This screenn shows only this text. Nothing else.</Text>
}

const styles = StyleSheet.create({
    textStyle:{
        padding: 25,
        fontSize: 18,
        textAlign: 'center'
    }
})
export default ComponentsScreen;