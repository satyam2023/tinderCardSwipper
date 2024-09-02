import {StyleSheet, ViewStyle} from 'react-native';

interface IStyle {
  btmContainer: ViewStyle;
  container: ViewStyle;
}

export const styles = StyleSheet.create<IStyle>({
  btmContainer: {
    width: '100%',
    position: 'absolute',
    height: 100,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
