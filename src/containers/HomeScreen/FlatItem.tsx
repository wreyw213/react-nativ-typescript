import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import VideoPlayer from "../../library/components/VideoPlayer";
import ProgressiveImage from "./ProgressiveImage";

type resizeMode = "stretch" | "contain" | "cover" | "none" | undefined;
type Props = {
    index: number,
    thumb: string,
    sources: string,
    media_small: string,
    title?: string,
    scrollToTop?: () => void,
    heightOfView: number,
    handleChangeResizeMode: () => void,
    resizeMode: resizeMode,
    media_type: "image" | "video"
}

class FlatItem extends React.PureComponent<Props> {
    video: any;

    componentWillUnmount() {
        if (this.video) {
            //@ts-ignore-next-line
            // this.video.setNativeProps({ paused: true })
        }
    }

    async play(seek: boolean) {
        // const status = await this.video.getStatusAsync();
        // if (status.isPlaying) {
        // return;
        // }
        console.log("playing=============")
        //@ts-ignore-next-line
        if (seek) this.video?.setNativeProps({ paused: false, seek: { time: 0 } })
        else this.video?.setNativeProps({ paused: false })
    }

    pause() {
        if (this.video) {
            // console.log("this.video", this.video)
            //@ts-ignore-next-line
            this.video.setNativeProps({ paused: true })
        }
    }

    render() {
        const { index, media_type, sources, media_small, title, scrollToTop, resizeMode, heightOfView, handleChangeResizeMode } = this.props;
        let src = sources
        let thumb = media_small
        if (media_type == 'image') {
            const id = sources.indexOf('jpeg')
            src = sources.substring(0, id + 4)

            const idx = media_small.indexOf('jpeg')
            thumb = media_small.substring(0, idx + 4)
        }
        return (
            <View style={[styles.cell, { height: heightOfView - 10, marginBottom: 10 }]}>

                <View style={[styles.viewTop]}>
                    <TouchableOpacity onPress={scrollToTop}>
                        <Text style={styles.overlayText}>Item no. {index}</Text>
                        <Text style={styles.overlayText}>{title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchCover} onPress={handleChangeResizeMode}>
                        <Text style={styles.overlayText}>Cover/Contain</Text>
                    </TouchableOpacity>
                </View>

                {/* <Image
                    source={{
                        uri: thumb,
                        cache: 'force-cache',
                    }}
                    style={[styles.full, styles.poster]}
                /> */}
                {media_type == 'image' ?
                    <ProgressiveImage
                        index={index}
                        style={styles.video}
                        source={{ uri: src }}
                        thumbnailSource={{ uri: thumb }}
                    />
                    :
                    <VideoPlayer
                        index={index}
                        ref={(ref) => this.video = ref}
                        source={{ uri: sources }}
                        paused={true}
                        resizeMode={resizeMode}
                        style={styles.video}
                        repeat={true}
                    />
                }
            </View>
        );
    }
}


export default FlatItem
