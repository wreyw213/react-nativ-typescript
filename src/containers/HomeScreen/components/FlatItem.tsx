import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import VideoPlayer from "../../../library/components/VideoPlayer";
import ProgressiveImage from "./ProgressiveImage";

type Props = {
	index: number,
	thumb: string,
	sources: string,
	media_small: string,
	title?: string,
	scrollToTop?: () => void,
	heightOfView: number,
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
		const { index, media_type, sources, media_small, title, scrollToTop, heightOfView } = this.props;

		return (
			<View style={[styles.cell, { height: heightOfView - 10, marginBottom: 10 }]}>

				<View style={[styles.viewTop]}>
					<TouchableOpacity onPress={scrollToTop}>
						<Text style={styles.overlayText}>Item no. {index} {media_type}</Text>
						<Text style={styles.overlayText}>{title}</Text>
					</TouchableOpacity>
				</View>

				{media_type == 'image' ?
					<ProgressiveImage
						index={index}
						style={styles.video}
						source={{ uri: sources }}
						thumbnailSource={{ uri: media_small }}
					/>
					:
					<VideoPlayer
						index={index}
						ref={(ref) => this.video = ref}
						source={sources}
						paused={true}
						style={styles.video}
						repeat={true}
					/>
				}
			</View>
		);
	}
}


export default FlatItem
