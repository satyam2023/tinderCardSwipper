import {Animated, PanResponderInstance, StyleSheet, View} from 'react-native';
import React from 'react';
import {ICardData} from '../../models/interface/Idata';
import Card from '../../components/Card';
import {styles} from './styles';

interface ISwipperScreen {
  cardData: ICardData[];
  handlePanResponder: PanResponderInstance;
  swipe: Animated.ValueXY;
  rotate: Animated.Value;
}

const SwipperScreen = ({
  cardData,
  handlePanResponder,
  swipe,
  rotate,
}: ISwipperScreen) => {
  return (
    <View style={styles.container}>
      {cardData
        .map((item, index) => {
          const isFirst: boolean = [0].includes(index);
          let movingValue = isFirst ? handlePanResponder.panHandlers : {};
          return (
            <Card
              key={index.toString()}
              item={item}
              rotate={rotate}
              isFirst={isFirst}
              swipe={swipe}
              {...movingValue}
            />
          );
        })
        .reverse()}
    </View>
  );
};

export default SwipperScreen;
