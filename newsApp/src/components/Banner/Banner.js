import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from './Banner.style';
import news_banner_data from '../../news_banner_data.json';

const Banner = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image
          key={bannerNews.id}
          style={styles.image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default Banner;
