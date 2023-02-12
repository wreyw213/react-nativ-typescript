import { View, Image, StyleSheet, ActivityIndicator, PermissionsAndroid, Alert, Linking, Platform, ImageRequireSource, ImageSourcePropType, StyleProp, ViewStyle, } from 'react-native'
import React, { FC, useState } from 'react'
import ImageButton from './ImageButton';
import RNFetchBlob from 'react-native-blob-util';
import { ApiConstants, AppConstants, StringConstants } from '../constants';
import FastImage, { Source } from 'react-native-fast-image';
import { getDataFromAsyncStorage } from '../utils';
import DimensionsValue from '../utils/DimensionsValue';
import images from '../resources/images';


type Props = {
  source: Source | ImageRequireSource;
  hideModal: () => void;
  cached: boolean;
  fallbackSource: Source | ImageRequireSource,
  itemKey:number,
  style:StyleProp<ViewStyle>
};

const ImageDownloadComponent:FC<Props> = ({ fallbackSource, source, itemKey,style, ...props }) => {
  const [uri, setUri] = useState(source);
  const [isNotDownloaded, setIsNotDownloaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleError = () => {
    //@ts-ignore
    if (fallbackSource?.uri) {
      setIsNotDownloaded(true)
    }
    setUri(fallbackSource)
  }

  const handleDownloadReport = async () => {
    // android:requestLegacyExternalStorage
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (PermissionsAndroid.RESULTS.GRANTED !== granted) {
        Alert.alert(
          StringConstants.APP_NAME,
          StringConstants.PLEASE_GRANT_PERMISSION_TO_DOWNLOAD,
          [{text: 'OK', onPress: () => Linking.openSettings()}],
          {cancelable: true},
        );
        // Alert.showCancelButtonAlert("Please grant permission to download file", () => Linking.openSettings(), StringConstants.OK, true)
        return
      }
    }
    //@ts-ignore
    downloadReport(fallbackSource.uri)
  }

  const downloadReport = async (fileUrl:string) => {
    var date = new Date();
    const token = await getDataFromAsyncStorage(AppConstants.TOKEN)

    const { dirs: { DownloadDir, DocumentDir } } = RNFetchBlob.fs;
    const { config } = RNFetchBlob;
    const isIOS = Platform.OS == "ios";
    const aPath = Platform.select({ ios: DocumentDir, android: DownloadDir });
    const fPath = aPath + '/' + itemKey;
    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: fPath,
        notification: true,
      },
      android: {
        fileCache: false,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: false,
          path: fPath,
          description: 'Downloading xlsx...',
        }
      },
    });
    setIsLoading(true)
    //@ts-ignore
    config(configOptions)
      .fetch("GET", fileUrl)
      .then(res => {
        setIsLoading(false)
        setIsNotDownloaded(false)
        setUri(source)
        // if (isIOS) {
        //   setTimeout(() => {
        //     RNFetchBlob.ios.openDocument(res.data);
        //   }, 300);
        // } else {
        //   RNFetchBlob.android.actionViewIntent(res.path());
        // }

      })
      .catch(errorMessage => {
        console.log('errorMessage->>', errorMessage);
        setIsLoading(false)
      });
  };


  return (
    <>
      {isNotDownloaded ? <View>
        {isLoading ? <View style={[style, styles.viewLoader]}>
          <ActivityIndicator color={'white'} size={'large'} />
        </View>
          : <ImageButton onPress={handleDownloadReport} imageStyle={styles.imageDownLoad} containerStyle={[style, { justifyContent: 'center', backgroundColor: '#dedede' }]} image={images.IC_DOWNLOAD} />
        }
      </View> :
        <FastImage source={uri} {...props} onError={() => handleError()} />}
    </>
  )
}

export default ImageDownloadComponent


const styles = StyleSheet.create({
  imageDownLoad: {
    alignSelf: 'center',
    width: DimensionsValue.VALUE_30,
    height: DimensionsValue.VALUE_30,
  },
  viewLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },

})