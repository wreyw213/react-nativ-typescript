import { StyleSheet } from "react-native";
import { Theme } from "../../library/types";


const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BG_PRIMARY,
    },
});

export default styles