import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListProducts} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ListProducts} />
    </Stack.Navigator>
  );
};

export default Navigator;
