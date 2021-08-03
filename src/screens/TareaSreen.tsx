import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TareaSreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

export default TareaSreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D35E35',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    top: 50,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#3D4251',
  },
});
