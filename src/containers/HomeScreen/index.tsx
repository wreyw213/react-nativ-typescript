import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { runOnce } from "../../library/utils";
import { useIsFocused } from "@react-navigation/native";
import styles from "./styles";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>

const DATA = [
	{ id: 1, title: "hello world" },
	{ id: 2, title: "34 world" },
	{ id: 3, title: "343 world" },
	{ id: 4, title: "hell34o world" },
	{ id: 5, title: "4 world" },
	{ id: 6, title: "43 34" },
	{ id: 7, title: "df wodfdrld" },
	{ id: 8, title: "df df" },
	{ id: 9, title: "d world" },
	{ id: 10, title: "hellfddo world" },
	{ id: 11, title: "heldflo world" },
	{ id: 12, title: "hello world" },
	{ id: 13, title: "hello world" },
	{ id: 14, title: "dfdd world" },
	{ id: 15, title: "helddlo world" },
	{ id: 16, title: "d world" },
	{ id: 17, title: "helfddlo world" },
	{ id: 18, title: "d df" },
	{ id: 19, title: "d de" },
	{ id: 20, title: ",m ,m" },
	{ id: 21, title: "m, worl,md" },
]

type obj = {
	id: number,
	title: string
}
const HomeScreen: React.FC<Props> = ({ navigation }) => {
	const isFocused = useIsFocused()

	const [count, setCount] = useState(1)
	const [data, setData] = useState<Array<obj>>([])
	useEffect(() => {
		if (!isFocused) return
		setData(DATA.concat({ id: 221, title: new Date().getTime().toString() }))
		// const listenrt = Keyboard.addListener('keyboardDidShow', (e) => console.log("keyBoard Show"))
		// return () => {
		// 	console.log("cleanUp running =>>>>>>>")
		// 	listenrt.remove()
		// }
	}, [isFocused])

	const handleButtonClick = useMemo(() => runOnce(() => {
		setCount(prev => prev + 1)
	}, 1000), []);


	return <SafeAreaView style={{ flex: 1 }}>
		<View style={{ flex: 1, }}>
			{/* <Text style={{ margin: 10, color: 'red', fontSize: 24 }}>{count}</Text> */}
			{/* <TouchableOpacity style={{ marginTop: 10 }} onPress={handleButtonClick}>
				<Text style={{ color: 'blue' }}>Increment Count</Text>
			</TouchableOpacity> */}

			<FlatList
				data={data}
				renderItem={({ item, index }) => <View style={styles.viewItem}>
					<Text style={styles.textItem}>{item.title}</Text>
				</View>}
			/>
		</View>
	</SafeAreaView>
}

export default HomeScreen;
