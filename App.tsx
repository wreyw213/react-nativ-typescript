/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native';

import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStack from './src/navigation/DrawerStack';
import analytics from '@react-native-firebase/analytics';
import TopTabNavigation from './src/navigation/TopTabNavigation';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { updateNavigationState } from './src/library/redux/navigationReducer';
import ScreenConstants from './src/library/constants/ScreenConstants';
import { updateTheme } from './src/library/redux/appReducer';
import ColorConstants from './src/library/constants/ColorConstants';
import useTheme from './src/library/hooks/useTheme';



function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch()
  const [theme] = useTheme()

  useEffect(() => {
    dispatch(updateTheme(isDarkMode ? 'dark' : 'light'))
  }, [])

  const Stack = createNativeStackNavigator();
  const routeNameRef = React.useRef(null);
  const navigationRef = React.useRef(null);

  const navigationTheme = {
    dark: theme == 'dark' ? true : false,
    colors: {
      primary: ColorConstants.TXT_PRIMARY[theme],
      background: ColorConstants.BG_PRIMARY[theme],
      card: ColorConstants.BG_PRIMARY[theme],
      text: ColorConstants.TXT_PRIMARY[theme],
      border: ColorConstants.BG_PRIMARY[theme],
      notification: ColorConstants.BG_SECONDRY[theme],
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ColorConstants.BG_PRIMARY[theme] }}>
      <StatusBar
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={ColorConstants.BG_PRIMARY[theme]}
      />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}
        onReady={() => {
          //@ts-ignore
          routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          //@ts-ignore
          const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

          //@ts-ignore
          dispatch(updateNavigationState(navigationRef.current?.getCurrentRoute()))

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name={ScreenConstants.TOP_TAB_STACK} component={TopTabNavigation} />
          <Stack.Screen options={{ title: 'Details' }} name={ScreenConstants.DETAILS_SCREEN} component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
