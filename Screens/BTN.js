import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Tab = createBottomTabNavigator();

const BTN = () => {
  return (
    <>
      
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontSize:8},
            activeTintColor: 'red',
            inactiveTintColor: 'black'
          }}
        >
          <Tab.Screen
            name="Screen 1"
            component={Screen1}
          />
          <Tab.Screen
            name="Screen 2"
            component={Screen2}
          />
          <Tab.Screen
            name="Screen 3"
            component={Screen3}
          />
        </Tab.Navigator>
      
    </>
  );
};


export default BTN;
