import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';


const CommonBtn = ({txt, onClick, status}) => {
  return (
    <TouchableOpacity 
      onPress={() => {
        onClick();
      }}
      style={{alignSelf: 'center', 
      marginTop: 10, 
      marginBottom: 10,
      backgroundColor: '#8F00FF',
      borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    
    }}>
      {status ? (
        
          <Text style={{color: '#fff', 
          fontSize: 16,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign:'center',
          padding:5,}}>{txt}</Text>
        
      ) : (
        
          <Text style={{color: 'red', 
          fontSize: 16,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign:'center', 
          opacity:0.2,
          padding:5,}}>Not Available Now</Text>
        
      )}
    </TouchableOpacity>
  );
};

export default CommonBtn;
