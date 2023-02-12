import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ColorConstants, Colors } from "../../../library/constants";
import useTheme from "../../../library/hooks/useTheme";
import images from "../../../library/resources/images";
import { Theme } from "../../../library/types";
import DimensionsValue from "../../../library/utils/DimensionsValue";

type Props = {
  item: any;
  handlePressItem: (item: any) => void;
};
const ItemMessage: FC<Props> = ({handlePressItem, item}) => {
    const [theme] = useTheme();

  return <TouchableOpacity style={styles(theme).viewContainer}>
    <Image source={item.image || images.IC_USER} style={styles(theme).imageUser}/>
    <View style={styles(theme).viewDetails}>
        <Text style={styles(theme).textUserName}>{item.name}</Text>
        <Text style={styles(theme).textLastMessage}>LAst message HII</Text>
    </View>
    <View style={styles(theme).viewLastMessageDetails}>
        <Text style={styles(theme).textLastMessageTime}>23 min</Text>
        <View style={styles(theme).viewUnReadMessageCount}>
            <Text style={styles(theme).textUnReadCount}>1</Text>
        </View>
    </View>
  </TouchableOpacity>;
};

export default ItemMessage

const styles = (theme:Theme) => StyleSheet.create({
    viewContainer : {
        // borderBottomColor:`${theme.BG_SECONDRY}EE`,
        flexDirection:'row',
        marginHorizontal:DimensionsValue.VALUE_20,
        paddingVertical:DimensionsValue.VALUE_10
    },
    viewDetails:{
        borderBottomColor:`${theme.BG_SECONDRY}33`,
        borderBottomWidth:1,
        justifyContent:'center',
        // alignSelf:'center',
        flex:1,
        marginHorizontal:DimensionsValue.VALUE_10
    },
    imageUser:{
        width:DimensionsValue.VALUE_50,
        height:DimensionsValue.VALUE_50,
        borderRadius:DimensionsValue.VALUE_50,
    },
    textUserName:{
        marginVertical:DimensionsValue.VALUE_5,
        fontSize:DimensionsValue.VALUE_14,
        fontWeight:'700',
        color:theme.TXT_PRIMARY,
    },
    textLastMessage:{
        fontSize:DimensionsValue.VALUE_14,
        marginBottom:DimensionsValue.VALUE_5,
        fontWeight:'400',
        color:theme.TXT_PRIMARY,
    },
    viewLastMessageDetails:{
        justifyContent:'center'
    },
    textLastMessageTime:{
        color:theme.TXT_PRIMARY,
        fontSize:DimensionsValue.VALUE_12,
        opacity:0.7,
        marginVertical:DimensionsValue.VALUE_5,
    },
    viewUnReadMessageCount:{
        width:DimensionsValue.VALUE_18,
        height:DimensionsValue.VALUE_18,
        borderRadius:DimensionsValue.VALUE_18,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.RED_LIGHT,
        alignSelf:'center',
        marginBottom:DimensionsValue.VALUE_5,
    },
    textUnReadCount:{
        color:Colors.WHITE,
        fontSize:DimensionsValue.VALUE_12,
        fontWeight:'700'
    }
})