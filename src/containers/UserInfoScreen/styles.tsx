import { StyleSheet } from "react-native";
import ColorConstants from "../../library/constants/ColorConstants";
import { Theme } from "../../library/types";

const styles = (theme: Theme) => StyleSheet.create({
    buttonContainer: {
        width: 150,
        backgroundColor: theme.BG_SECONDRY,
        borderWidth: 4,
        borderColor: theme.BG_SECONDRY,
        margin: 10
    },
    buttonText: {
        color: theme.TXT_SECONDARY,
        fontWeight: '700'
    },
    textUserData: {
        marginHorizontal: 20,
        letterSpacing: 1.8
    },
    safeAreaView: {
        backgroundColor: theme.BG_PRIMARY,
        flex: 1
    }
})
export default styles