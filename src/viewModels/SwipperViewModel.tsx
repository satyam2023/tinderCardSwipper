import React, {useCallback, useEffect, useRef, useState} from 'react';
import SwipperScreen from '../views/swipperViews/SwipperScreen';
import {ICardData} from '../models/interface/Idata';
import {cardDetailsData} from '../models/mockData';
import {Animated, PanResponder, Vibration} from 'react-native';

const SwipperViewModel = () => {
  const [cardData, setCardData] = useState<ICardData[]>(cardDetailsData);
  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    !cardData?.length && setCardData(cardDetailsData);
  }, [cardData]);

  const handlePanResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipe.setValue({x: dx, y: dy});
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {x: 500 * dx, y: dy},
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          friction: 8,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    Vibration.vibrate(1 * 100);
    setCardData(prev => prev.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  return (
    <SwipperScreen
      {...{
        cardData,
        handlePanResponder,
        swipe,
        rotate,
      }}
    />
  );
};

export default SwipperViewModel;
