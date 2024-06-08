import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MessageScreen from './app/screens/MessageScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
};

export default App;
