import React from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 34},
        {name: 'Friend #2', age: 98},
        {name: 'Friend #3', age: 11},
        {name: 'Friend #4', age: 22},
        {name: 'Friend #5', age: 21},
        {name: 'Friend #6', age: 55},
        {name: 'Friend #7', age: 12},
        {name: 'Friend #8', age: 32},
        {name: 'Friend #9', age: 45}
    ];

    return (
        <FlatList 
            keyExtractor={friends => friends.name}
            data={friends}

            renderItem={({item}) => {
                return (
                    <View style={styles.mainView}>
                        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    },
    mainView: {
        paddingLeft: 20
    }
});

export default ListScreen;