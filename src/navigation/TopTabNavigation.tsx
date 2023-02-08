import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from "react"
import ChatScreen from '../containers/ChatScreen';
import DrawerStack from './DrawerStack';

type Props = NativeStackScreenProps<any>

const TopTabNavigation: FC<Props> = () => {
    const Tab = createMaterialTopTabNavigator();
    return <Tab.Navigator tabBar={(Prosp) => null}>
        <Tab.Screen options={{ title: 'DrawerStack' }} name='DrawerStack' component={DrawerStack} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
    </Tab.Navigator>
}

export default TopTabNavigation