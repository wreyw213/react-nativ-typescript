import React from "react";
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  thumbnailSource: any,
  source: any,
  style: any,
  index: number
}

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
      ...props
    } = this.props;
    console.log("thumbnailSource", index, typeof index, index === 1)
    return (
      <View style={styles.container}>
        {(index === 0 || index === 1) ? <Animated.Image
          // {...props}
          source={thumbnailSource}
          style={style}
          // onLoad={this.handleThumbnailLoad}
          onError={(err) => console.log("errror", err)}
          blurRadius={1}
        /> : null}
        <Animated.Image
          {...props}
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