import { Dimensions, StyleSheet } from "react-native";
import { cellHeight } from "./constans";

const { width } = Dimensions.get('window');

const cellWidth = width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cellView: {
        height: cellHeight,
    },
    cell: {
        // width: cellWidth - 20,
        // height: cellHeight - 20,
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 20,
        overflow: 'hidden',
        margin: 10,

    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 40,
    },
    full: {
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