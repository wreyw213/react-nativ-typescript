
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react"
import { Text, View } from "react-native";
import HomeScreen from "../containers/HomeScreen";
import SettingsScreen from "../containers/SettingsScreen";
import ScreenConstants from "../library/constants/ScreenConstants";
import BottomTab from "./BottomTabs";

function NotificationsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notification Screen</Text>
        </View>
    );
}

const DrawerStack = () => {
    const Drawer = createDrawerNavigator();


    return <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerTitle: '',
        headerShown: false
    }}>
        <Drawer.Screen name={ScreenConstants.HOME_STACK} component={BottomTab} />
        <Drawer.Screen name="HomeSCREEN" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
}

export default DrawerStack