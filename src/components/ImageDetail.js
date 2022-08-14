import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({imageSource, title, imageScore}) => {
    return (
        <View style={styles.imageContainer}>
            <Text style={styles.imageTitle}>{title}</Text>
            <Image style={styles.imageStyle} source={imageSource}/>           
            <Text>Image Score : {imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 40
    },
    imageStyle: {
        width: 300,
        height: 200
    },
    imageTitle: {
        fontSize: 25
    }
});

export default ImageDetail;