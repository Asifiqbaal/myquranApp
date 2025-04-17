import React, { useEffect } from 'react';
import { LinkingOptions, NavigationContainer, NavigationContainerRef, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import HomeScreen from '../screens/Home/HomeScreen';
import StoryScreen from '../screens/Story/StoryScreen';
import SurahDetails from '../screens/Surah/SurahDetails';
import NameScreen from '../screens/Name/NameScreen';
//import Tabs from './Tabbar/tabs';
import { Linking } from 'react-native';
//import { AppConstants, getDataFromCachedWithKey } from '../modules';
// import Notifications from '../screens/Notifications/Notifications';
// import Billings from '../screens/Billing/Billing';
import { navigationRef } from './navigationUtils';

const Stack = createStackNavigator();
export type StackParamList = {
  [label: string]: any;
};

const Router = () => {

  // const fetchData = async () => {
  //   const data = await getDataFromCachedWithKey(AppConstants.AsyncKeyLiterals.token);
  //   console.log('my data from cache===>>>', data);
  //   if (data) {
  //     Linking.addEventListener('url', (event) => {
  //       console.log('event init==>>>', event);
  //       const urlArray = event?.url?.split('/');
  //       const lastIndexValue = urlArray[urlArray.length - 1];
        
  //       urlArray?.includes('events') ? navigationRef.current?.navigate(Routes.viewEventScreen, { id: lastIndexValue }) : 
  //       navigationRef.current?.navigate(Routes.viewGroupScreen, { id: lastIndexValue });
  //     });
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
 
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Routes.SplashScreen} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.HomeScreen} component={HomeScreen}  />
        <Stack.Screen name={Routes.NameDetailScreen} component={NameScreen} />
        <Stack.Screen name={Routes.SurahDetailScreen} component={SurahDetails} />
        <Stack.Screen name={Routes.StoryScreen} component={StoryScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
