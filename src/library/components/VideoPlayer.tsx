import React from "react";
import { View } from "react-native";
import Video, { LoadError, OnBufferData, OnLoadData, VideoProperties } from 'react-native-video'

type State = {
    loading: boolean,
    error: boolean,
    errorMessage: string
}
type Props = VideoProperties & { forwardedRef: any }

class VideoPlayer extends React.Component<Props, State> {

    constructor(Props: Props) {
        super(Props)
        this.state = {
            loading: false,
            error: false,
            errorMessage: ""
        }
    }

    componentWillUnmount() {
        this.setState({
            loading: false,
            error: false,
            errorMessage: ""
        })
    }



    onBuffer = (data: OnBufferData) => {
        console.log("buffer index", data.isBuffering)
        this.setState({ loading: data.isBuffering })

    }

    onError = (error: LoadError) => {
        console.log("error", error.error.errorString)
        this.setState({
            loading: false,
            error: true,
            errorMessage: error.error.errorString
        })
    }

    onLoadStart = () => {
        console.log("load start")
        this.setState({
            loading: true,
            error: false
        })
    }


    onLoadComplete = (event: OnLoadData) => {
        console.log("onLoadComplete=>>>>>>>>>");
        this.setState({ loading: false, error: false })
    };


    render() {
        return (
            <View style={{ flex: 1 }}>


                <Video
                    {...this.props}
                    ref={this.props.forwardedRef}
                    onBuffer={this.onBuffer}
                    onError={this.onError}
                    onLoadStart={this.onLoadStart}

                    onLoad={this.onLoadComplete}
                />

            </View>
        );
    }
}

const VideoPlayerForwardingRef = React.forwardRef<any, VideoProperties>((props, ref) => (
    <VideoPlayer {...props} forwardedRef={ref} />
));


export default VideoPlayerForwardingRef
