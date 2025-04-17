import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Image, I18nManager, Alert } from 'react-native';
import StoryCard from '../../components/StoryCard';
import { Routes } from '../../navigation/Routes';
import QuranCard from '../../components/QuranCard'
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../../components/ScreenHeader';
import { Theme } from '../../theme';
const HomeScreen: React.FC = ({ navigation, route }: any) => {

const Menu = [
  { id: '1', label: 'Quran Pak Reading',  screen: Routes.HomeScreen },
  { id: '2', label: `ALLAH's Name`, screen: Routes.HomeScreen },
  

  // { id: '7', label: localizedStrings.chat, icon: Theme.icons.icn_language, screen: Routes.HomeScreen },

];
useEffect(() => {
  showAlert('This is sadqah Jaria for Our parents please pray for them. May Allah pak keep countless blessing on them  🤲');

}, []);

const showAlert = (message: string) => {
  Alert.alert(
      'Note',
    message,
    [{ text: 'Aameen', onPress: () => console.log('OK Pressed') }],
    { cancelable: false }
  );
};

const callModals = (value: any) => {
  console.log('value is:', value)
  if (value == 1) {
    navigation.navigate(Routes.SurahDetailScreen)
  } 
  else {
    navigation.navigate(Routes.NameDetailScreen)
    console.log('Show in else case:', value);
  }
}

const renderItem = ({ item }: any) => {

  return (
    <TouchableOpacity style={styles.menu} onPress={() => callModals(item.id)}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* <View style={styles.menuIconContainer}>
        <Image source={item.icon} style={[styles.menuIcon,]} />
      </View> */}
      <Text style={styles.menuText}>{item.label}</Text>
    </View>
    <Image source={Theme.icons.rightICn} style={[styles.menuIcon, { transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }] }]} />
  </TouchableOpacity>
  );

//{ transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }] }

};



  
    return (
      <>
       <SafeAreaView style={{ flex: 1, }}>
          <CustomHeader
          title='My favourite'
          heading={"Home"}
          canGoBack={false}
          isRightTitle={false}
        // currentPage={1}
        // totalPage={ 2}
        />
       <View style={[styles.profileMenu,]}>
            <FlatList
              data={Menu}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.ListContent}

            />
          </View>

    {/* <View style={styles.container}>

      <ScrollView>
        <QuranCard
       navigation={navigation}
      />
      </ScrollView>
     
    </View> */}
    
    </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  menu: {
    backgroundColor: Theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginLeft:10,
    marginRight: 10,
    borderRadius: 16,
    marginVertical: 10,
    //paddingBottom: 20
  },
  menuIconContainer: {
    backgroundColor: '#D0C62F',
    height: 44,
    width: 44,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuIcon: {
    height: 20,
    width: 20
  },
  menuText: {
    color: Theme.colors.black,
    fontSize: Theme.sizes[12],
    fontFamily: Theme.fonts.Bold,
    textAlign: 'center',
    marginHorizontal: 10
  },
  profileMenu: {
    marginTop: 10,
    // backgroundColor:'green',
    width: '100%',
    paddingBottom: 70,
    marginBottom: 50
  },
  ListContent: {
    paddingBottom: 80,
  },

});
