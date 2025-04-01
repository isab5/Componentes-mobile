import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Card() {
    return (
        <View style={styles.container} >
        <Text style={styles.text}>Card Top super informativo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#483D8B",
        margin: "2rem",
        padding: "5rem",
    }
})