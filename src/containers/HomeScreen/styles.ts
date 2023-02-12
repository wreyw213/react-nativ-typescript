import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../library/constants/ColorConstants';
import {Theme} from '../../library/types';
import DimensionsValue from '../../library/utils/DimensionsValue';


const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const styles = (theme: Theme) =>
  StyleSheet.create({
    bg: {
      flex: 1,
      resizeMode: 'cover',
      width: DIMENSION_WIDTH,
      height: DIMENSION_HEIGHT,
    },
    top: {
      paddingTop: 50,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerHome: {
      marginHorizontal: 10,
    },
    imageHeaderProfile:{
      width:DimensionsValue.VALUE_40,
      height:DimensionsValue.VALUE_40,
      alignSelf:'center',
      justifyContent:'center',
    }
  });

export default styles;
