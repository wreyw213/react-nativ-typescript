import React, { FC } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ImageSourcePropType, StyleProp, ViewStyle, ImageStyle as NativeImageStyle } from 'react-native';
import {Colors} from '../constants';
import  { ImageStyle } from 'react-native-fast-image';
import DimensionsValue from '../utils/DimensionsValue';


type Props = {
  leftIcon?: ImageSourcePropType;
  tapOnLeftIcon?: () => void;
  tapOnRightIcon?: () => void;
  title?: string;
  rightIcon?: ImageSourcePropType;
  rightIconStyle?: StyleProp<ImageStyle> & StyleProp<NativeImageStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  showRightIcon?: boolean | null;
  showUserProfileImage?: boolean;
};
const Header: FC<Props> = ({
  leftIcon,
  tapOnLeftIcon,
  title = null,
  rightIcon,
  tapOnRightIcon,
  rightIconStyle,
  headerStyle,
  titleStyle,
  showRightIcon = true,
  showUserProfileImage = false,
  ...titleProps
}) => {
  return (
    <View>
      <View style={[styles.viewHeader, headerStyle]}>
        <TouchableOpacity
          hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
          onPress={() => tapOnLeftIcon && tapOnLeftIcon()}
          style={{
            width: DimensionsValue.VALUE_50,
            paddingStart: DimensionsValue.VALUE_22,
          }}>
          {leftIcon ? (
            <Image source={leftIcon} style={{tintColor: Colors.WHITE}} />
          ) : null}
        </TouchableOpacity>
        {title ? (
          <Text {...titleProps} style={[styles.textTitle, titleStyle]}>
            {title}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default Header

const styles = StyleSheet.create({
  textTitle: {
    fontSize: DimensionsValue.VALUE_22,
    color: Colors.WHITE,
    flex: 1,
    textAlign: 'center',
  },
  viewHeader: {
    flexDirection: 'row',
    height: DimensionsValue.VALUE_80,
    alignItems: 'center',
    zIndex: 999,
    backgroundColor: Colors.SKY,
    borderBottomStartRadius: DimensionsValue.VALUE_30,
    borderBottomEndRadius: DimensionsValue.VALUE_30
  },
  viewTab: {
    flexDirection: 'row',
    height: DimensionsValue.VALUE_80,
    borderBottomLeftRadius: DimensionsValue.VALUE_30,
    borderBottomRightRadius: DimensionsValue.VALUE_30,
    backgroundColor: Colors.TAB_BACKGROUND,
    marginTop: -DimensionsValue.VALUE_40,
  },
  textTabItem: {
    color: Colors.TAB_ITEM,
    marginTop: 'auto',
    marginBottom: DimensionsValue.VALUE_7,
    fontSize: DimensionsValue.VALUE_16,
  },
  viewtabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
    flexDirection: 'row'
  },
  viewLeftActiveTab: {
    borderBottomLeftRadius: DimensionsValue.VALUE_30,
    borderLeftWidth: 2,
    backgroundColor: '#B9DFF8',
    borderColor: Colors.SKY,
    marginLeft: -2,
  },
  viewRightActiveTab: {
    borderBottomRightRadius: DimensionsValue.VALUE_30,
    borderRightWidth: 2,
    backgroundColor: '#B9DFF8',
    borderColor: Colors.SKY,
    marginRight: -2,
  },
  viewActiveTab: {
    // borderBottomLeftRadius:DimensionsValue.VALUE_30,
    // borderLeftWidth:2,
    backgroundColor: '#B9DFF8',
    borderColor: Colors.SKY,
    marginLeft: -2,
  },
  imageTabItem: {
    marginTop: 'auto',
    marginBottom: DimensionsValue.VALUE_7,
    marginRight: DimensionsValue.VALUE_5,
    width: DimensionsValue.VALUE_16,
    height: DimensionsValue.VALUE_16,
  }
})