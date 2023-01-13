import React, { useRef, useState } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, LayoutChangeEvent, View } from "react-native";
import FlatItem from "./FlatItem";
import data from './data.json'
import { cellHeight } from "./constans";
type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>

let cellRefs: any = {}
type resizeMode = "contain" | "cover" | "none" | undefined;
const HomeScreen: React.FC<Props> = ({ navigation }) => {
	const flatListRef = useRef<FlatList>(null);
	const [heightOfView, setHeight] = useState(cellHeight)
	const [resizeMode, setResizeMode] = useState<resizeMode>('contain')

	const handleChangeResizeMode = () => {
		if (resizeMode == 'contain') setResizeMode('cover')
		else setResizeMode('contain')
	}

	const _renderItem = ({ item, index }: any) => {
		return (
			<FlatItem
				key={index}
				index={index}
				ref={(ref) => {
					cellRefs[item.id] = ref;
				}}
				scrollToTop={scrollToTop}
				heightOfView={heightOfView}
				resizeMode={resizeMode}
				handleChangeResizeMode={handleChangeResizeMode}
				{...item}
			/>
		);
	};

	const scrollToTop = () => {
		flatListRef.current?.scrollToIndex({ index: 0, animated: false })
	}

	const onViewableItemsChanged = (props: any) => {
		const changed = props.changed;
		changed.forEach((item: any) => {
			const cell = cellRefs[item.key];
			if (cell) {
				if (item.isViewable) {
					cell.play();
				} else {
					cell.pause();
				}
			}
		});
	};
	const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 70 });
	const onViewRef = useRef(onViewableItemsChanged);

	// const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

	return <View style={[{ flex: 1 }]}>

		<FlatList
			ref={flatListRef}
			style={{ flex: 1 }}
			contentContainerStyle={{ flexGrow: 1 }}
			data={data}
			renderItem={_renderItem}
			keyExtractor={(item, index) => index.toString()}
			// viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
			onViewableItemsChanged={onViewRef.current}
			viewabilityConfig={viewConfigRef.current}
			initialNumToRender={3}
			maxToRenderPerBatch={3}
			windowSize={5}
			getItemLayout={(_data, index) => ({
				length: heightOfView,
				offset: heightOfView * index,
				index,
			})}
			onLayout={(e: LayoutChangeEvent) => {
				const { height } = e.nativeEvent.layout
				setHeight(height)
			}}
			snapToInterval={heightOfView}
			snapToAlignment="start"
			decelerationRate={"fast"}
			removeClippedSubviews={true}
			pagingEnabled={true}
		/>
	</View>
}

export default HomeScreen;
