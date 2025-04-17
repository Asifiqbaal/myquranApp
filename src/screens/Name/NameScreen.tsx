import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Image, I18nManager, Alert } from 'react-native';
import StoryCard from '../../components/StoryCard';
import { Routes } from '../../navigation/Routes';
import QuranCard from '../../components/QuranCard'
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../../components/ScreenHeader';
import { Theme } from '../../theme';
import { getAllParahs } from '../../Service/QuranServices';
const NameScreen: React.FC = ({ navigation, route }: any) => {
    const [surahs, setSurahs] = useState <any>([]);
    const [parahs, setParahs] = useState([]);
    const [loading, setLoading] = useState(true);
const Menu = [
  { id: '1', label: 'Quran Pak Reading',  screen: Routes.HomeScreen },
  { id: '2', label: `ALLAH's Name`, screen: Routes.HomeScreen },
  

  // { id: '7', label: localizedStrings.chat, icon: Theme.icons.icn_language, screen: Routes.HomeScreen },

];
useEffect(() => {
    fetchQuranData();
   
  }, []);
  
//console.log('surah state value is:',surahs)
  const fetchQuranData = async () => {

    setLoading(true);
    const duaaList = await getAllParahs();
    const convertedArray = Object.keys(duaaList).map((key) => ({
        id: key,
        ...duaaList[key],
      }));
    
      setSurahs(convertedArray);
    //console.log('duaaList is:',duaaList)
     //setSurahs(duaaList)
    setLoading(false);
  };
// const callModals = (value: any) => {
//   console.log('value is:', value)
//   if (value == 1) {
//     navigation.navigate(Routes.SurahDetailScreen)
//   } 
//   else {
    
//     //console.log('Show in else case:', value);
//   }
// }
console.log('duaaList is:',surahs)

const renderItem = ({ item }: any) => {
    console.log('Show in else case:');
  return (
    <TouchableOpacity style={styles.menu} >
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
      {/* <View style={styles.menuIconContainer}>
        <Image source={item.icon} style={[styles.menuIcon,]} />
      </View> */}
      <Text style={styles.menuText}>{item.native}</Text>
    </View>
    <Text>{item.latin}</Text>
    {/* <Image source={Theme.icons.rightICn} style={[styles.menuIcon, { transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }] }]} /> */}
  </TouchableOpacity>
  );

//{ transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }] }

};



  
    return (
      <>
       <SafeAreaView style={{ flex: 1, }}>
          <CustomHeader
          title='My favourite'
          heading={"ALLAH's Name"}
          canGoBack={true}
          isRightTitle={false}
        // currentPage={1}
        // totalPage={ 2}
        />
       <View style={[styles.profileMenu,]}>
            <FlatList
              data={surahs}
              renderItem={renderItem}
              keyExtractor={(item , index) => item.id.toString()}
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

export default NameScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  menu: {
    backgroundColor: Theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    textAlign: 'center',
    fontWeight: '700',
    alignItems: 'center',
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
