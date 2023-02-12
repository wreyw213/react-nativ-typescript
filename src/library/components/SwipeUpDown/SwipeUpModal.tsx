import {
  Dimensions,
  GestureResponderEvent,
  ImageSourcePropType,
  LayoutAnimation,
  PanResponder,
  PanResponderGestureState,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewComponent,
  ViewStyle,
} from "react-native";
import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import SwipeIcon from "./SwipeIcon";
import images from "../../../resources/images";
import { SwipeIconRefType, SwipeUpModalRef } from "../../types/refTypes";

const MARGIN_TOP = Platform.OS === "ios" ? 24 : 0;
const DEVICE_HEIGHT = Dimensions.get("window").height - MARGIN_TOP;

const CustomAnimation = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleY,
    springDamping: 0.8,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.8,
  },
};



type PropType = {
  swipeHeight?: number,
  extraMarginTop: number,
  itemMini?: ((value: () => void) => void) | null,
  itemFull?: ((value: () => void) => void) | null,
  style?: StyleProp<ViewStyle>,
  onShowMini?: () => void
  onShowFull?: () => void
  animation?: string,
  disableSwipeIcon?: boolean,
  iconSize?: number
  iconColor?: string
  iconStyle?: Object
  showTitle?: boolean
  title?: string
  titleStyle?: StyleProp<TextStyle>
}

type CustomeStyle = {
  style: {
    top?: number
    bottom?: number
    left?: number
    right?: number
    width?: number
    height?: number
  }
}


const SwipeUpDown: React.ForwardRefRenderFunction<SwipeUpModalRef, PropType> = (
  {
    swipeHeight = 60,
    extraMarginTop = MARGIN_TOP,
    itemMini = null,
    itemFull = null,
    style,
    onShowMini,
    onShowFull,
    animation = "spring",
    disableSwipeIcon,
    iconSize,
    iconColor,
    iconStyle,
    showTitle,
    title,
    titleStyle
  },
  ref
) => {
  const FULL_POSITION = extraMarginTop;
  const maxHeight = DEVICE_HEIGHT - extraMarginTop;
  const MINI_POSITION = maxHeight - swipeHeight;
  const EMPTY_MINI_POSITION = DEVICE_HEIGHT;
  let top = !!itemMini ? MINI_POSITION : EMPTY_MINI_POSITION;

  const customStyle: CustomeStyle = {
    style: {
      bottom: 0,
      top,
    },
  };
  const checkCollapsed = useRef(true);
  const viewRef = useRef<View>(null);
  const swipeIconRef = useRef<SwipeIconRefType>(null);
  const [collapsed, setCollapsed] = useState(true);

  const onPanResponderMove = (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    if (gestureState.dy > 0 && !checkCollapsed.current) {
      // SWIPE DOWN
      top = 0;
      customStyle.style.top = top + gestureState.dy;
      if (customStyle.style.height && customStyle.style.height <= DEVICE_HEIGHT / 3) {
        swipeIconRef.current?.setData({ icon: images.IC_HORIZONTAL_ARROW });
        if (itemMini) {
          setCollapsed(true);
        }
      }
      updateNativeProps();
    } else if (checkCollapsed.current && gestureState.dy < -swipeHeight) {
      // SWIPE UP
      customStyle.style.top = DEVICE_HEIGHT + gestureState.dy;
      swipeIconRef.current?.setData({
        icon: images.IC_HORIZONTAL_ARROW,
        showIcon: true,
      });
      if (customStyle.style.top <= DEVICE_HEIGHT / 2) {
        swipeIconRef.current?.setData({
          icon: images.IC_ARROW_DOWN,
          showIcon: true,
        });
        setCollapsed(false);
      }
      updateNativeProps();
    }
  };

  const onPanResponderRelease = (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    if (gestureState.dy < -100 || gestureState.dy < 100) {
      showFull();
    } else {
      showMini();
    }
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, g) => true,
      onPanResponderMove,
      onPanResponderRelease,
    })
  ).current;

  const showFull = () => {
    customStyle.style.top = extraMarginTop;
    swipeIconRef.current?.setData({
      icon: images.IC_ARROW_DOWN,
      showIcon: true,
    });
    updateNativeProps();
    setCollapsed(false);
    checkCollapsed.current = false;
    onShowFull?.();
  };

  const showMini = () => {
    customStyle.style.top = itemMini ? MINI_POSITION : EMPTY_MINI_POSITION;
    swipeIconRef.current?.setData({ showIcon: false });
    updateNativeProps();
    setCollapsed(true);
    checkCollapsed.current = true;
    onShowMini?.();
  };

  useImperativeHandle<SwipeUpModalRef, any>(
    ref,
    () => ({
      showFull,
      showMini,
    }),
    []
  );

  const updateNativeProps = () => {
    switch (animation) {
      case "linear":
        LayoutAnimation.linear();
        break;
      case "spring":
        LayoutAnimation.configureNext(CustomAnimation);
        break;
      case "easeInEaseOut":
        LayoutAnimation.easeInEaseOut();
        break;
      case "none":
      default:
        break;
    }
    viewRef.current?.setNativeProps(customStyle);
  };

  const renderFullComponent = () => {
    if (typeof itemFull === "function") {
      return itemFull(showMini);
    }
    return itemFull;
  };

  const renderMiniComponent = () => {
    if (typeof itemMini === "function") {
      return itemMini(showFull);
    }
    return itemMini;
  };
  return (
    <View
      ref={viewRef}
      {...panResponder.panHandlers}
      style={[
        styles.wrapSwipe,
        {
          top,
          height: maxHeight,
          marginTop: extraMarginTop,
        },
        !itemMini && collapsed && { marginBottom: -swipeHeight },
        style,
      ]}
    >
      {!disableSwipeIcon && (
        <SwipeIcon iconStyle={iconStyle} size={iconSize} color={iconColor} ref={swipeIconRef} showTitle={showTitle} title={title} titleStyle={titleStyle} />
      )}
      {collapsed
        ? itemMini
          ? renderMiniComponent()
          : null
        : renderFullComponent()}
    </View>
  );
};

export default forwardRef<SwipeUpModalRef, PropType>(SwipeUpDown);

const styles = StyleSheet.create({
  wrapSwipe: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    backgroundColor: '#FFF'
  },
});
