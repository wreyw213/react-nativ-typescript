import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../library/constants/ColorConstants';
import {Theme} from '../../library/types';
import DimensionsValue from '../../library/utils/DimensionsValue';


const styles = (theme: Theme) =>
  StyleSheet.create({
    viewHeader : {

    },
    textActivities:{
        color:theme.TXT_PRIMARY,
        marginHorizontal:DimensionsValue.VALUE_20,
        fontSize:DimensionsValue.VALUE_18,
        fontWeight:'700'
    },
    textMessages:{
        color:theme.TXT_PRIMARY,
        marginHorizontal:DimensionsValue.VALUE_20,
        fontSize:DimensionsValue.VALUE_18,
        fontWeight:'700'
    },
    imageSearch:{
        width:DimensionsValue.VALUE_22,
        height:DimensionsValue.VALUE_22,
        tintColor:theme.TXT_PRIMARY
    },
  });

export default styles;
