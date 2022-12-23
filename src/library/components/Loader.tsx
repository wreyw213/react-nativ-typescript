import React from 'react';
import { View, Modal, ActivityIndicator, ViewProps, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  viewAbsolute: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',
    zIndex: 9999
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  viewLoader: {
    height: 90,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 275,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

type Props = {
  loaderContainer?: ViewProps,
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
