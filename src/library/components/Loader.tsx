import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import DimensionsValue from '../utils/DimensionsValue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  viewAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0)',
    zIndex: 9999
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,)'
  },
  viewLoader: {
    height: DimensionsValue.VALUE_90,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: DimensionsValue.VALUE_275,
    borderRadius: DimensionsValue.VALUE_15,
    alignItems: 'center',
    justifyContent: 'center',

  }
})

type Props = {
  loaderContainer?: StyleProp<ViewStyle>,
  isModal?: boolean

}
const Loader: React.FC<Props> = ({ loaderContainer, isModal = true }) => {
  if (isModal)
    return <Modal
      transparent={true}
      animationType={'none'}
      visible={true}
    >
      <View style={[styles.container, loaderContainer]}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
    </Modal>
  else return <View style={styles.viewAbsolute}>
    <View style={[styles.viewContainer, loaderContainer]}>
      <View style={styles.viewLoader}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
    </View>
  </View>
}

export default Loader