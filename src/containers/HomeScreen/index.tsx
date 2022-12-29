import React, { useEffect, useRef, useState } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setMessage } from "../../library/redux/reducer";
import { AppDispatch, } from "../../library/redux/store";
import FlatItem from "./FlatItem";
import { getUsers } from "../../library/apis/userApis";

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
type UsersData = Array<obj>
// let LayoutArr = [] as Array<any>

const HomeScreen: React.FC<Props> = ({ navigation }) => {
	const flatListRef = useRef<FlatList>(null);
	const dispatch = useDispatch<AppDispatch>()
	const [data, setData] = useState<Array<obj>>([])

	useEffect(() => {
		setData(DATA.concat({ id: 221, title: new Date().getTime().toString() }))

		setTimeout(() => {
			dispatch(setMessage("hello world " + new Date().toLocaleDateString()))
		}, 2000)
	}, [])

	const fetchusers = () => {
		getUsers<UsersData>().then(({ data }) => {
			setData(data.data)
		}).catch((err) => {
			Alert.alert(err)
		})
	}


	return <SafeAreaView style={{ flex: 1 }}>
		<View style={[{ flex: 1, }]}>
			<TouchableOpacity style={{ marginTop: 10 }} onPress={fetchusers}>
				<Text style={{ color: 'blue' }}>Fetch Users</Text>
			</TouchableOpacity>
			<FlatList
				ref={flatListRef}
				data={data}
				renderItem={({ item, index }) => <FlatItem
					item={item}
					index={index}
				/>}
				bounces={false}
			/>
		</View>
	</SafeAreaView>
}

export default HomeScreen;
