import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 50,
    borderWidth: 5,
    borderColor: 'orange',
    //width: 250,
    //backgroundColor: 'red',
  },
});
