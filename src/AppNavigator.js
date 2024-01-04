import { View, Text } from 'react-native';
import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BookAppointment from '../Screens/BookAppointment';
import Success from '../Screens/Success';
import styles from './StylesForAnimatedLoginScreen'
import BottomNavigationBtns from './BottomNavigationBtns'
import AnimatedLoginScreen from './AnimatedLoginScreen'
import RegisterNow from '../Screens/RegisterNow'
import NoteProvider from '../NoteProvider';
import NoteDetail from '../components/NoteDetail';
import Cart from '../Screens/Cart';
//import Products from '../app/pages/Products';
//import Checkout from '../app/pages/Checkout';
//import Receipt from '../app/pages/Receipt';
import themes from '../app/styles/theme.style';
import NotFound from '../components/NotFound';

import SearchBar from '../components/SearchBar';
import NoteInputModal from '../components/NoteInputModal';
const Stack = createNativeStackNavigator();
const AppNavigator = () =>
{



  return (
    <NavigationContainer>
    <NoteProvider>
      <Stack.Navigator>
       
       
        {/* <Stack.Screen
          component={ AnimatedLoginScreen }
          name="AnimatedLoginScreen"
          options={ {
            headerShown: false
            

          } }
        />

        

        <Stack.Screen
          component={ RegisterNow }
          name="RegisterNow"
          options={ {
            headerShown: false
            

          } }
        />  */}


        <Stack.Screen
          component={ BottomNavigationBtns }
          name="BottomNavigationTab"
          options={ {
            headerShown: false
            

          } }
        /> 



        
        
        
        
        
        
        {/* <Stack.Screen
          component={ Products }
          name="Products"
          options={ {
            headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
    },
    headerTintColor: '#fff'
            

          } }
        />  */}

        {/* <Stack.Screen
          component={ Checkout }
          name="Checkout"
          options={ {
            headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
    },
    headerTintColor: '#fff'
            

          } }
        />  */}

        {/* <Stack.Screen
          component={ Receipt }
          name="Receipt"
          options={ {
            headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
    },
    headerTintColor: '#fff'
            

          } }
        /> 
 */}







        <Stack.Screen
          component={NoteDetail}
          name="NoteDetail"
          options={ {
            animationTypeForReplace: 'pop',
            title: 'Note Detail',
            headerStyle: {
              backgroundColor: '#b388d1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          } }
        />


        


     {/*   <Stack.Screen
          component={SearchBar}
          name="SearchBar"
          options={ {
            
            animationTypeForReplace: 'pop',
            title: '',
            headerStyle: {
              backgroundColor: '#2d8596',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          } }
        /> */}

        

     {/*   <Stack.Screen
          component={NoteInputModal}
          name="NoteInputModal"
          options={ {
            headerShown:true,
            animationTypeForReplace: 'pop',
            title: 'Please Enter Your Note',
            headerStyle: {
              backgroundColor: '#2d8596',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          } }
        /> 


        <Stack.Screen
          component={NotFound}
          name="NotFound"
          options={ {
            animationTypeForReplace: 'pop',
            title: 'Ooppss..Not Available',
            headerStyle: {
              backgroundColor: '#2d8596',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          } }
        /> */}
 
        



   {/*     <Stack.Screen
          component={ BottomNavigationBtns }
          name="BottomNavigationTab"
          options={ {
            headerShown: false
            

          } }
        />   */}

    


      <Stack.Screen
          component={ BookAppointment }
          name="BookAppointment"
          options={ {
            animationTypeForReplace: 'pop',
            title: 'Book Appointment Now',
            headerStyle: {
              backgroundColor: '#2d8596',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          } }




        />

        <Stack.Screen
          component={ Cart }
          name="Cart"
          options={ {
            animationTypeForReplace: 'pop',
            title: 'Cart',
            headerStyle: {
              backgroundColor: '#2d8596',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          } }




        />





       <Stack.Screen
          component={ Success }
          name="Success"
          options={ {
            animationTypeForReplace: 'pop',
            title: 'Successfully Got Appointment',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: 'purple',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
 } }
        />




      </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
