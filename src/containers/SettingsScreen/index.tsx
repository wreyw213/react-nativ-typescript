import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>

const SettingsScreen: React.FC<Props> = ({ navigation }) => {

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, }}>
            <WebView
                originWhitelist={['*']}
                source={{ html: '<h1 style="color:grey;font-size:74px">Settings Screen<h1>' }}
                style={{ flex: 1 }}
                scrollEnabled={true}
                startInLoadingState={true}
            />
        </View>
    </SafeAreaView>
}

export default SettingsScreen

