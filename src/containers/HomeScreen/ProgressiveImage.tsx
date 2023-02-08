import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import FastImage, { ResizeMode } from "react-native-fast-image";

type resizeMode = "stretch" | "contain" | "cover" | "none" | undefined
type Props = {
  thumbnailSource: any,
  source: any,
  style: any,
  index: number,
  resizeMode: resizeMode
}
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

class ProgressiveImage extends React.Component<Props> {
  thumbnailAnimated = new Animated.Value(1);
  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }
  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }

  render() {
    const {
      thumbnailSource,
      source,
      style,
      index,
      resizeMode,
      ...props
    } = this.props;

    return (
      <View style={styles.container}>
        {(index === 0 || index === 1) ? <AnimatedFastImage
          // {...props}
          resizeMode={(resizeMode == undefined || resizeMode == 'none') ? 'cover' : resizeMode}
          source={thumbnailSource}
          style={style}
          onLoad={this.handleThumbnailLoad}
          onError={() => console.log("errror")}
        // blurRadius={1}
        /> : null}
        <AnimatedFastImage
          {...props}
          resizeMode={(resizeMode == undefined || resizeMode == 'none') ? 'cover' : resizeMode}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}
export default ProgressiveImage;


const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
    flex: 1
  },
});