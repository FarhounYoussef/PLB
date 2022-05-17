import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListProducts, ProductDetail} from '../screens';

const StackHome = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <StackHome.Navigator initialRouteName="List">
      <StackHome.Screen
        name="List"
        component={ListProducts}
        options={{
          title: 'List produit',
        }}
      />
      <StackHome.Screen name="Detail" component={ProductDetail} />
    </StackHome.Navigator>
  );
};

const FavoriteNavigator = () => {
  return (
    <StackHome.Navigator initialRouteName="List">
      <StackHome.Screen
        name="List"
        component={ListProducts}
        options={{
          title: 'Favoris',
        }}
      />
    </StackHome.Navigator>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Favoris" component={FavoriteNavigator} />
    </Tab.Navigator>
  );
};

export default Navigation;
