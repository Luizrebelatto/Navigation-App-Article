import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackMainRoutes from './stack.route';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackMainRoutes/>
    </NavigationContainer>
  );
}