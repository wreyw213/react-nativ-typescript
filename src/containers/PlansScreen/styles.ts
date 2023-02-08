import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: 150,
        backgroundColor: '#FFF',
        borderWidth: 4,
        borderColor: '#000FF2',

    },
    buttonText: {

    },
    inputSearch: {
        padding: 15,
        borderWidth: 2,
        borderColor: '#fefefe',
        position: 'absolute',
        top: 20,
        backgroundColor: '#dedede',
        left: 20,
        right: 20,
        zIndex: 999,
        borderRadius: 15
    }
})
export default styles