import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem({item, pressHandler}){
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>
                { item.text }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10
    }
})