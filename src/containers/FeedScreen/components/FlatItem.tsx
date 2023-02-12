import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import VideoPlayer from "../../../library/components/VideoPlayer";
import ProgressiveImage from "./ProgressiveImage";
import { Theme } from "../../../library/types";

type Props = {
	index: number,
	thumb: string,
	sources: string,
	media_small: string,
	title?: string,
	scrollToTop?: () => void,
	heightOfView: number,
	media_type: "image" | "video",
	theme: Theme
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
		const { index, media_type, sources, media_small, title, scrollToTop, heightOfView, theme } = this.props;

		return (
			<View style={[styles(theme).cell, { height: heightOfView }]}>

				<View style={[styles(theme).viewTop]}>
					<TouchableOpacity onPress={scrollToTop}>
						<Text style={styles(theme).overlayText}>Item no. {index} {media_type}</Text>
						<Text style={styles(theme).overlayText}>{title}</Text>
					</TouchableOpacity>
				</View>

				{media_type == 'image' ?
					<ProgressiveImage
						index={index}
						style={styles(theme).video}
						source={{ uri: sources }}
						thumbnailSource={{ uri: media_small }}
					/>
					:
					<VideoPlayer
						index={index}
						ref={(ref) => this.video = ref}
						source={sources}
						paused={true}
						style={styles(theme).video}
						repeat={true}
					/>
				}

				<Text style={styles(theme).textDescription}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis quasi at ducimus quod ipsam corporis, tempore, mollitia ullam cum voluptatem praesentium incidunt quos consequatur suscipit porro, maiores ad quaerat.
				</Text>
			</View>
		);
	}
}


export default FlatItem
