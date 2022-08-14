import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View style={{padding: 30}}>
            <View style={styles.mainStyle}>
                <Text style={styles.textStyle}>Enter name: </Text>
                <TextInput 
                    style={styles.inputStyle}
                    autoCapitalize= "none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={(newValue) => setName(newValue)}
                />            
            </View>
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mainStyle: {
        paddingBottom: 15,
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20
    },
    inputStyle: {
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1
    },
});

export default TextScreen;