import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './routes/rootStack.js';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
