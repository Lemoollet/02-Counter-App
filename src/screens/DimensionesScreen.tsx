import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';

//const {width, height} = Dimensions.get('window');

const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.6}} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

export default DimensionesScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#3B14A7',
    //width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F19C1B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
