import { StyleSheet } from "react-native";
import ColorConstants from "../../library/constants/ColorConstants";
import { Theme } from "../../library/types";

const styles = (theme: Theme) => StyleSheet.create({
    buttonContainer: {
        width: 150,
        backgroundColor: ColorConstants.BG_SECONDRY[theme],
        borderWidth: 4,
        borderColor: ColorConstants.BG_SECONDRY[theme],
        margin: 10
    },
    buttonText: {
        color: ColorConstants.TXT_SECONDARY[theme],
        fontWeight: '700'
    },
    textUserData: {
        marginHorizontal: 20,
        letterSpacing: 1.8
    },
    safeAreaView: {
        backgroundColor: ColorConstants.BG_PRIMARY[theme],
        flex: 1
    }
})
export default styles