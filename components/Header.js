import React from "react";
import { View, Text, StyleSheet } from  "react-native"

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aula mobile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
    }
})