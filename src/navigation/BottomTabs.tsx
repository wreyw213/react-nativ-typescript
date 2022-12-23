import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react"
import HomeScreen from "../containers/HomeScreen";
import PlansScreen from "../containers/PlansScreen";
import SettingsScreen from "../containers/SettingsScreen";
import UserInfoScreen from "../containers/UserInfoScreen";

const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Tab.Screen name="PlansScreen" component={PlansScreen} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
}

export default BottomTab