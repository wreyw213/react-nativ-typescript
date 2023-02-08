import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationState, useNavigationState, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from "react"
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ChatScreen from '../containers/ChatScreen';
import ScreenConstants from '../library/constants/ScreenConstants';
import { RootState } from '../library/redux/store';
import DrawerStack from './DrawerStack';

type Props = NativeStackScreenProps<any>

const TopTabNavigation: FC<Props> = () => {
    const Tab = createMaterialTopTabNavigator();

    const { currentNavigationState: { data } } = useSelector((state => state)) as RootState

    console.log("route++++++++++++++++", data)

    const enabledRoutes = [ScreenConstants.HOME_SCREEN, ScreenConstants.CHAT_SCREEN]
    return <Tab.Navigator screenOptions={{
        swipeEnabled: (!data?.name || enabledRoutes.includes(data?.name)) ? true : false,
    }}
        tabBar={(Prosp) => null}>
        <Tab.Screen
            name={ScreenConstants.DRAWER_STACK}
            component={DrawerStack}
        />
        <Tab.Screen name={ScreenConstants.CHAT_SCREEN} component={ChatScreen} />
    </Tab.Navigator>
}

export default TopTabNavigation