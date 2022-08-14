import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const PasswordScreen = () => {
const [pass, setPass] = useState('');

    return (
        <View style={{padding: 30}}>
            <Text style={styles.textStyle}>Enter your password</Text>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={pass}
                onChangeText={(newPass) => setPass(newPass)}
            />
            {pass.length < 8 
                ? <Text style={styles.warningText}>Your password must be at least 5 characters long!</Text> 
                : <Text>Correct!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({    
    textStyle: {
        fontSize: 20,
        paddingBottom: 15
    },
    inputStyle: {
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        fontSize: 20
    },
    warningText: {
        fontSize: 15,
        color: 'red'
    }
});

export default PasswordScreen;