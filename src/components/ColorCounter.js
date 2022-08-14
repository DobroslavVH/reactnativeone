import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={styles.textstyle}>Color to change : {color}</Text>
            <View style={styles.button}>
                <Button onPress={()=> onIncrease()} title={`Increase`}/>
                <Button onPress={()=> onDecrease()} title={`Decrease`}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom : 20
        
    }
});

export default ColorCounter;