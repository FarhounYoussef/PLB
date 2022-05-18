import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import {store} from './src/app/store';
import {Provider as ReduxProvider} from 'react-redux';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ReduxProvider>
  );
}
