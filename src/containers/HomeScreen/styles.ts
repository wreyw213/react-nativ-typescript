import { Dimensions, StyleSheet } from "react-native";
import ColorConstants from "../../library/constants/ColorConstants";
import { Theme } from "../../library/types";
import { cellHeight } from "./utils/constants";

const { width } = Dimensions.get('window');

const cellWidth = width;
const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstants.BG_PRIMARY[theme],
    },
    cell: {
        width: cellWidth,
        backgroundColor: ColorConstants.BG_PRIMARY[theme],

    },
    viewTop: {
        flexDirection: 'row',
        padding: 40,
        justifyContent: 'space-between',
        position: 'absolute',
        right: 0,
        left: 0,
        zIndex: 999
    },
    video: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: ColorConstants.BG_PRIMARY[theme]
    },
    poster: {
        resizeMode: 'cover',
    },
    overlayText: {
        color: ColorConstants.TXT_PRIMARY[theme],
    },
    textDescription: {
        color: ColorConstants.TXT_PRIMARY[theme]
    }
});

export default styles