import React, {useCallback} from 'react';
import {
  Text,
  Image,
  Animated,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Colors} from '../config/colors';
import {height, width} from '../config/dimension';
import {ConstantString} from '../config/constantString';
import SelectionAnimatedView from './SelectionAnimatedView';

interface CardItem {
  image: ImageSourcePropType;
  title: string;
}

interface CardProps {
  item: CardItem;
  isFirst: boolean;
  swipe: Animated.ValueXY;
  [key: string]: any;
}

const Card = ({item, isFirst, swipe, ...rest}: CardProps) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const discardOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderChoice = useCallback(
    () => (
      <>
        {[ConstantString.Like, ConstantString.DisLike].map((item, index) => {
          return (
            <SelectionAnimatedView
              key={index.toString()}
              opacity={index == 0 ? likeOpacity : discardOpacity}
              statusText={item}
            />
          );
        })}
      </>
    ),
    [likeOpacity, discardOpacity],
  );

  return (
    <Animated.View
      style={[
        styles().cardContainer,
        {
          transform: isFirst
            ? [...swipe.getTranslateTransform(), {rotate}]
            : [],
        },
      ]}
      {...rest}>
      <Image source={item.image} style={styles().image} />
      {isFirst && renderChoice()}
      <Text style={styles().title}>{item.title}</Text>
    </Animated.View>
  );
};

const styles = () =>
  StyleSheet.create({
    cardContainer: {
      position: 'absolute',
      top: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: width - 20,
      height: height - 200,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
      resizeMode: 'contain',
      backgroundColor: Colors.black,
    },
    gradient: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      borderRadius: 20,
    },
    title: {
      position: 'absolute',
      bottom: 20,
      left: 30,
      fontSize: 40,
      color: Colors.white,
    },
    choiceContainer: {
      position: 'absolute',
      top: 100,
      left: 20,
    },
  });

export default Card;
