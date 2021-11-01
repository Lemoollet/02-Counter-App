import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//* el box objext model solo modifica: margin, border, padding y las dimensiones width y height

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D35E35',
  },
  title: {
    fontSize: 20,
    borderWidth: 10,
    paddingHorizontal: 100,
    paddingVertical: 50,
    marginHorizontal: 10,
    backgroundColor: 'red',
  },
});
