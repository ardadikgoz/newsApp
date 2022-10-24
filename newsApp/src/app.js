import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/Card/NewsCard';
import Banner from './components/Banner/Banner';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />; //renderItem içine kurmamak daha sağlıklı performans arttırır
  const keyFinder = item => item.u_id.toString();
  const readBanner = () => <Banner />;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Daily News</Text>
      <FlatList
        ListHeaderComponent={readBanner}
        keyExtractor={keyFinder} //id'ye göre alıp düzenliyor mutlaka koy unutma
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '#eceff1',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default App;

// flatlist cihazı yormadan bir sürü veri içinden ekrana gelmesi gerekenleri çekior
