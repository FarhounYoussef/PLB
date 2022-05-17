import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../utils/constants';

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
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarIcon: ({focused, color, size}) => (
            <Icons
              name={focused ? 'cart' : 'cart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={FavoriteNavigator}
        options={{
          tabBarLabel: 'Favoris',
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarIcon: ({focused, color, size}) => (
            <Icons
              name={focused ? 'cards-heart' : 'cards-heart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
