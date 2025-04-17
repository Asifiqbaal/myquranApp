import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, StyleSheet, Alert } from 'react-native';
import {getAllParahs, getAllSurahs, getSurahWithTranslation } from '../Service/QuranServices';
import { navigationRef } from '../navigation/navigationUtils';
import { Routes } from '../navigation/Routes';
import { Theme } from '../theme';
interface quranCardprop {
    navigation: any;
   
}
const QuranList : React.FC<quranCardprop> = ({
    navigation,
}) => {
    console.log('navigation is:',navigation)
  const [surahs, setSurahs] = useState <any>([]);
  const [parahs, setParahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuranData();
   
  }, []);
  
//console.log('surah state value is:',surahs)
  const fetchQuranData = async () => {

    setLoading(true);
    const surahList = await getAllSurahs();
   // const parahList = await getAllParahs();
    setSurahs(surahList);
    const book = 'sahih-bukhari'
   // const duaaList = await getAllParahs(book);
    //console.log('duaaList is:',duaaList)
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: Theme.sizes[14], fontWeight: 'bold' , color: Theme.colors.red, textAlign: 'center' }}>Surahs</Text>
      <View style={[styles.profileMenu,  {  }]}>
      <FlatList
         data={surahs?.chapters} 
            keyExtractor={(item: any) => item.id.toString()} 
            renderItem={({ item }) => (
    <TouchableOpacity style={[styles.menu, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]} onPress={() => navigation.navigate(Routes.StoryScreen, { surahNumber: item.id, surahName: item.name_arabic })}
>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* <View style={styles.menuIconContainer}> */}
      <Text style={{ fontSize: Theme.sizes[14], color: Theme.colors.greenShade, textAlign: 'left', fontWeight: 'medium' }}>
     <Text style={{fontSize: Theme.sizes[10], fontWeight: 'light' , color: Theme.colors.pink}}>  {item.id}.</Text>  {item.name_simple} ({item.name_arabic})
      </Text>
      <Text style={{ textAlign: 'right', marginLeft: 15 , color: Theme.colors.blackJive, fontSize: Theme.sizes[12],}}>
      {'Total Ayat'}_{item.verses_count} ({item.revelation_place === 'makkah' ? 'مکی' : 'مدنی'})
      </Text>
    </View>
  </TouchableOpacity>
  )}
 />
</View>
      
    </View>
  );
};
const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 14,
       // fontFamily: Theme.fonts.Regular,
        color: 'black',
        marginTop: 10,
        marginLeft: 15,
        textAlign: 'left',
        marginBottom: 10,
        // backgroundColor: Theme.colors.white
    },

    saveBtn: {
        height: 30,
        width: 30,
        borderRadius: 15,
      //  backgroundColor: Theme.colors.white,
        position: 'absolute',
        top: 8,
        right: 12,
        zIndex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        padding: 5,
        borderColor: 'yellow', 
        borderWidth: 1
    },
   
    menu: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 16,
        marginVertical: 10,
        //paddingBottom: 20
      },
      menuIconContainer: {
      //  backgroundColor: '#D0C62F',
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
        color: 'black',
       // fontSize: Theme.sizes[12],
       // fontFamily: Theme.fonts.Regular,
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
    

});
export default QuranList;
