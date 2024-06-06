import React from 'react';
import { View } from 'react-native';
import Todo from './components/Todo';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Todo />
    </View>
  );
};

export default App;
