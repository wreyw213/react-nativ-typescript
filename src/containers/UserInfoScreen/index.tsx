import React, { useState } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../library/components/Button";
import { LoginData } from "../../library/types/userInfo";
import { loginApi } from "../../library/apis/userApis";

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>


const UserInfoScreen: React.FC<Props> = ({ navigation }) => {

    const [userData, setUserData] = useState<LoginData>()

    const handleLogin = (): void => {
        const apiData = {
            "email": "Tester.xyz008@yopmail.com",
            "password": "Test@1234",
            "device_type": "app"
        }
        loginApi<LoginData>(apiData).then(({ data }) => {
            setUserData(data.data)
            Alert.alert(data.message)
        }).catch((err) => {
            console.log("error", err)
            Alert.alert(err)
        })
    }

    return <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, }}>

            <Button
                title="Login"
                onPress={handleLogin}
                containerStyle={styles.buttonContainer}
                textStyle={styles.buttonText}
            />
            <Text style={styles.textUserData}>{JSON.stringify(userData)}</Text>

        </ScrollView>

    </SafeAreaView>
}

export default UserInfoScreen

