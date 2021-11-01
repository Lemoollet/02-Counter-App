import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  //* Por default son relativos al padre empiezan en la esquiena superior izquierda (top: 0, left: 0)
  //* y de ahi parten para moverse dependiendo la posicion que elijamos (ej: si ponemos bottom 50 y right: -110, se sube un poco y se mueve hacia la derecha)
  /* 
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F19C1B',
    borderWidth: 10,
    borderColor: 'white',
    bottom: 50,
    right: -110,
  },
  */
  //* En la posicion absoluta cambia, si nosotros le decimos bottom: 0, le estamos diciendo que se pegue hasta abjo
  //* Lo mismo pasaria con cualquier otra propiedad (esto tambien depende de el padre)
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F19C1B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
