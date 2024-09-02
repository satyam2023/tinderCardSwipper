import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../config/colors';

interface IStyle {
  btnContainer: ViewStyle;
  imgStyle: ImageStyle;
}

interface IPressableImage {
  onPress: () => void;
  img: ImageSourcePropType;
}

const ImagePressableButton = ({onPress, img}: IPressableImage) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Image source={img} style={styles.imgStyle} />
    </TouchableOpacity>
  );
};

export default ImagePressableButton;

const styles = StyleSheet.create<IStyle>({
  btnContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.white,
    elevation: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
});
