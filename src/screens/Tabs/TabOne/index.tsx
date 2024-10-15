import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TabOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Tab One</Text>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20
  }
});
