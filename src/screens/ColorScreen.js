import React, {useState} from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View style={styles.mainStyle}>
            <Button 
                title="Add a Color" 
                onPress={() => 
                    setColors([...colors, randomRgb()])
                }
            />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{
                        alignSelf: 'center',
                        width: 300, 
                        height: 50, 
                        borderRadius: 50/2, 
                        backgroundColor: item}}/>                    
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`;
};


const styles = StyleSheet.create({
    mainStyle: {
        padding: 40
    }    
});

export default ColorScreen;