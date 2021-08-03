import React from 'react';
import {SafeAreaView} from 'react-native';
//import HolaMundoScreen from './src/screens/HolaMundoScreen';
//import CounterScreen from './src/screens/CounterScreen';
//import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
//import DimensionesScreen from './src/screens/DimensionesScreen';
//import PositionScreen from './src/screens/PositionScreen';
//import FlexScrenn from './src/screens/FlexScrenn';
import TareaSreen from './src/screens/TareaSreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D35E35'}}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen /> */}
      {/* <FlexScrenn /> */}
      <TareaSreen />
    </SafeAreaView>
  );
};

export default App;
