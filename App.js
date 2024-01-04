
//Ref:https://www.youtube.com/watch?v=bEG-0th1wDc&t=403s&ab_channel=EngineerCodewala 
import { View, Text } from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import NoteProvider from './NoteProvider';
import {Provider} from 'react-redux';
import Store,{persistor} from './src/Store';
import {PersistGate} from 'redux-persist/integration/react';
//Ref for Redux-Persist: https://medium.com/geekculture/redux-persist-redux-toolkit-implementation-made-easy-for-react-native-and-react-js-831ee1e3f22b 


//Cart with React native and Redux: https://codeburst.io/e-commerce-mobile-shop-with-react-native-and-redux-623e829db967 
const App = () =>
{
  return( 
    <Provider store={Store}>
    
    
    <AppNavigator/>
    
     
    </Provider>
  
  
  );
};

export default App;
