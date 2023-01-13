import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { LoadError, OnBufferData, OnLoadData } from 'react-native-video'
import VideoPlayer from "../../library/components/VideoPlayer";

type resizeMode = "stretch" | "contain" | "cover" | "none" | undefined;
type Props = {
    index: string,
    thumb: string,
    sources: string,
    title?: string,
    scrollToTop?: () => void,
    heightOfView: number,
    handleChangeResizeMode: () => void,
    resizeMode: resizeMode
}

class FlatItem extends React.PureComponent<Props> {
    video: any;

    componentWillUnmount() {
        if (this.video) {
            //@ts-ignore-next-line
            // this.video.setNativeProps({ paused: true })
        }
    }

    async play() {
        // const status = await this.video.getStatusAsync();
        // if (status.isPlaying) {
        // return;
        // }
        console.log("playing=============", this.video)
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
        const { index, thumb, sources, title, scrollToTop, resizeMode, heightOfView, handleChangeResizeMode } = this.props;
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
                <VideoPlayer
                    ref={(ref) => this.video = ref}
                    source={{ uri: sources }}
                    paused={true}
                    resizeMode={resizeMode}
                    style={styles.video}
                    repeat={true}
                />
            </View>
        );
    }
}


export default FlatItem
