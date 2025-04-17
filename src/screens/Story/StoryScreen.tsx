import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { Routes } from '../../navigation/Routes';
import QuranCard from '../../components/QuranCard'
import { getSurahWithTranslation } from '../../Service/QuranServices';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/ScreenHeader';
import { Theme } from '../../theme';

const StoryScreen = ({ route, navigation }:any) => {
  console.log('surah details call')
  const { surahNumber, surahName } = route?.params;
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSurah();
  }, []);

  const fetchSurah = async () => {
    setLoading(true);
    const surahData = await getSurahWithTranslation(surahNumber);
    setVerses(surahData);
    setLoading(false);
  };
console.log('verses state data is:',verses)
  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <>
    <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader
          title='My favourite'
          heading={surahName}
          canGoBack={true}
          isRightTitle={false}
        // currentPage={1}
        // totalPage={ 2}
        />
     <View style={{ padding: 20, paddingBottom: 60 , marginBottom: 35 }}>
      <Text style={{ fontSize: Theme.sizes[18], fontWeight: 'bold', textAlign: 'center' , color: Theme.colors.red }}>{surahName}</Text>
      <FlatList
        data={verses}
        keyExtractor={(item:any) => item.verse_key}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: Theme.sizes[18], textAlign: 'right', color: Theme.colors.black, fontWeight: 'bold' ,marginRight: 5 }}> <Text style={{fontSize: Theme.sizes[12], textAlign: 'right', color: Theme.colors.pink, fontWeight: 'regular' ,}} >{item.verse_key.split(":")[1]}:</Text> {item.text}</Text>
            <Text style={{ fontSize: Theme.sizes[12], color: Theme.colors.primary, marginTop: 5,  }}>{item.translation.text}</Text>
          </View>
        )}
      />
    </View>
    </SafeAreaView>
    </>
  );
};
export default StoryScreen;

// Dummy function to fetch story data
// const getStoryById = (id) => {
//   // Return the story object
// };

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 16 },
  hebrewText: { fontSize: 18, direction: 'rtl', textAlign: 'right' },
  transliteration: { fontSize: 16 },
  translation: { fontSize: 16 },
  grammar: { fontSize: 16 },
  button: { marginTop: 24, backgroundColor: '#2196F3', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});
