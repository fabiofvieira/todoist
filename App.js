/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App: () => React$Node = () => {
  const [ todos, setTodos ] = useState([
      { text: 'a', key: 1 },
      { text: 'b', key: 2 },
      { text: 'c', key: 3 },
      { text: 'd', key: 5 },
    ])

  const pressHandler = (key) => {
    ToastAndroid.show('Removed ToDo', ToastAndroid.SHORT);
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key);
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ]
      })
    } else {
      Alert.alert('Ops...', 'Todo must be over 3 chars long', [
        { text: 'Understood', onPress: () => {} }
      ]);
    }
  }
  return (
    <TouchableWithoutFeedback
    onPress={ () => {
      Keyboard.dismiss();
    }}>
      <View style={{ flex: 1}}>
        <View style={{backgroundColor: '#ccc'}}>
          <Header />
          <AddTodo submitHandler={ submitHandler } />
        </View>
        <View style={styles.body}>
          <View>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={ item }
                pressHandler={ pressHandler } />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'purple',
    flex: 1,
    paddingHorizontal: 10
  }
});

export default App;
