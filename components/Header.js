import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
    <View style={styles.header}>
        <Text style={styles.title}>Header</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: 'red'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})