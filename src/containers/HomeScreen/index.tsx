import React, { useEffect, useRef, useState } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setMessage } from "../../library/redux/reducer";
import { AppDispatch, } from "../../library/redux/store";
import FlatItem from "./FlatItem";
import { getUsers } from "../../library/apis/userApis";
import data from './data.json'
import { cellHeight } from "./constans";
type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>

const { width } = Dimensions.get('window');

const cellWidth = width;
type obj = {
	id: number,
	title: string
}
type UsersData = Array<obj>
// let LayoutArr = [] as Array<any>
const viewabilityConfig = {
	itemVisiblePercentThreshold: 80,
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
	const flatListRef = useRef<FlatList>(null);
	const dispatch = useDispatch<AppDispatch>()
	let cellRefs: any = {}

	const _renderItem = ({ item, index }: any) => {
		return (
			<FlatItem
				key={index}
				index={index}
				ref={(ref) => {
					cellRefs[item.id] = ref;
				}}
				scrollToTop={scrollToTop}
				{...item}
			/>
		);
	};

	const scrollToTop = () => {
		flatListRef.current?.scrollToIndex({ index: 0, animated: false })
	}

	const _onViewableItemsChanged = (props: any) => {
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

	return <SafeAreaView style={{ flex: 1 }}>
		<View style={[{ flex: 1, }]}>

			<FlatList
				ref={flatListRef}
				style={{ flex: 1 }}
				data={data}
				renderItem={_renderItem}
				keyExtractor={(item) => item.id}
				onViewableItemsChanged={_onViewableItemsChanged}
				initialNumToRender={3}
				maxToRenderPerBatch={3}
				windowSize={5}
				getItemLayout={(_data, index) => ({
					length: cellHeight,
					offset: cellHeight * index,
					index,
				})}
				// onLayout={(e) => {
				// 	const { height } = e.nativeEvent.layout
				// 	setheight(height)
				// 	console.log("ee=>>>", e.nativeEvent.layout)
				// }}
				decelerationRate={0.7}
				// snapToAlignment={'center'}
				viewabilityConfig={viewabilityConfig}
				removeClippedSubviews={true}
				ListFooterComponent={
					<TouchableOpacity>
						<Text style={{ padding: 30 }}>Load more</Text>
					</TouchableOpacity>
				}
				pagingEnabled={true}
			/>
		</View>
	</SafeAreaView>
}

export default HomeScreen;
