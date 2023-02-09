import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import FastImage, { ResizeMode, OnLoadEvent } from "react-native-fast-image";

type resizeMode = "stretch" | "contain" | "cover"

type Props = {
  thumbnailSource: any,
  source: any,
  style: any,
  index: number,
}
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const { width } = Dimensions.get("window");

class ProgressiveImage extends React.Component<Props, { resizeMode: resizeMode }> {
  thumbnailAnimated = new Animated.Value(1);
  imageAnimated = new Animated.Value(0);

  constructor(Props: Props) {
    super(Props)
    this.state = {
      resizeMode: "contain"
    }
  }

  componentDidMount() {
    FastImage.preload([])
  }

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }
  onImageLoad = (event: OnLoadEvent) => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start();

    if (event.nativeEvent.width < width) {
      this.setState({ resizeMode: 'cover' })
    }

    // const height = event.nativeEvent.height / event.nativeEvent.width * width // By this, you keep the image ratio
  }

  render() {
    const {
      thumbnailSource,
      source,
      style,
      index,
      ...props
    } = this.props;

    const { resizeMode } = this.state

    return (
      <View style={styles.container}>
        {(index === 0 || index === 1) ? <AnimatedFastImage
          // {...props}
          resizeMode={resizeMode}
          source={thumbnailSource}
          style={style}
          onLoad={this.handleThumbnailLoad}
          onError={() => console.log("errror")}
        // blurRadius={1}
        /> : null}
        <AnimatedFastImage
          {...props}
          resizeMode={resizeMode}
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