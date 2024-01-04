import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <AntDesign name='frowno' size={90} color='black' />
      <Text style={{ marginTop: 20, fontSize: 20 }}>Result Not Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    
  },
});

export default NotFound;
