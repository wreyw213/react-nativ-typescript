import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import useTheme from "../../library/hooks/useTheme";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any> & BottomTabScreenProps<any>

const SettingsScreen: React.FC<Props> = ({ navigation }) => {

    const [theme] = useTheme();

    return <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <WebView
            originWhitelist={['*']}
            source={{ html: '<h1 style="color:grey;font-size:74px">Settings Screen<h1>' }}
            // style={{ flex: 1 }}
            scrollEnabled={true}
            startInLoadingState={true}
            style={{ backgroundColor: 'red', flex: 1 }}
        />
    </SafeAreaView>
}

export default SettingsScreen

