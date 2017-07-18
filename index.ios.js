// Step 1: Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// Step 2: Create a component
const App = () => (
    //<Text> is a primitive element is provided by the ReactNative library, it must be imported
    <Text>Some Text</Text>
  );


// Step 3: Render the component to the device
AppRegistry.registerComponent('albums', () => App);