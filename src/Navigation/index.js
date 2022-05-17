import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListProducts, ProductDetail} from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={ListProducts} />
      <Stack.Screen name="Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default Navigation;
