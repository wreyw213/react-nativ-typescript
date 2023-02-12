import React from 'react';
import styles from './styles';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import images from '../../../library/resources/images';

type Props = {
  actions:boolean
  description:any
  image:any
  matches:any
  name:any
  onPressLeft:any
  onPressRight:any
  status:any
  variant:any
}
const CardItem = ({
  actions,
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant
}:Props) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 20
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Image style={styles.imageActions} source={images.IC_HEART} />{' '}
            {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Image style={styles.imageActions} source={images.IC_STAR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Image style={styles.imageActions} source={images.IC_HEART} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressRight()}>
            <Image style={styles.imageActions} source={images.IC_PLUS} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Image style={styles.imageActions} source={images.IC_FLESH} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
