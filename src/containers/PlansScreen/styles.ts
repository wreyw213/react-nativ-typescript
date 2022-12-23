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

    }
})
export default styles