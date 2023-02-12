import React, {FC, useRef} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ImageBackground,
  View,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import useTheme from '../../library/hooks/useTheme';
import styles from './styles';

type Props = NativeStackScreenProps<any> & DrawerScreenProps<any>;

import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from './components/CardItem';
import Demo from './assets/data/demo.js';

const Home: FC<Props> = ({navigation}) => {
  const [theme] = useTheme();
  let swiper: any = useRef(null);

  return (
    <ImageBackground
      source={require('./assets/images/bg.png')}
      style={styles(theme).bg}>
      <View style={styles(theme).containerHome}>
        <View style={styles(theme).top}>{/* top items here */}</View>

        {/* @ts-ignore */}
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper}>
          {Demo.map((item, index) => (
            // @ts-ignore
            <Card key={index}>
              {/* @ts-ignore */}
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions={true}
                onPressLeft={() => swiper.current?.swipeLeft()}
                onPressRight={() => swiper.current?.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
