import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import useTheme from "../../library/hooks/useTheme";
import { PredefinedThemes } from "../../library/constants/ColorConstants";
import { DefaultThemes } from "../../library/types";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any> & BottomTabScreenProps<any>

const ThemeScreen: React.FC<Props> = ({ navigation }) => {

    const [theme] = useTheme();

    return <SafeAreaView style={styles(theme).container}>

        <Text style={styles(theme).textHeading}>Select your app theme</Text>

        <View style={styles(theme).themesView}>
            {Object.keys(PredefinedThemes).map((value: string) => {
                //@ts-ignore
                const item: any = PredefinedThemes[value]

                return <View style={styles(theme).themesItem}>
                    <Text>{item.title}</Text>
                </View>
            })}
        </View>

    </SafeAreaView>
}

export default ThemeScreen

