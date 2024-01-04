import React,{useState} from 'react';
import { View, Text,SafeAreaView,StyleSheet, } from 'react-native';
import { Input, Icon,Button, } from '@rneui/themed';

const RegisterNow = ({navigation}) => {
  
  const [nameUseStateVariable, changeName] = useState('');
  const [passwordUseStateVariable, changePassword] = useState('');
  const [repeatpasswordUseStateVariable, changeRepeatPassword] = useState('');
  const [emailIDUseStateVariable, changeEmailID] = useState('');
  
  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.textStyleAllPossibleAttributes }>Welcome To Register page</Text>

      <Input
    placeholder='Enter Your Name'
    value={ nameUseStateVariable }
    onChangeText={(nameEnteredByUser) =>changeName(nameEnteredByUser) }
    leftIcon={
     <Icon
      type='font-awesome'
      name='user'
      size={ 24 }
      color='black'
     />
    }
   />

    <Input
    placeholder='Enter Your Email ID'
    value={ emailIDUseStateVariable }
    onChangeText={(emailIDEnteredByUser) =>changeEmailID(emailIDEnteredByUser) }
    leftIcon={
     <Icon
      type='font-awesome'
      name='user'
      size={ 24 }
      color='black'
     />
    }
   />

    <Input
    placeholder='Enter Your Password'
    value={ passwordUseStateVariable }
    secureTextEntry={true}
    onChangeText={(passwordEnteredByUser) =>changePassword(passwordEnteredByUser) }
    leftIcon={
     <Icon
      type='font-awesome'
      name='user'
      size={ 24 }
      color='black'
     />
    }
   />


  <Input
    placeholder='Please Repeat Your Password'
    value={ repeatpasswordUseStateVariable }
    secureTextEntry={true}
    onChangeText={(repeatpasswordEnteredByUser) =>changeRepeatPassword(repeatpasswordEnteredByUser) }
    leftIcon={
     <Icon
      type='font-awesome'
      name='user'
      size={ 24 }
      color='black'
     />
    }
   />



<Button
       title='REGISTER'
       onPress={ ()=>alert('button clicked') }
       icon={ {
        name: 'home',
        type: 'font-awesome',
        size: 15,
        color: 'white',
       } }
       iconContainerStyle={ { marginRight: 10 } }
       titleStyle={ { fontWeight: '700' } }
       buttonStyle={ {
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
       } }
       containerStyle={ {
        width: 200,
        justifyContent:'center',
        alignSelf:'center',
        marginHorizontal: 50,
        marginVertical: 10,
       } }
      />




    </SafeAreaView>
  );
}

export default RegisterNow;
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },

textStyleAllPossibleAttributes: {
    marginBottom: 150,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold', //normal also possible
    fontStyle: 'regular', //Italic also possible
    fontFamily: 'Arial',
    letterSpacing: 1,
    textAlign: 'auto',//center,justify,
    textDecorationLine: 'underline',
    textDecorationColour: 'red',
    textDecorationStyle: 'dashed',
    textTransform: 'capitalize',
  },

  
});