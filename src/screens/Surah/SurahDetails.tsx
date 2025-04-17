import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/ScreenHeader";
import { FlatList, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import QuranCard from '../../components/QuranCard'

const surahDetails: React.FC = ({ navigation, route }: any) => {
  return (
    <>
     <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader
        title='My favourite'
        heading={"Quran Pak"}
        canGoBack={true}
        isRightTitle={false}
      // currentPage={1}
      // totalPage={ 2}
      />
     
  <View style={styles.container}>

    <ScrollView>
      <QuranCard
     navigation={navigation}
    />
    </ScrollView>
   
  </View>
  
  </SafeAreaView>
  </>
);
};

export default surahDetails;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },

});