import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function AddTodo({submitHandler}) {
    const [ text, setText ] = useState('');
    const changeHandler = (val) => {   
        setText(val);
    }
    
    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                placeholder="New Todo2..."
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => { submitHandler(text) }}
                title='add'
                color="red"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderWidth:1,
        borderColor: 'red',
        padding: 10,
        borderRadius: 10,
    }
})