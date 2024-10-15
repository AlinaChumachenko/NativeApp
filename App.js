import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <Text style={styles.text}>Hello World</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 30,
    padding: 20
  }
});