import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import images from "../../../resources/images";
import { SwipeIconRefType } from "../../types/refTypes";

const MINUS_RATIO = 35 / 5;
const ARROW_RATIO = 35 / 10;


type PropType = {
  color?: string
  size?: number
  iconStyle?: Object,
  title?: string
  showTitle?: boolean
  titleStyle?: StyleProp<ViewStyle>
}
const SwipeIcon: React.ForwardRefRenderFunction<SwipeIconRefType, PropType> = ({ color, size = 35, iconStyle, title, showTitle, titleStyle }, ref) => {
  const [data, setData] = useState({
    icon: images.IC_CLOSE,
    showIcon: false,
  });

  useImperativeHandle(
    ref,
    () => ({
      setData: (val: any) => {
        setData((pre) => ({ ...pre, ...val }));
      },
    }),
    []
  );

  return (
    <View style={styles.wrapIcon}>
      {data.showIcon && (
        <Image
          source={data.icon}
          style={[{
            tintColor: color,
            width: size,
            height:
              size / ARROW_RATIO,
          }, iconStyle]}
        />
      )}
      {showTitle && <Text style={[styles.textTitle, titleStyle]}>{title}</Text>}
    </View>
  );
};

export default forwardRef<SwipeIconRefType, PropType>(SwipeIcon);

const styles = StyleSheet.create({
  wrapIcon: { alignItems: "center", marginBottom: 5 },
  textTitle: { alignSelf: 'center' }
});