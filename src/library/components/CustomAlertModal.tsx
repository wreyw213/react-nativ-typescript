import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AppConstants, Colors, StringConstants } from '../constants';
import { wait } from '../utils';
import DimensionsValue from '../utils/DimensionsValue';
import Button from './Button';

const { width } = Dimensions.get('window');

export default class CustomAlertModal extends Component {

  // splitByNumber = { //custom spliter 
  //   [Symbol.split](str, spliter) {
  //     let pos = 0;
  //     let isInsideTag = false;
  //     const result = [];
  //     while (pos < str.length) {
  //       const matchPos = str.indexOf(spliter, pos);
  //       if (matchPos === -1) {
  //         result.push({ isInsideTag: false, string: str.substring(pos) });
  //         break;
  //       } else if (isInsideTag) {
  //         result.push({
  //           isInsideTag: true,
  //           string: str.substring(pos, matchPos)
  //         });
  //         isInsideTag = false;
  //         pos = matchPos + spliter.length;
  //       } else {
  //         result.push({
  //           isInsideTag: false,
  //           string: str.substring(pos, matchPos)
  //         });
  //         isInsideTag = true;
  //         pos = matchPos + spliter.length;
  //       }
  //     }
  //     return result;
  //   }
  // };

  // openMail = async (url) => {
  //   try {
  //     console.log("url->>", url);
  //     await Linking.openURL(url)
  //   } catch (err) {
  //     console.log("error while opening Mail")
  //   }
  // }

  // renderContent = (msg) => {
  //   const arr = msg ? msg.split(this.splitByNumber, "<a>") : []
  //   return <Text style={styles.textMessage}>
  //     {arr && arr.map((item, index) => <Text key={index}>{item.isInsideTag ? <TouchableOpacity onPress={() => this.openMail(item.string)}>
  //       <Text style={styles.textAnchor}>{item.string}</Text>
  //     </TouchableOpacity> : item.string}</Text>)}
  //   </Text>
  // }


  render() {
    //@ts-ignore
    const { message, onCancel, showCancel, onOk, leftButtonTitle, rightButtonTitle, image } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
      >
        <View style={styles.containerMain}>

          <View style={styles.containerInner}>
            {image ? <FastImage
              style={styles.imageUser}
              source={image}
              resizeMode={FastImage.resizeMode.cover}
            /> : <Text style={styles.textAlertHeading}>{StringConstants.APP_NAME}</Text>}
            <Text style={styles.textMessage}>{message}</Text>
            {/* {this.renderContent(message)} */}

            <View style={styles.viewAction}>
              {showCancel && <Button
                onPress={onCancel}
                textStyle={styles.textCancel}
                containerStyle={styles.touchCancel}
                title={leftButtonTitle ? leftButtonTitle : StringConstants.CANCEL}
              />}


              <Button
                onPress={async () => {
                  onCancel();
                  await wait();
                  onOk();
                }}
                containerStyle={styles.touchOk}
                title={rightButtonTitle ? rightButtonTitle : StringConstants.OK}
              />
            </View>

          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInner: {
    backgroundColor: Colors.WHITE,
    width: width - DimensionsValue.VALUE_40,
    borderRadius: DimensionsValue.VALUE_10,
    paddingVertical: DimensionsValue.VALUE_15,
    paddingHorizontal: DimensionsValue.VALUE_20
  },
  // textAnchor: {
  //   textDecorationLine: 'underline',
  //   color: Colors.BLACK,
  //   fontSize: DimensionsValue.VALUE_16,
  //   fontFamily: AppConstants.FONT_ROBOT_REGULAR
  // },
  imageUser: {
    width: DimensionsValue.VALUE_60,
    height: DimensionsValue.VALUE_60,
    borderRadius: DimensionsValue.VALUE_60,
    alignSelf: 'center',
    backgroundColor: '#dedede'
  },
  textAlertHeading: {
    color: Colors.BLACK,
    fontSize: DimensionsValue.VALUE_18,
    alignSelf: 'center'
  },
  textMessage: {
    color: Colors.BLACK,
    fontSize: DimensionsValue.VALUE_14,
    lineHeight: DimensionsValue.VALUE_25,
    marginBottom: DimensionsValue.VALUE_20,
    marginHorizontal: DimensionsValue.VALUE_10,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: DimensionsValue.VALUE_10
  },
  touchCancel: {
    backgroundColor: Colors.WHITE,
    minWidth: DimensionsValue.VALUE_140,
    height: DimensionsValue.VALUE_60,
    borderWidth: 2,
    borderColor: Colors.DARK_BLUE,
    marginRight: DimensionsValue.VALUE_10
  },
  textCancel: {
    color: Colors.DARK_BLUE,
    fontSize: DimensionsValue.VALUE_18,
  },
  touchOk: {
    minWidth: DimensionsValue.VALUE_140,
    height: DimensionsValue.VALUE_60,
  },
  viewAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: DimensionsValue.VALUE_10,
    marginTop: DimensionsValue.VALUE_10
  }
})
