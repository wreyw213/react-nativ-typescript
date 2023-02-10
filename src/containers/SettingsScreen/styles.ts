import { StyleSheet } from "react-native";
import ColorConstants from "../../library/constants/ColorConstants";
import { Theme } from "../../library/types";


const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstants.BG_PRIMARY[theme],
    },
});

export default styles