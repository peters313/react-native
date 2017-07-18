// Step 1: Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Step 2: Create a component
const App = () => (
  <Header />
);
// <Text> is a primitive element is provided by the ReactNative library, it must
// be imported 

//Step 3: Render the component to the device
AppRegistry.registerComponent('albums', () => App);