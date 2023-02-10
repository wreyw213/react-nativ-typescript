import React, { FC } from 'react';
import { Text, Dimensions, TouchableOpacity, ActivityIndicator, View, Image, Platform, StyleSheet, ImageSourcePropType, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import useTheme from '../hooks/useTheme';
import { Theme } from '../types';
import DimensionsValue from '../utils/DimensionsValue';
const { width, } = Dimensions.get('window');

type Props = {
  title: string,
  isLoading?: boolean,
  disabled?: boolean,
  onPress: () => void,
  leftImage?: ImageSourcePropType,
  rightImage?: ImageSourcePropType,
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  leftImageStyles?: StyleProp<ImageStyle>,
  rightImageStyles?: StyleProp<ImageStyle>
}
const Button: React.FC<Props> = ({ title, isLoading, disabled, onPress, leftImage, rightImage,
  containerStyle, textStyle, leftImageStyles, rightImageStyles
}) => {

  const [theme] = useTheme();

  return (

    <TouchableOpacity disabled={isLoading || disabled} style={[styles(theme).touchContainer,
    disabled && { backgroundColor: theme.BG_PRIMARY }, containerStyle]} onPress={onPress}>
      {isLoading ? <ActivityIndicator color={'#FFF'} /> :
        <View style={styles(theme).rootView}>
          {leftImage && <Image style={[styles(theme).buttonLeftImage, leftImageStyles]} source={leftImage} />}
          <Text style={[styles(theme).titleLabel, textStyle,]}>{title}</Text>
          {rightImage && <Image style={[styles(theme).buttonRightImage, rightImageStyles]} source={rightImage} />}
        </View>}
    </TouchableOpacity>
  );
}

export default Button

const styles = (theme: Theme) => StyleSheet.create({
  touchContainer: {
    alignSelf: 'center',
    height: width / 8.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width / 37.5,
    backgroundColor: theme.BG_SECONDRY,
    paddingHorizontal: DimensionsValue.VALUE_10
    // minWidth: width / 4
  },
  titleLabel: {
    color: theme.TXT_SECONDARY,
    // fontSize: 12,
  },
  rootView: {
    flexDirection: 'row'
  },
  buttonRightImage: {
    marginEnd: 5,
    alignSelf: 'center'
  },
  buttonLeftImage: {
    marginEnd: 5,
    alignSelf: 'center'
  },
});
