import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../misc/colors';
/* This file RoundIconBtn is file which will hold <AntDesign> tag, the AntDesign tag is like <Image> tag, is which we provide image source and our desired image gets seen in Image tag, so here we are using AntDesign tag and passing AntDesign icon name in name={} parameter which is fetched in props from file where RoundIconBtn is called, like say our Intro.js calls RoundIconBtn file and with calling this file it also pass props of name and in name it pass arrowright so our arrowright icon will get seen in place of <RoundIconBtn> tag as because <RoundIconBtn> tag contains only one tag in it and it is <AntDesign> tag.  */
/* To find new icons from AntDesign library use this link: https://oblador.github.io/react-native-vector-icons/  */
const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.LIGHT}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    
  },
});

export default RoundIconBtn;
