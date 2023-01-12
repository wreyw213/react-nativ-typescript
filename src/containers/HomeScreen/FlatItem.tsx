import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Video from 'react-native-video'
// type obj = {
//     id: number,
//     title: string
// }

type Props = {
    index: string,
    thumb: string,
    sources: string,
    title?: string,
    scrollToTop?: () => void
}

class FlatItem extends React.PureComponent<Props> {
    video: Video | null | undefined;

    componentWillUnmount() {
        if (this.video) {
            // this.video.unloadAsync();
        }
    }

    async play() {
        // const status = await this.video.getStatusAsync();
        // if (status.isPlaying) {
        // return;
        // }
        // return this.video?.setState({ pause: false })

        //@ts-ignore-next-line
        return this.video?.setNativeProps({ paused: false, seek: { time: 0 } })
    }

    pause() {
        if (this.video) {
            // console.log("this.video", this.video)
            //@ts-ignore-next-line
            this.video.setNativeProps({ paused: true })
        }
    }

    render() {
        const { index, thumb, sources, title, scrollToTop } = this.props;
        return (
            <View style={[styles.cellView]}>
                <View style={[styles.cell,]}>
                    {/* <Image
                    source={{
                        uri: thumb,
                        cache: 'force-cache',
                    }}
                    style={[styles.full, styles.poster]}
                /> */}
                    <Video
                        ref={(ref) => this.video = ref}
                        source={{ uri: sources }}
                        paused={true}
                        resizeMode="cover"
                        style={styles.full}
                        repeat={true}
                    />
                    <TouchableOpacity style={styles.overlay} onPress={scrollToTop}>
                        <Text style={styles.overlayText}>Item no. {index}</Text>
                        <Text style={styles.overlayText}>{title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FlatItem
