import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Colors } from '../../../library/constants';
import useTheme from '../../../library/hooks/useTheme';
import images from '../../../library/resources/images';
import { Theme } from '../../../library/types';
import DimensionsValue from '../../../library/utils/DimensionsValue';

const {WHITE,DARK_GRAY,BLACK,GRAY,YELLOW,LIKE_ACTIONS,FLASH_ACTIONS,PRIMARY_BUTTON,SECONDARY_BUTTON} = Colors

type Props = {
  image:any
  name:any
  onPressLeft:any
  onPressRight:any,
  onPressChat?:any
}
const MatchCard = ({
  image,
  name,
  onPressLeft,
  onPressRight,
  onPressChat
}:Props) => {
  const [theme] = useTheme();


  return (
    <View style={styles(theme).containerCardItem}>
      {/* IMAGE */}
      <ImageBackground source={image || images.IC_USER} style={styles(theme).imageStyle}>



      

      {/* NAME */}
      <Text style={styles(theme).nameStyle}>{name}</Text>


      {/* ACTIONS */}
        <View style={styles(theme).actionsCardItem}>
          <TouchableOpacity style={styles(theme).miniButton} onPress={() => onPressSuperLike()}>
            <Image style={styles(theme).imageActions} source={images.IC_STAR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).button} onPress={() => onPressLeft()}>
            <Image style={styles(theme).imageActions} source={images.IC_HEART} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles(theme).button}
            onPress={() => onPressRight()}>
            <Image style={[styles(theme).imageActions,styles(theme).imageDisLike]} source={images.IC_PLUS} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).miniButton}>
            <Image style={styles(theme).imageActions} source={images.IC_FLESH} />
          </TouchableOpacity>
        </View>

        </ImageBackground>

    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    // COMPONENT - CARD ITEM
    containerCardItem: {
      backgroundColor: theme.BG_SECONDRY,
      borderRadius: DimensionsValue.VALUE_15,
      alignItems: 'center',
      margin: DimensionsValue.VALUE_10,
      shadowOpacity: 0.05,
      shadowRadius: DimensionsValue.VALUE_10,
      shadowColor: BLACK,
      shadowOffset: {height: 0, width: 0},
    },
    matchesCardItem: {
      marginTop: -DimensionsValue.VALUE_40,
      backgroundColor: PRIMARY_BUTTON,
      paddingVertical: DimensionsValue.VALUE_10,
      paddingHorizontal: DimensionsValue.VALUE_20,
      borderRadius: DimensionsValue.VALUE_20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    matchesTextCardItem: {
      color: WHITE,
    },
    descriptionCardItem: {
      color: theme.TXT_SECONDARY,
      opacity: 0.6,
      textAlign: 'center',
      marginHorizontal: DimensionsValue.VALUE_5,
    },
    status: {
      paddingBottom: DimensionsValue.VALUE_10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionsCardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: DimensionsValue.VALUE_30,
    },
    button: {
      width: DimensionsValue.VALUE_60,
      height: DimensionsValue.VALUE_60,
      borderRadius: DimensionsValue.VALUE_30,
      backgroundColor: theme.BG_PRIMARY,
      marginHorizontal: DimensionsValue.VALUE_7,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOpacity: 0.15,
      shadowRadius: DimensionsValue.VALUE_20,
      shadowColor: DARK_GRAY,
      shadowOffset: {height: DimensionsValue.VALUE_10, width: 0},
    },
    miniButton: {
      width: DimensionsValue.VALUE_40,
      height: DimensionsValue.VALUE_40,
      borderRadius: DimensionsValue.VALUE_30,
      backgroundColor: theme.BG_PRIMARY,
      marginHorizontal: DimensionsValue.VALUE_7,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOpacity: 0.15,
      shadowRadius: DimensionsValue.VALUE_20,
      shadowColor: DARK_GRAY,
      shadowOffset: {height: DimensionsValue.VALUE_10, width: 0},
    },
    imageActions: {
      width: DimensionsValue.VALUE_20,
      height: DimensionsValue.VALUE_20,
    },
    imageDisLike: {
      transform: [{rotate: '45 deg'}],
      tintColor:theme.TXT_PRIMARY
    },

    imageStyle:{
        width:DimensionsValue.VALUE_165,
        height:DimensionsValue.VALUE_165,
    },

    nameStyle:{
        marginTop:'auto'
    }
  });

export default MatchCard;



