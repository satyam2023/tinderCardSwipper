import {Animated, StyleSheet} from 'react-native';
import React from 'react';
import Like from './Like';

interface ISelectionAnimatedView {
  opacity: Animated.AnimatedInterpolation<string | number>;
  statusText: string;
}

const SelectionAnimatedView = ({
  opacity,
  statusText,
}: ISelectionAnimatedView) => {
  return (
    <Animated.View style={[styles(opacity).choiceContainer]}>
      <Like type={statusText} />
    </Animated.View>
  );
};

export default SelectionAnimatedView;

const styles = (opacity: Animated.AnimatedInterpolation<string | number>) =>
  StyleSheet.create({
    choiceContainer: {
      position: 'absolute',
      top: 100,
      left: 20,
      opacity: opacity,
    },
  });
