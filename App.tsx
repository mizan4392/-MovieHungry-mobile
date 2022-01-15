import React from 'react';
import {View, StatusBar} from 'react-native';
import {Home} from './screens/Home.screen';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar backgroundColor={'#04040452'} translucent={true} />
      <Home />
    </View>
  );
};

export default App;
