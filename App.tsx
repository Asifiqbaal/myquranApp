
import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/navigation/Router';
function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
     <Router />
   </GestureHandlerRootView>
 </SafeAreaProvider>
     
);
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
