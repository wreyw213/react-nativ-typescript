import React, { useEffect, useRef, useState } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppState, AppStateStatus, FlatList, LayoutChangeEvent, Text, View } from "react-native";
import { useIsFocused, useNavigationState } from "@react-navigation/native";
import { useDrawerStatus } from '@react-navigation/drawer';
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import useTheme from "../../library/hooks/useTheme";
import styles from "./styles";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any> & { topTabNavigation?: MaterialTopTabNavigationProp<any> }


const HomeScreen: React.FC<Props> = ({ navigation, topTabNavigation }) => {
	const isFoucused = useIsFocused()
	const [theme] = useTheme()

	return <View style={styles(theme).container}>

		<Text style={styles(theme).overlayText}> Find Matches Screen</Text>
	</View>
}

export default HomeScreen;
