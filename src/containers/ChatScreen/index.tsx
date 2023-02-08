import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any> & BottomTabScreenProps<any>

const ChatScreen: React.FC<Props> = ({ navigation }) => {

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, }}>
            <Text>Chat Screen</Text>
        </View>
    </SafeAreaView>
}

export default ChatScreen

