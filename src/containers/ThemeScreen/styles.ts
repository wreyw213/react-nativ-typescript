import { StyleSheet } from "react-native";
import { Theme } from "../../library/types";
import DimensionsValue from "../../library/utils/DimensionsValue";


const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BG_PRIMARY,
    },
    textHeading: {
        color: theme.TXT_PRIMARY,
        alignSelf: 'center',
        fontSize: DimensionsValue.VALUE_20
    },
    themesView: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: DimensionsValue.VALUE_20,
        marginHorizontal: DimensionsValue.VALUE_15
    },
    themesItem: {
        width: DimensionsValue.VALUE_165,
        height: DimensionsValue.VALUE_80,
        backgroundColor: 'white'
    }
});

export default styles