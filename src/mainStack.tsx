import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Test1 from './components/test1';
import Test2 from './components/test2';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Test1}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Test2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
