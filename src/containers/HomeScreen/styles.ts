import { Dimensions, StyleSheet } from "react-native";
import { cellHeight } from "./constans";

const { width } = Dimensions.get('window');

const cellWidth = width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cell: {
        width: cellWidth,
        backgroundColor: '#000000',

    },
    touchCover: {
        backgroundColor: '#e3ad7c',
        padding: 10,
        borderRadius: 10
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
    },
    poster: {
        resizeMode: 'cover',
    },
    overlayText: {
        color: '#fff',
    },
});

export default styles