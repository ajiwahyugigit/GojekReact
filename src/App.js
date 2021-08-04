import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './router';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}