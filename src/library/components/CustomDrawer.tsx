import React, { FC, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Switch, StatusBar } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import ColorConstants, { Colors } from '../constants/ColorConstants';
import DimensionsValue from '../utils/DimensionsValue';
import { updateTheme } from '../redux/themeReducer';
import useTheme from '../hooks/useTheme';
import { Theme } from '../types';
import { AppDispatch } from '../redux/store';
import Button from './Button';
import ScreenConstants from '../constants/ScreenConstants';

const CustomDrawer: FC<DrawerContentComponentProps> = ({ navigation }) => {

	const [theme] = useTheme()
	const dispatch = useDispatch() as AppDispatch;
	const [isEnabled, setIsEnabled] = useState(theme.type == 'dark' ? true : false)

	useEffect(() => {
		StatusBar.setBarStyle(theme.type == 'dark' ? 'light-content' : 'dark-content')
		setIsEnabled(theme.type == 'dark' ? true : false)
	}, [theme])


	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.BG_PRIMARY }} edges={['top', 'right', 'left']}>
			<DrawerContentScrollView contentContainerStyle={{ paddingTop: 0, flexGrow: 1, borderTopRightRadius: DimensionsValue.VALUE_20 }} showsVerticalScrollIndicator={false} bounces={false}>

				<View style={{ flex: 1 }} >
					{/* <Button
						title={'Theme Settings'}
						onPress={() => navigation.navigate(ScreenConstants.THEME_SCREEN)}
					/> */}
				</View>

				<View style={styles(theme).viewSwitch}>
					<Switch
						trackColor={{ false: Colors.C4C4C4, true: Colors.DARK_BLUE }}
						thumbColor={isEnabled ? Colors.WHITE : Colors.F4F3F4}
						ios_backgroundColor={Colors.C4C4C4}
						onValueChange={(value) => {
							setIsEnabled(value)
							dispatch(updateTheme(value ? 'dark' : 'light'))
						}}
						value={isEnabled}
					/>
					<Text style={styles(theme).textDarkMode}>Dark Mode</Text>
				</View>
			</DrawerContentScrollView>
		</SafeAreaView>
	)
}
const styles = (theme: Theme) => StyleSheet.create({
	viewSwitch: {
		marginHorizontal: DimensionsValue.VALUE_15,
		marginVertical: DimensionsValue.VALUE_20,
		flexDirection: 'row',
		alignItems: 'center',

	},
	textDarkMode: {
		color: theme.TXT_PRIMARY,
		fontSize: DimensionsValue.VALUE_14,
		marginStart: DimensionsValue.VALUE_10,
		alignSelf: 'center'
	}
})

export default CustomDrawer