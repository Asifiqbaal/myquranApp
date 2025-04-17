
import axios from "axios";

// Base API URL (You can change it based on the API provider you choose)
const BASE_URL = "https://api.quran.com/api/v4";

// Get all Surahs
export const getAllSurahs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/chapters`);
   // console.log('response is:', JSON.stringify(response.data))
    return response.data; // Return Surah list
  } catch (error) {
    console.log("Error fetching Surahs:", error);
    return [];
  }
};
//$2y$10$v69nYWayN4Rq5c02u6iquGk2m0dvXSyIBvcvClgWvOMOHH5Xzo
// export const getAllHadees = async (hadithBook) => {

//   const apiUrl = 'https://hadithapi.com/api/hadiths?apiKey=$2y$10$v69nYWayN4Rq5c02u6iquGk2m0dvXSyIBvcvClgWvOMOHH5Xzo';
//   fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log(JSON.stringify(data));
//     return data
      
//   })
//   .catch(error => {
//       console.log(error);
//   })
// };

//  GetallParahs (Juz)
export const getAllParahs = async (hadithBook) => {

  try {
    const response = await axios.get(`https://api.islamicdevelopers.com/v1/al-asma-ul-husna`);
    console.log('response in duaaa is:',response)
    return response.data; // Return Juz list
  } catch (error) {
    console.log("Error fetching Parahs:", JSON.stringify(error));
    return [];
  }
};

// Get Surah with translation (Example: English)
export const getSurahWithTranslation = async (surahNumber) => {
    try {
      const response = await axios.get(`${BASE_URL}/quran/verses/uthmani?chapter_number=${surahNumber}`);
      const translationResponse = await axios.get(`${BASE_URL}/quran/translations/131?chapter_number=${surahNumber}`);
      
      const verses = response.data.verses;
      const translations = translationResponse.data.translations;
    console.log('translation response is is:',translationResponse)
    console.log('verses response is:',JSON.stringify(response))

      return verses.map((verse, index) => ({
        verse_key: verse.verse_key,
        text: verse.text_uthmani,
        translation: translations[index] || { text: "Translation not available" }
      }));
    } catch (error) {
      console.error(`Error fetching Surah ${surahNumber}:`, error);
      return [];
    }
  };