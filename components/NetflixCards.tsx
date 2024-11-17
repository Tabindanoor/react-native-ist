import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { ThemedText } from './ThemedText';

const { width } = Dimensions.get('window');

interface data{
    id: string;
    title: string;
    image: string;
}
const data = [
  { id: '1', title: 'Stranger Things', image: '.././assets/images/pic.jpg' },
  { id: '2', title: 'Money Heist', image: '.././assets/images/pic.jpg' },
  { id: '3', title: 'The Witcher', image: '' },
  { id: '4', title: 'Bridgerton', image: '' },
  { id: '5', title: 'Squid Game', image: 'https://image-url.com/squid-game.jpg' },
  { id: '6', title: 'Breaking Bad', image: 'https://image-url.com/breaking-bad.jpg' },
  { id: '7', title: 'The Crown', image: 'https://image-url.com/the-crown.jpg' },
  { id: '8', title: 'Ozark', image: 'https://image-url.com/ozark.jpg' },
  { id: '9', title: 'Black Mirror', image: 'https://image-url.com/black-mirror.jpg' },
  { id: '10', title: 'Lupin', image: 'https://image-url.com/lupin.jpg' },
];

// Card Component for individual movie/show
const MovieCard = ({ id, title, image }:data) => (
  <View style={styles.card}>
   <Image source={require('.././assets/images/pic.jpg')}  style={styles.img}/>

    {/* <Image source={{ uri: image }} style={styles.cardImage} /> */}
    <ThemedText style={styles.cardTitle}>{title}</ThemedText>
  </View>
);

const NetflixCards = () => {
  return (
    <ScrollView>
      {/* Horizontal Scroll */}
      <View style={styles.sectionContainer}>
        <ThemedText style={styles.sectionTitle}>Top 10 Movies and Shows</ThemedText>
        <FlatList
          data={data}
          renderItem={({ item }) => <MovieCard id={item.id} title={item.title} image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContainer}
        />
      </View>

      {/* Vertical Scroll */}
      <View style={styles.sectionContainer}>
        <ThemedText style={styles.sectionTitle}>More to Watch</ThemedText>
        <FlatList
          data={data}
          renderItem={({ item }) => <MovieCard id={item.id} title={item.title} image={item.image} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.verticalScrollContainer}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 20,
  },
  img:{
    width: 80,
    height: 80,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  horizontalScrollContainer: {
    paddingLeft: 10,
  },
  verticalScrollContainer: {
    paddingHorizontal: 15,
  },
  card: {
    width: width * 0.6,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default NetflixCards;
