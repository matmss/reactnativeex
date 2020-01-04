import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  
  return (
    <View 
      style={{
        padding: 70, 
        flexDirection: 'row-reverse', 
        widht: '80%', 
        height: 300, 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
    >
      <Text>1</Text>
    </View>
  );
}
