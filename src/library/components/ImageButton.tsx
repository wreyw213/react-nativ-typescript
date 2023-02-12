import React, { FC } from 'react';
import { Image, TouchableOpacity, Text, StyleProp, ImageStyle, ViewStyle, ImageSourcePropType, ImageRequireSource, TextStyle, TouchableOpacityProps } from 'react-native';
import FastImage, { ImageStyle as FastImageStyle } from 'react-native-fast-image';
import { FastImageSource } from '../types';


type PropsTypes = {
  onPress?: () => void,
  cache?: boolean,
  imageStyle?: StyleProp<ImageStyle> & StyleProp<FastImageStyle>,
  title?: string,
  containerStyle?: StyleProp<ViewStyle>,
  image?: ImageSourcePropType & FastImageSource | ImageRequireSource,
  titleStyle?: StyleProp<TextStyle>
}
const ImageButton: FC<PropsTypes & TouchableOpacityProps> = ({ onPress, cache = false, image, title, containerStyle,
  imageStyle, titleStyle, ...props }) => {
  return (
    <TouchableOpacity {...props} onPress={() => onPress && onPress()}
      activeOpacity={onPress ? 0.5 : 1} style={[containerStyle]}>
      {image && (cache ? <FastImage
        style={imageStyle}
        source={image}
      /> : <Image source={image} style={imageStyle} />)}
      {title && <Text style={titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
}

export default ImageButton