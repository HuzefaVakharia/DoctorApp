import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={ [styles.container, { ...containerStyle }] }>
      
      {/* when we will use ...containerStyle then the JSON object container will be incremented by new data which is contained in containerStyle JSON
      
       WHAT IS THIS ... THREE DOTS IN JAVASCRIPT:
  The three dots will convert our array to single string. I.e if we have create an array with name product=['what','are','you','learning','?'] and if we write like this console.log(...product) then we will get output as a full array in single string like this: what are you learning ?

  reference: https://www.youtube.com/watch?v=jRURVXPbSkU&ab_channel=Bitfumes
      
      
      */}


      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder='Search here..'
      />
      {value ? (
        <AntDesign
          name='close'
          size={20}
          color={colors.PRIMARY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
    marginTop:5,
  },
  container: {
    justifyContent: 'center',
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
    top:40,
  },
});

export default SearchBar;
