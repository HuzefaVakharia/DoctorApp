import React from 'react';
import
 {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
 } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

 
import Home from '../Screens/Home';
import Products from '../Screens/Products';
import Pending from '../Screens/Pending';
import Completed from '../Screens/Completed';
import CallAmb from '../Screens/CallAmb';

const Tab = createBottomTabNavigator();



const BottomNavigationBtn = ({navigation}) =>
{
 return (
  <>

   <Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            
            else if (route.name === 'Pending') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            }

            else if (route.name === 'Completed') {
              iconName = focused ? 'thumbs-up' : 'thumbs-up-outline';
            }

            else if (route.name === 'CallAmb') {
              iconName = focused ? 'call' : 'call-outline';
            }

            else if (route.name === 'Products') {
              iconName = focused ? 'medkit' : 'medkit-outline';
            }
              

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={22} color={color} />;
          },
          tabBarActiveTintColor: '#b388d1',
          tabBarInactiveTintColor: '#b388d1',
        })}
   >
    <Tab.Screen
     name="Home"
     component={ Home }
     options={ { headerShown: false } }
      
    />
    
    
    <Tab.Screen
     name="Pending"
     component={ Pending }
     options={ { headerShown: false, tabBarBadge: 3} }
     
    />
   
   
    <Tab.Screen
     name="Completed"
     component={ Completed }
     options={ { headerShown: false } }
    />


   <Tab.Screen
     name="CallAmb"
     component={ CallAmb }
     options={ { headerShown: false } }
    />

    <Tab.Screen
     name="Products"
     component={ Products }
     options={ { headerShown: false } }
    />

   </Tab.Navigator>

  </>
 );
};


export default BottomNavigationBtn;