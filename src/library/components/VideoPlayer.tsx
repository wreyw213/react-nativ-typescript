import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Video, { LoadError, OnBufferData, OnLoadData, VideoProperties } from 'react-native-video'
import convertToProxyURL from 'react-native-video-cache';

type State = {
    loading: boolean,
    error: boolean,
    errorMessage: string,
    key: number
}

type VideoPropsTypes = {
    forwardedRef: any,
    index: number,
    source: string
}
type Props = VideoProperties & VideoPropsTypes

class VideoPlayer extends React.Component<Props, State> {
    unsubscribe: any;

    constructor(Props: Props) {
        super(Props)
        this.state = {
            loading: false,
            error: false,
            errorMessage: "",
            key: this.props.index
        }
        this.refresh = this.refresh.bind(this)
    }

    refresh() {
        this.setState({
            key: (this.state.key) * 2
        })
    }

    componentWillUnmount() {
        this.setState({
            loading: false,
            error: false,
            errorMessage: ""
        })
        if (this.unsubscribe) this.unsubscribe()
    }



    onBuffer = (data: OnBufferData) => {
        console.log("data", data);

        this.setState({ loading: data.isBuffering })
    }

    onError = (error: LoadError) => {
        console.log("error", error)
        this.setState({
            loading: false,
            error: true,
            errorMessage: error.error.errorString
        })
    }

    onLoadStart = () => {
        this.setState({
            loading: true,
            error: false
        })
    }


    onLoadComplete = (event: OnLoadData) => {
        this.setState({ loading: false, error: false })
    };


    render() {
        const { loading, error, errorMessage, key } = this.state
        const { source } = this.props
        console.log("source", this.props.index, source, convertToProxyURL(source))

        return (
            <View style={{ flex: 1 }}>
                {loading && <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'large'} color={'white'} />
                </View>}

                {error && <View style={styles.loadingContainer}>
                    <Text style={styles.textError}>
                        {errorMessage ? errorMessage : "Please check your internet connection"}
                    </Text>
                    <TouchableOpacity style={styles.touchRefresh} onPress={this.refresh}>
                        <Text style={styles.textRefresh}>Refresh</Text>
                    </TouchableOpacity>
                </View>}

                <Video
                    {...this.props}
                    key={key}
                    ref={this.props.forwardedRef}
                    onBuffer={this.onBuffer}
                    onError={this.onError}
                    onLoadStart={this.onLoadStart}
                    onLoad={this.onLoadComplete}
                    source={{ uri: convertToProxyURL(source) }}
                />

            </View>
        );
    }
}
interface RemoveVideoPropKeys {
    source: unknown
}

type VideoProps = Omit<VideoProperties, keyof RemoveVideoPropKeys>

type ExtraVideoProps = {
    index: number,
    source: string
}

const VideoPlayerForwardingRef = React.forwardRef<any, VideoProps & ExtraVideoProps>((props, ref) => (
    <VideoPlayer {...props} forwardedRef={ref} />
));


export default VideoPlayerForwardingRef

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        top: 100,
        left: 0,
        right: 0,
        bottom: 100,
    },
    textError: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 7,
        lineHeight: 30,
        marginHorizontal: 20
    },
    touchRefresh: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 10
    },
    textRefresh: {
        fontSize: 14,
        color: 'green'
    }
})