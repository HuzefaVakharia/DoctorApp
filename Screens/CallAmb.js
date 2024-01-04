import { View, Text, StyleSheet, TextInput,Alert } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';

const CallAmb = () =>
{
  return (
    <View style={ styles.container }>
      
      <TextInput placeholder="Address" style={ styles.address } />
      <CommonBtn 
      txt={ 'Call Now' } 
      status={ true }
      onClick={ () =>
            {
              Alert.alert('Calling Ambulance...')
            } } 
            />
    </View>
  );
};

export default CallAmb;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
  },
});
