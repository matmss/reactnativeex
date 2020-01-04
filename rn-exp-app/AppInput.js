import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  
  return (
    <View style={{padding: 70}}>
      <View
        style={{
          flexDirection:'row',
          justifyContent:'space-between', 
          alignItems:'center'
        }}>
        <TextInput placeholder="Goals" style={{width: 200, borderColor:'black', borderWidth: 1}}/>
        <Button title="Add" />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
