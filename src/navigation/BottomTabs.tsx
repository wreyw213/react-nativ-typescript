import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import React, { FC, useEffect } from "react"
import HomeScreen from "../containers/HomeScreen";
import PlansScreen from "../containers/PlansScreen";
import SettingsScreen from "../containers/SettingsScreen";
import UserInfoScreen from "../containers/UserInfoScreen";

type Props = DrawerScreenProps<any> & { topTabNavigation: MaterialTopTabNavigationProp<any> }

const BottomTab: FC<Props> = ({ topTabNavigation }) => {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Tab.Screen
            name="HomeScreen"
            // component={HomeScreen} 
            children={(Props) => <HomeScreen
                {...Props}
                topTabNavigation={topTabNavigation}
            />}
        />
        <Tab.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Tab.Screen name="PlansScreen" component={PlansScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
}

export default BottomTab