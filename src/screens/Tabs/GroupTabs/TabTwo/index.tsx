import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RoutesParamList } from '../../../../routes/navigation.types';

export default function TabTwo() {
  const navigation = useNavigation<NavigationProp<RoutesParamList>>()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Tab Two</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tabThree')}>
        <Text style={styles.textButton}>Next Screen</Text>
      </TouchableOpacity>
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
  button: {
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20
  }
});
