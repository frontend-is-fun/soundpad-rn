/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import MainStack from './src/mainStack';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#f8f5f1',
        minHeight: '100%',
      }}>
      <MainStack />
    </View>
  );
};

export default App;
