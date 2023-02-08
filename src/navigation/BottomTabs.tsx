import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import React, { FC, useEffect } from "react"
import HomeScreen from "../containers/HomeScreen";
import PlansScreen from "../containers/PlansScreen";
import SettingsScreen from "../containers/SettingsScreen";
import UserInfoScreen from "../containers/UserInfoScreen";
import ScreenConstants from "../library/constants/ScreenConstants";

type Props = DrawerScreenProps<any> & { topTabNavigation: MaterialTopTabNavigationProp<any> }

const BottomTab: FC<Props> = ({ topTabNavigation }) => {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Tab.Screen
            name={ScreenConstants.HOME_SCREEN}
            // component={HomeScreen} 
            children={(Props) => <HomeScreen
                {...Props}
                topTabNavigation={topTabNavigation}
            />}
        />
        <Tab.Screen name={ScreenConstants.USERINFO_SCREEN} component={UserInfoScreen} />
        <Tab.Screen name={ScreenConstants.PLANS_SCREEN} component={PlansScreen} />
        <Tab.Screen name={ScreenConstants.SETTINGS_SCREEN} component={SettingsScreen} />
    </Tab.Navigator>
}

export default BottomTab