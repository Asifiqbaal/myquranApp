import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Routes } from '../../navigation/Routes';
import { Theme } from '../../theme';
interface MyComponentProps {
}

const SplashScreen: React.FC<MyComponentProps> = ({ navigation }: any) => {
  useEffect(() => {
    const fetchData = async () => {
      console.log('splash called')
        await new Promise(resolve => setTimeout(resolve, 2000));
        handleNavigation(Routes.HomeScreen)
    //  }
    //   else{
    //     handleNavigation(Routes.FeatureScreen)
    //   }
    }
    const handleNavigation = (type: string) => {
        navigation.navigate(type);      
      };

    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image style={{height: 400, width: 400}}
        source={Theme.icons.icn_mainApp}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white'
  },
logo: {
  width: 123,
  height: 116,
  marginBottom: 20,
  borderRadius: 24,
  //justifyContent: 'center', 
  alignSelf: 'center',
},
});
export default SplashScreen