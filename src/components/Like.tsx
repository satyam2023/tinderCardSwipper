import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import {Colors} from '../config/colors';
import { ConstantString } from '../config/constantString';

interface ILikeStyle {
  textStyle: TextStyle;
}

interface ILike {
  type: string;
}

const Like = ({type}: ILike) => {
  return (
      <Text style={styles(type).textStyle}>{type}</Text>
  );
};

export default Like;

const styles = (type: string) =>
  StyleSheet.create<ILikeStyle>({
    textStyle: {
      fontSize: 40,
      textTransform: 'uppercase',
      letterSpacing: 4,
      fontWeight: '700',
      color: type == ConstantString.Like ? Colors.orange : Colors.red,
      borderWidth: 5,
      borderColor: type == ConstantString.Like ? Colors.yellowish : Colors.red,
      padding: 8,
      borderRadius: 10,
      transform: [{rotate:'-30deg'}],
    },
  });
